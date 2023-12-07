const SetupForm = document.SetupForm
const StartButton = SetupForm.StartButton
const monstersData = [
    {name: "M-001 ジャベリンテイル",
        elm: "混沌", Atk: 3, SAtk: 0, Def: 1, SDef: 0, Speed: 2},
    {name: "M-002 ブレイズドラゴン",
        elm: "混沌", Atk: 2, SAtk: 2, Def: 0, SDef: 0, Speed: 2},
    {name: "M-003 バーニングバシリスク",
        elm: "混沌", Atk: 2, SAtk: 0, Def: 2, SDef: 0, Speed: 2},
    {name: "M-004 フレイムワイバーン",
        elm: "混沌", Atk: 1, SAtk: 0, Def: 0, SDef: 2, Speed: 3},
    {name: "M-005 サンダーラプター",
        elm: "混沌", Atk: 2, SAtk: 0, Def: 0, SDef: 0, Speed: 3},
    {name: "M-006 スピットファング",
        elm: "混沌", Atk: 3, SAtk: 0, Def: 1, SDef: 0, Speed: 2},
    {name: "M-007 フューリアス",
        elm: "混沌", Atk: 1, SAtk: 2, Def: 0, SDef: 1, Speed: 2},
    {name: "M-008 フレイムスケイル",
        elm: "混沌", Atk: 1, SAtk: 0, Def: 2, SDef: 0, Speed: 3},
    {name: "M-009 ソニッククロコ",
        elm: "混沌", Atk: 2, SAtk: 0, Def: 0, SDef: 2, Speed: 2},
    {name: "M-010 ラヴァワーム",
        elm: "混沌", Atk: 1, SAtk: 0, Def: 1, SDef: 0, Speed: 3},
    {name: "M-011 オーシャンタイタン",
        elm: "幻想", Atk: 2, SAtk: 2, Def: 0, SDef: 2, Speed: 0},
    {name: "M-012 アバロンシール",
        elm: "幻想", Atk: 0, SAtk: 3, Def: 1, SDef: 2, Speed: 0},
    {name: "M-013 プロメテウスシャーク",
        elm: "幻想", Atk: 0, SAtk: 1, Def: 2, SDef: 3, Speed: 0},
    {name: "M-014 ドレッドノート",
        elm: "幻想", Atk: 0, SAtk: 1, Def: 0, SDef: 3, Speed: 1},
    {name: "M-015 グラブクラブ",
        elm: "幻想", Atk: 0, SAtk: 2, Def: 0, SDef: 2, Speed: 2},
    {name: "M-016 シーサーペント",
        elm: "幻想", Atk: 2, SAtk: 1, Def: 1, SDef: 2, Speed: 0},
    {name: "M-017 タイタンオクトパス",
        elm: "幻想", Atk: 0, SAtk: 3, Def: 0, SDef: 3, Speed: 0},
    {name: "M-018 ミラージュランプ",
        elm: "幻想", Atk: 0, SAtk: 1, Def: 2, SDef: 2, Speed: 1},
    {name: "M-019 レヴィアタン",
        elm: "幻想", Atk: 0, SAtk: 2, Def: 0, SDef: 3, Speed: 0},
    {name: "M-020 セイレーン",
        elm: "幻想", Atk: 0, SAtk: 1, Def: 1, SDef: 2, Speed: 2},
    {name: "M-021 ブラッドファング",
        elm: "超常", Atk: 2, SAtk: 0, Def: 2, SDef: 1, Speed: 1},
    {name: "M-022 ナイトスコーピオン",
        elm: "超常", Atk: 0, SAtk: 2, Def: 2, SDef: 2, Speed: 0},
    {name: "M-023 イビルホーネット",
        elm: "超常", Atk: 0, SAtk: 1, Def: 3, SDef: 1, Speed: 0},
    {name: "M-024 ウルフォン",
        elm: "超常", Atk: 1, SAtk: 0, Def: 2, SDef: 3, Speed: 0},
    {name: "M-025 バグズキング",
        elm: "超常", Atk: 0, SAtk: 0, Def: 2, SDef: 2, Speed: 2},
    {name: "M-026 シャドーパンサー",
        elm: "超常", Atk: 2, SAtk: 0, Def: 2, SDef: 2, Speed: 0},
    {name: "M-027 ファンガス",
        elm: "超常", Atk: 0, SAtk: 2, Def: 2, SDef: 1, Speed: 1},
    {name: "M-028 ワイルドシープ",
        elm: "超常", Atk: 1, SAtk: 0, Def: 3, SDef: 1, Speed: 0},
    {name: "M-029 クリムゾントード",
        elm: "超常", Atk: 0, SAtk: 1, Def: 2, SDef: 3, Speed: 0},
    {name: "M-030 スペースハムスター",
        elm: "超常", Atk: 0, SAtk: 0, Def: 3, SDef: 1, Speed: 2},
    {name: "M-031 アンティークタンク",
        elm: "悪意", Atk: 2, SAtk: 2, Def: 0, SDef: 0, Speed: 2},
    {name: "M-032 オールドバルブ",
        elm: "悪意", Atk: 0, SAtk: 3, Def: 1, SDef: 0, Speed: 1},
    {name: "M-033 ミステリオン",
        elm: "悪意", Atk: 0, SAtk: 2, Def: 2, SDef: 1, Speed: 1},
    {name: "M-034 グレートギア",
        elm: "悪意", Atk: 0, SAtk: 2, Def: 1, SDef: 2, Speed: 1},
    {name: "M-035 アッシュバイパー",
        elm: "悪意", Atk: 0, SAtk: 3, Def: 0, SDef: 0, Speed: 3},
    {name: "M-036 ディープダーク",
        elm: "悪意", Atk: 2, SAtk: 2, Def: 0, SDef: 0, Speed: 2},
    {name: "M-037 アンドロミラー",
        elm: "悪意", Atk: 0, SAtk: 3, Def: 0, SDef: 1, Speed: 1},
    {name: "M-038 スペースクリスタル",
        elm: "悪意", Atk: 0, SAtk: 3, Def: 2, SDef: 0, Speed: 1},
    {name: "M-039 ホイールオブフォーチュン",
        elm: "悪意", Atk: 0, SAtk: 2, Def: 0, SDef: 2, Speed: 2},
    {name: "M-040 ラスティタワー",
        elm: "悪意", Atk: 0, SAtk: 3, Def: 0, SDef: 0, Speed: 3},
    {name: "M-041 ディバインロード",
        elm: "神秘", Atk: 3, SAtk: 0, Def: 2, SDef: 0, Speed: 0},
    {name: "M-042 グロリアスブレス",
        elm: "神秘", Atk: 2, SAtk: 2, Def: 1, SDef: 1, Speed: 0},
    {name: "M-043 セラフィム",
        elm: "神秘", Atk: 3, SAtk: 0, Def: 3, SDef: 0, Speed: 0},
    {name: "M-044 ハーモニーウイング",
        elm: "神秘", Atk: 2, SAtk: 0, Def: 1, SDef: 2, Speed: 1},
    {name: "M-045 ミスティックエンジェル",
        elm: "神秘", Atk: 3, SAtk: 0, Def: 1, SDef: 0, Speed: 2},
    {name: "M-046 ミスリルファイター",
        elm: "神秘", Atk: 3, SAtk: 0, Def: 1, SDef: 1, Speed: 0},
    {name: "M-047 セレスティアルグローリー",
        elm: "神秘", Atk: 2, SAtk: 2, Def: 2, SDef: 0, Speed: 0},
    {name: "M-048 アークエンジェル",
        elm: "神秘", Atk: 2, SAtk: 0, Def: 3, SDef: 0, Speed: 1},
    {name: "M-049 シャイニーリング",
        elm: "神秘", Atk: 2, SAtk: 0, Def: 2, SDef: 2, Speed: 0},
    {name: "M-050 エターナル",
        elm: "神秘", Atk: 3, SAtk: 0, Def: 1, SDef: 0, Speed: 2}
]
monsterSelectList=SetupForm.querySelector("#monsters")
// monstersData からモンスター名を抜き出して入力候補に追加する
monstersData
    .map(m => m.name)
    .forEach(name=>{
        const option = document.createElement("option")
        option.setAttribute("value", name)
        monsterSelectList.appendChild(option)
    })
const PlayerAMonstersInput = [SetupForm.PlayerA1, SetupForm.PlayerA2, SetupForm.PlayerA3]
const PlayerBMonstersInput = [SetupForm.PlayerB1, SetupForm.PlayerB2, SetupForm.PlayerB3]
// フォームの入力を監視して、全ての入力欄に正しいモンスター名が入力されていたらスタートボタンを enable する
SetupForm.addEventListener("input", (e )=>  {
    playerAMonsters = PlayerAMonstersInput
        .map(input => input.value)
        .map(name => monstersData.find(monster => monster.name === name))
        .filter(monster => monster !== undefined)
    playerBMonsters = PlayerBMonstersInput
        .map(input => input.value)
        .map(name => monstersData.find(monster => monster.name === name))
        .filter(monster => monster !== undefined)
    StartButton.disabled = playerAMonsters.length + playerBMonsters.length !== 6
})

const setup = document.querySelector(".setup")
const app = document.querySelector(".app")

StartButton.addEventListener("click",(e)=>{
    setup.hidden = true
    app.hidden = false

    console.log("プレイヤー1の手持ち:",playerAMonsters.map(m=>m.name))
    console.log("プレイヤー2の手持ち:", playerBMonsters.map(m=>m.name))
})

32 16 2
84 42
32 16
