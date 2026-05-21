import { useMemo, useState } from 'react'
import {
  departmentOrder,
  questions,
  results,
  type DepartmentKey,
  type Question,
} from './data/diagnosis'

type Screen = 'home' | 'quiz' | 'result'
type Scores = Record<DepartmentKey, number>

const emptyScores = (): Scores => ({ C: 0, M: 0, E: 0, A: 0 })

const choiceMarkers = ['01', '02', '03', '04']

function shuffleItems<T>(items: T[]) {
  const shuffled = [...items]

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    const currentItem = shuffled[index]
    shuffled[index] = shuffled[randomIndex]
    shuffled[randomIndex] = currentItem
  }

  return shuffled
}

function createQuizQuestions(): Question[] {
  return questions.map((question) => ({
    ...question,
    choices: shuffleItems(question.choices),
  }))
}

function pickResult(scores: Scores, answers: DepartmentKey[]) {
  const maxScore = Math.max(...departmentOrder.map((key) => scores[key]))
  const candidates = departmentOrder.filter((key) => scores[key] === maxScore)

  if (candidates.length === 1) {
    return candidates[0]
  }

  const recentMatch = [...answers]
    .reverse()
    .find((answer) => candidates.includes(answer))

  return recentMatch ?? candidates[0]
}

function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [questionIndex, setQuestionIndex] = useState(0)
  const [scores, setScores] = useState<Scores>(emptyScores)
  const [answers, setAnswers] = useState<DepartmentKey[]>([])
  const [quizQuestions, setQuizQuestions] =
    useState<Question[]>(createQuizQuestions)

  const questionCount = quizQuestions.length
  const currentQuestion = quizQuestions[questionIndex]
  const progress = Math.round(((questionIndex + 1) / questionCount) * 100)
  const resultKey = useMemo(() => pickResult(scores, answers), [answers, scores])
  const result = results[resultKey]
  const shareText = `明石高専 学科タイプ診断の結果は「${result.shortName}」！${result.catchcopy}`
  const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText,
  )}`

  const startQuiz = () => {
    setScores(emptyScores())
    setAnswers([])
    setQuizQuestions(createQuizQuestions())
    setQuestionIndex(0)
    setScreen('quiz')
  }

  const selectChoice = (department: DepartmentKey) => {
    const nextScores = {
      ...scores,
      [department]: scores[department] + 1,
    }
    const nextAnswers = [...answers, department]

    setScores(nextScores)
    setAnswers(nextAnswers)

    if (questionIndex >= questionCount - 1) {
      setScreen('result')
      return
    }

    setQuestionIndex((index) => index + 1)
  }

  const goBack = () => {
    if (questionIndex === 0) {
      setScreen('home')
      return
    }

    const previousAnswer = answers[answers.length - 1]
    if (previousAnswer) {
      setScores((current) => ({
        ...current,
        [previousAnswer]: Math.max(0, current[previousAnswer] - 1),
      }))
      setAnswers((current) => current.slice(0, -1))
    }
    setQuestionIndex((index) => Math.max(0, index - 1))
  }

  return (
    <main className="min-h-svh overflow-hidden bg-[radial-gradient(circle_at_top_left,#dff7ff_0,#f8fbff_30%,transparent_52%),linear-gradient(135deg,#f7fbff_0%,#f7f2ff_44%,#fff7e9_100%)] text-slate-900">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:32px_32px] opacity-45" />

      <div className="relative mx-auto flex min-h-svh w-full max-w-5xl flex-col px-4 py-5 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between gap-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          <span>Akashi Kosen</span>
          <span className="rounded-full border border-white/70 bg-white/55 px-3 py-1 shadow-sm backdrop-blur">
            C / M / E / A
          </span>
        </header>

        {screen === 'home' && (
          <section className="grid flex-1 place-items-center py-10">
            <div className="w-full max-w-3xl text-center">
              <div className="mx-auto mb-7 grid h-24 w-24 place-items-center rounded-lg border border-white/80 bg-white/60 shadow-glow backdrop-blur">
                <div className="grid grid-cols-2 gap-1.5 text-sm font-black text-slate-700">
                  {departmentOrder.map((key) => (
                    <span
                      className="grid h-8 w-8 place-items-center rounded-md bg-slate-950 text-white"
                      key={key}
                    >
                      {key}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-slate-500">
                Type Finder
              </p>
              <h1 className="text-balance text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
                明石高専
                <br />
                学科タイプ診断
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                あなたの中に眠る高専学科タイプを診断しよう
              </p>

              <button
                className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-base font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-300"
                onClick={startQuiz}
                type="button"
              >
                診断をはじめる
              </button>

              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-2 text-left text-xs font-semibold text-slate-600 sm:grid-cols-4">
                {departmentOrder.map((key) => (
                  <div
                    className={`rounded-lg border ${results[key].palette.border} ${results[key].palette.card} px-3 py-3 shadow-sm`}
                    key={key}
                  >
                    <span className="mb-1 block text-lg font-black text-slate-950">
                      {key}
                    </span>
                    {results[key].shortName}
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {screen === 'quiz' && (
          <section className="grid flex-1 place-items-center py-7">
            <div className="w-full max-w-2xl">
              <div className="mb-6 rounded-lg border border-white/75 bg-white/65 p-4 shadow-glow backdrop-blur sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-4 text-sm font-bold text-slate-500">
                  <span>
                    Q{currentQuestion.id} / {questionCount}
                  </span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className="h-full rounded-full bg-slate-950 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <div className="rounded-lg border border-white/80 bg-white/80 p-5 shadow-card backdrop-blur sm:p-7">
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-slate-400">
                  Select one
                </p>
                <h2 className="text-pretty text-2xl font-black leading-relaxed text-slate-950 sm:text-3xl">
                  {currentQuestion.text}
                </h2>

                <div className="mt-7 grid gap-3">
                  {currentQuestion.choices.map((choice, choiceIndex) => (
                    <button
                      className="group flex min-h-16 w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-card focus:outline-none focus:ring-4 focus:ring-slate-200"
                      key={choice.label}
                      onClick={() => selectChoice(choice.department)}
                      type="button"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-slate-950 text-sm font-black text-white transition group-hover:scale-105">
                        {choiceMarkers[choiceIndex]}
                      </span>
                      <span className="text-sm font-bold leading-6 text-slate-800 sm:text-base">
                        {choice.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-sm font-bold text-slate-500">
                <button
                  className="rounded-full px-3 py-2 transition hover:bg-white/65 hover:text-slate-800 focus:outline-none focus:ring-4 focus:ring-white"
                  onClick={goBack}
                  type="button"
                >
                  戻る
                </button>
                <span>直感で選んでOK</span>
              </div>
            </div>
          </section>
        )}

        {screen === 'result' && (
          <section className="grid flex-1 place-items-center py-7">
            <div className="w-full max-w-3xl">
              <div
                className={`overflow-hidden rounded-lg border ${result.palette.border} ${result.palette.card} shadow-card`}
              >
                <div className={`bg-gradient-to-br ${result.palette.hero} p-1`}>
                  <div className="rounded-md bg-white/90 p-5 backdrop-blur sm:p-8">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-black uppercase tracking-[0.24em] text-slate-500">
                          Your Department Type
                        </p>
                        <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 sm:text-5xl">
                          {result.shortName}
                        </h2>
                        <p className="mt-2 text-sm font-black text-slate-500">
                          {result.name}
                        </p>
                        <p className="mt-3 text-lg font-black text-slate-700">
                          {result.catchcopy}
                        </p>
                      </div>
                      <div className="grid h-20 w-20 shrink-0 place-items-center rounded-lg bg-slate-950 text-4xl font-black text-white shadow-lg">
                        {result.key}
                      </div>
                    </div>

                    <p className="mt-6 text-sm leading-7 text-slate-700 sm:text-base sm:leading-8">
                      {result.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {result.keywords.map((keyword) => (
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-black ${result.palette.badge}`}
                          key={keyword}
                        >
                          #{keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
                  <section className={`${result.palette.soft} rounded-lg p-4`}>
                    <h3 className="text-base font-black text-slate-950">
                      向いている行動
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {result.suitedActions.map((item) => (
                        <li className="flex gap-2" key={item}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className={`${result.palette.soft} rounded-lg p-4`}>
                    <h3 className="text-base font-black text-slate-950">
                      あるある
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                      {result.aruaru.map((item) => (
                        <li className="flex gap-2" key={item}>
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="border-t border-white/80 px-5 py-4 sm:px-7">
                  <div className="grid grid-cols-4 gap-2">
                    {departmentOrder.map((key) => (
                      <div key={key}>
                        <div className="mb-1 flex items-center justify-between text-xs font-black text-slate-500">
                          <span>{key}</span>
                          <span>{scores[key]}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-white/80">
                          <div
                            className="h-full rounded-full bg-slate-950"
                            style={{
                              width: `${(scores[key] / questionCount) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white/75 px-5 py-3 text-center text-sm font-black text-slate-800 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-4 focus:ring-white"
                  href={shareUrl}
                  rel="noreferrer"
                  target="_blank"
                >
                  Xで結果をシェア
                </a>
                <button
                  className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-black shadow-card transition focus:outline-none focus:ring-4 focus:ring-slate-300 ${result.palette.button}`}
                  onClick={startQuiz}
                  type="button"
                >
                  もう一度診断する
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default App
