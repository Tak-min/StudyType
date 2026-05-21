export type DepartmentKey = 'C' | 'M' | 'E' | 'A'

export type Choice = {
  label: string
  department: DepartmentKey
}

export type Question = {
  id: number
  text: string
  choices: Choice[]
}

export type DepartmentResult = {
  key: DepartmentKey
  name: string
  shortName: string
  catchcopy: string
  summary: string
  keywords: string[]
  suitedActions: string[]
  aruaru: string[]
  palette: {
    hero: string
    card: string
    badge: string
    border: string
    button: string
    soft: string
  }
}

export const departmentOrder: DepartmentKey[] = ['C', 'M', 'E', 'A']

export const questions: Question[] = [
  {
    id: 1,
    text: '休日にやりたいことは？',
    choices: [
      { label: '知らない街や駅を歩いてみる', department: 'C' },
      { label: 'バイクや機械をいじる', department: 'M' },
      { label: 'PCで作業やゲーム、開発をする', department: 'E' },
      { label: '美術館や建築を見に行く', department: 'A' },
    ],
  },
  {
    id: 2,
    text: 'つい気になってしまうものは？',
    choices: [
      { label: '橋、道路、ダム、駅', department: 'C' },
      { label: '歯車、工具、エンジン', department: 'M' },
      { label: '配線、コード、アルゴリズム', department: 'E' },
      { label: '建物、空間、デザイン', department: 'A' },
    ],
  },
  {
    id: 3,
    text: '作業するときのスタイルは？',
    choices: [
      { label: '現地に行って自分の目で見たい', department: 'C' },
      { label: 'とりあえず手を動かして作りたい', department: 'M' },
      { label: 'まず効率のいい方法を考えたい', department: 'E' },
      { label: '見た目や完成度にこだわりたい', department: 'A' },
    ],
  },
  {
    id: 4,
    text: '自分に近い言葉は？',
    choices: [
      { label: '行動力', department: 'C' },
      { label: '職人気質', department: 'M' },
      { label: '効率化担当', department: 'E' },
      { label: 'クリエイター', department: 'A' },
    ],
  },
  {
    id: 5,
    text: '旅行先で見がちなものは？',
    choices: [
      { label: '駅やインフラ', department: 'C' },
      { label: '乗り物や機械', department: 'M' },
      { label: '電源やWi-Fi環境', department: 'E' },
      { label: '建物や街並み', department: 'A' },
    ],
  },
  {
    id: 6,
    text: '高専生活で強そうな場面は？',
    choices: [
      { label: 'フィールドワーク', department: 'C' },
      { label: '実習・加工', department: 'M' },
      { label: 'プログラミング・計算', department: 'E' },
      { label: '製図・制作', department: 'A' },
    ],
  },
  {
    id: 7,
    text: 'よく使いそうな道具は？',
    choices: [
      { label: '地図やカメラ', department: 'C' },
      { label: '工具や作業服', department: 'M' },
      { label: 'PCやキーボード', department: 'E' },
      { label: '製図道具や模型材料', department: 'A' },
    ],
  },
  {
    id: 8,
    text: 'グループ作業での立ち位置は？',
    choices: [
      { label: '外に出て情報を集める', department: 'C' },
      { label: '実物を作って形にする', department: 'M' },
      { label: 'システムや資料を整える', department: 'E' },
      { label: '見た目や構成を整える', department: 'A' },
    ],
  },
  {
    id: 9,
    text: '課題提出前、最後に整えたいところは？',
    choices: [
      { label: '現地感のある写真や根拠を足す', department: 'C' },
      { label: '試作品や構造をもう一度調整する', department: 'M' },
      { label: '表計算やコードでミスを見つける', department: 'E' },
      { label: '余白、配色、見せ方を整える', department: 'A' },
    ],
  },
  {
    id: 10,
    text: 'テンションが上がりやすい授業・活動は？',
    choices: [
      { label: '測量、まちづくり、防災', department: 'C' },
      { label: '加工、材料、機械設計', department: 'M' },
      { label: '情報、数学、電子回路', department: 'E' },
      { label: '設計、デザイン、模型制作', department: 'A' },
    ],
  },
  {
    id: 11,
    text: 'カバンに入っていそうなものは？',
    choices: [
      { label: 'カメラ、モバイル地図、歩きやすい靴', department: 'C' },
      { label: '六角レンチ、メモ帳、作業用の小物', department: 'M' },
      { label: '充電器、変換アダプタ、イヤホン', department: 'E' },
      { label: 'スケール、ペン、模型材料の端材', department: 'A' },
    ],
  },
  {
    id: 12,
    text: 'チームで褒められるとしたら？',
    choices: [
      { label: 'フットワークが軽くて頼れる', department: 'C' },
      { label: '手を動かして形にするのが早い', department: 'M' },
      { label: '仕組み化と効率化がうまい', department: 'E' },
      { label: '完成イメージを伝えるのがうまい', department: 'A' },
    ],
  },
  {
    id: 13,
    text: '高専祭で関わるなら？',
    choices: [
      { label: '会場の動線や案内を考える', department: 'C' },
      { label: '装置や展示物を組み上げる', department: 'M' },
      { label: '受付システムや告知ページを作る', department: 'E' },
      { label: '装飾や空間演出をまとめる', department: 'A' },
    ],
  },
  {
    id: 14,
    text: '息抜きのしかたは？',
    choices: [
      { label: '散歩や小旅行で景色を変える', department: 'C' },
      { label: 'メンテナンス動画や工作を見る', department: 'M' },
      { label: '環境構築やゲームで没頭する', department: 'E' },
      { label: '展示、写真、インテリアを眺める', department: 'A' },
    ],
  },
  {
    id: 15,
    text: '資料づくりでこだわりたいのは？',
    choices: [
      { label: '現場の空気が伝わる構成', department: 'C' },
      { label: '構造や仕組みが伝わる図解', department: 'M' },
      { label: 'データが正しく読み取れる整理', department: 'E' },
      { label: '見た瞬間に伝わるレイアウト', department: 'A' },
    ],
  },
  {
    id: 16,
    text: 'つい誰かに話したくなる話題は？',
    choices: [
      { label: 'この橋や道路、どう作ったんだろう', department: 'C' },
      { label: 'この機構、どう動いているんだろう', department: 'M' },
      { label: 'この処理、もっと短くできそう', department: 'E' },
      { label: 'この空間、光の入り方が良すぎる', department: 'A' },
    ],
  },
]

export const results: Record<DepartmentKey, DepartmentResult> = {
  C: {
    key: 'C',
    name: '都市システム工学科タイプ',
    shortName: 'C科タイプ',
    catchcopy: '街と旅を愛するフィールドワーカー',
    summary:
      '気になったらまず現地へ。駅、道路、橋、ダム、街の動きなど、日常の景色から面白さを見つけるタイプです。人と場所をつなぐ視点があり、行動力と観察力でチームを前に進めます。',
    keywords: ['街歩き', 'インフラ', '現地調査', '行動力'],
    suitedActions: [
      '散歩や旅行で見つけた気づきをメモする',
      'フィールドワークで写真やデータを集める',
      'イベントでは動線や全体の流れを見る',
    ],
    aruaru: [
      '旅行先で橋や駅を見がち',
      'ダムや道路の話になると少しテンションが上がる',
      'なんだかんだ外に出るのが好き',
      '自分のことを一番まともだと思っている',
    ],
    palette: {
      hero: 'from-sky-500 via-cyan-400 to-emerald-400',
      card: 'bg-sky-50',
      badge: 'bg-sky-100 text-sky-900',
      border: 'border-sky-200',
      button: 'bg-sky-900 hover:bg-sky-800 text-white',
      soft: 'bg-white/70',
    },
  },
  M: {
    key: 'M',
    name: '機械工学科タイプ',
    shortName: 'M科タイプ',
    catchcopy: '工具とロマンで動くものづくり職人',
    summary:
      '仕組みが見えるとわくわくする実践派。工具、金属、エンジン、加工など、手を動かして形にすることに強いタイプです。こだわりを大事にしながら、ものづくりの熱量で場を動かします。',
    keywords: ['工具', '加工', '機構', '実習'],
    suitedActions: [
      '試作してから改善点を見つける',
      '実習や制作で構造を確かめる',
      'チームのアイデアを形にして検証する',
    ],
    aruaru: [
      '歯車を見ると歯数を数えたくなる',
      '金属や工具の話で盛り上がれる',
      '車やバイクの話になると急に詳しくなる',
      '作業服に安心感がある',
    ],
    palette: {
      hero: 'from-zinc-600 via-stone-500 to-amber-400',
      card: 'bg-stone-50',
      badge: 'bg-amber-100 text-amber-950',
      border: 'border-amber-200',
      button: 'bg-stone-900 hover:bg-stone-800 text-white',
      soft: 'bg-white/70',
    },
  },
  E: {
    key: 'E',
    name: '電気情報工学科タイプ',
    shortName: 'E科タイプ',
    catchcopy: '効率とコードで世界を動かすデジタル職人',
    summary:
      '考える前にPCを開いているかもしれない効率派。プログラミング、電子回路、数学、連絡ツールに強く、仕組みを整えて物事をスムーズにするタイプです。好きな分野の話になると集中力が一段上がります。',
    keywords: ['コード', '回路', '数学', '効率化'],
    suitedActions: [
      '手作業をツールやコードで楽にする',
      '資料、連絡、データを整理して共有する',
      '電子工作や開発でアイデアを試す',
    ],
    aruaru: [
      'いつもPCを開いている',
      '連絡手段はだいたいDiscord',
      '効率化できることを探しがち',
      '好きな分野の話になると急に早口になる',
    ],
    palette: {
      hero: 'from-indigo-500 via-violet-500 to-fuchsia-400',
      card: 'bg-indigo-50',
      badge: 'bg-indigo-100 text-indigo-950',
      border: 'border-indigo-200',
      button: 'bg-indigo-950 hover:bg-indigo-900 text-white',
      soft: 'bg-white/70',
    },
  },
  A: {
    key: 'A',
    name: '建築学科タイプ',
    shortName: 'A科タイプ',
    catchcopy: '空間と美意識で世界を見るクリエイター',
    summary:
      '空間の雰囲気や見せ方に自然と目が向く表現派。建物、デザイン、模型、アートなどから刺激を受け、イメージを形にすることが得意です。細部へのこだわりで、場の印象をぐっと引き上げます。',
    keywords: ['建築', '空間', 'デザイン', '表現'],
    suitedActions: [
      '建物や街並みの写真を集めて観察する',
      '模型や図面でアイデアを具体化する',
      'イベントや発表の見え方をデザインする',
    ],
    aruaru: [
      '旅行先でまず建物を見る',
      '荷物が多くなりがち',
      '製図や模型で机の上がすごいことになる',
      'デザインや空間へのこだわりが強い',
    ],
    palette: {
      hero: 'from-rose-400 via-orange-300 to-lime-300',
      card: 'bg-rose-50',
      badge: 'bg-rose-100 text-rose-950',
      border: 'border-rose-200',
      button: 'bg-rose-950 hover:bg-rose-900 text-white',
      soft: 'bg-white/70',
    },
  },
}
