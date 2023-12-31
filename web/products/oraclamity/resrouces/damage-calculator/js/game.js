const ElementMap = {
    "混沌": 0,
    "幻想": 1,
    "超常": 2,
    "悪意": 3,
    "神秘": 4
}
const SetupForm = document.SetupForm
const StartButton = SetupForm.StartButton
const monstersData = [
    {img: "monster-01.png", elm: "混沌", Atk: 3, SAtk: 0, Def: 1, SDef: 0, Speed: 2, name: "M-001 ジャベリンテイル"},
    {img: "monster-02.png", elm: "混沌", Atk: 2, SAtk: 2, Def: 0, SDef: 0, Speed: 2, name: "M-002 ブレイズドラゴン"},
    {
        img: "monster-03.png",
        elm: "混沌",
        Atk: 2,
        SAtk: 0,
        Def: 2,
        SDef: 0,
        Speed: 2,
        name: "M-003 バーニングバシリスク"
    },
    {img: "monster-04.png", elm: "混沌", Atk: 1, SAtk: 0, Def: 0, SDef: 2, Speed: 3, name: "M-004 フレイムワイバーン"},
    {img: "monster-05.png", elm: "混沌", Atk: 2, SAtk: 0, Def: 0, SDef: 0, Speed: 3, name: "M-005 サンダーラプター"},
    {img: "monster-06.png", elm: "混沌", Atk: 3, SAtk: 0, Def: 1, SDef: 0, Speed: 2, name: "M-006 スピットファング"},
    {img: "monster-07.png", elm: "混沌", Atk: 1, SAtk: 2, Def: 0, SDef: 1, Speed: 2, name: "M-007 フューリアス"},
    {img: "monster-08.png", elm: "混沌", Atk: 1, SAtk: 0, Def: 2, SDef: 0, Speed: 3, name: "M-008 フレイムスケイル"},
    {img: "monster-09.png", elm: "混沌", Atk: 2, SAtk: 0, Def: 0, SDef: 2, Speed: 2, name: "M-009 ソニッククロコ"},
    {img: "monster-10.png", elm: "混沌", Atk: 1, SAtk: 0, Def: 1, SDef: 0, Speed: 3, name: "M-010 ラヴァワーム"},

    {img: "monster-11.png", elm: "幻想", Atk: 2, SAtk: 2, Def: 0, SDef: 2, Speed: 0, name: "M-011 オーシャンタイタン"},
    {img: "monster-12.png", elm: "幻想", Atk: 0, SAtk: 3, Def: 1, SDef: 2, Speed: 0, name: "M-012 アバロンシール"},
    {
        img: "monster-13.png",
        elm: "幻想",
        Atk: 0,
        SAtk: 1,
        Def: 2,
        SDef: 3,
        Speed: 0,
        name: "M-013 プロメテウスシャーク"
    },
    {img: "monster-14.png", elm: "幻想", Atk: 0, SAtk: 1, Def: 0, SDef: 3, Speed: 1, name: "M-014 ドレッドノート"},
    {img: "monster-15.png", elm: "幻想", Atk: 0, SAtk: 2, Def: 0, SDef: 2, Speed: 2, name: "M-015 グラブクラブ"},
    {img: "monster-16.png", elm: "幻想", Atk: 2, SAtk: 1, Def: 1, SDef: 2, Speed: 0, name: "M-016 シーサーペント"},
    {img: "monster-17.png", elm: "幻想", Atk: 0, SAtk: 3, Def: 0, SDef: 3, Speed: 0, name: "M-017 タイタンオクトパス"},
    {img: "monster-18.png", elm: "幻想", Atk: 0, SAtk: 1, Def: 2, SDef: 2, Speed: 1, name: "M-018 ミラージュランプ"},
    {img: "monster-19.png", elm: "幻想", Atk: 0, SAtk: 2, Def: 0, SDef: 3, Speed: 0, name: "M-019 レヴィアタン"},
    {img: "monster-20.png", elm: "幻想", Atk: 0, SAtk: 1, Def: 1, SDef: 2, Speed: 2, name: "M-020 セイレーン"},

    {img: "monster-21.png", elm: "超常", Atk: 2, SAtk: 0, Def: 2, SDef: 1, Speed: 1, name: "M-021 ブラッドファング"},
    {img: "monster-22.png", elm: "超常", Atk: 0, SAtk: 2, Def: 2, SDef: 2, Speed: 0, name: "M-022 ナイトスコーピオン"},
    {img: "monster-23.png", elm: "超常", Atk: 0, SAtk: 1, Def: 3, SDef: 1, Speed: 0, name: "M-023 イビルホーネット"},
    {img: "monster-24.png", elm: "超常", Atk: 1, SAtk: 0, Def: 2, SDef: 3, Speed: 0, name: "M-024 ウルフォン"},
    {img: "monster-25.png", elm: "超常", Atk: 0, SAtk: 0, Def: 2, SDef: 2, Speed: 2, name: "M-025 バグズキング"},
    {img: "monster-26.png", elm: "超常", Atk: 2, SAtk: 0, Def: 2, SDef: 2, Speed: 0, name: "M-026 シャドーパンサー"},
    {img: "monster-27.png", elm: "超常", Atk: 0, SAtk: 2, Def: 2, SDef: 1, Speed: 1, name: "M-027 ファンガス"},
    {img: "monster-28.png", elm: "超常", Atk: 1, SAtk: 0, Def: 3, SDef: 1, Speed: 0, name: "M-028 ワイルドシープ"},
    {img: "monster-29.png", elm: "超常", Atk: 0, SAtk: 1, Def: 2, SDef: 3, Speed: 0, name: "M-029 クリムゾントード"},
    {img: "monster-30.png", elm: "超常", Atk: 0, SAtk: 0, Def: 3, SDef: 1, Speed: 2, name: "M-030 スペースハムスター"},

    {img: "monster-31.png", elm: "悪意", Atk: 2, SAtk: 2, Def: 0, SDef: 0, Speed: 2, name: "M-031 アンティークタンク"},
    {img: "monster-32.png", elm: "悪意", Atk: 0, SAtk: 3, Def: 1, SDef: 0, Speed: 1, name: "M-032 オールドバルブ"},
    {img: "monster-33.png", elm: "悪意", Atk: 0, SAtk: 2, Def: 2, SDef: 1, Speed: 1, name: "M-033 ミステリオン"},
    {img: "monster-34.png", elm: "悪意", Atk: 0, SAtk: 2, Def: 1, SDef: 2, Speed: 1, name: "M-034 グレートギア"},
    {img: "monster-35.png", elm: "悪意", Atk: 0, SAtk: 3, Def: 0, SDef: 0, Speed: 3, name: "M-035 アッシュバイパー"},
    {img: "monster-36.png", elm: "悪意", Atk: 2, SAtk: 2, Def: 0, SDef: 0, Speed: 2, name: "M-036 ディープダーク"},
    {img: "monster-37.png", elm: "悪意", Atk: 0, SAtk: 3, Def: 0, SDef: 1, Speed: 1, name: "M-037 アンドロミラー"},
    {img: "monster-38.png", elm: "悪意", Atk: 0, SAtk: 3, Def: 2, SDef: 0, Speed: 1, name: "M-038 スペースクリスタル"},
    {
        img: "monster-39.png",
        elm: "悪意",
        Atk: 0,
        SAtk: 2,
        Def: 0,
        SDef: 2,
        Speed: 2,
        name: "M-039 ホイールオブフォーチュン"
    },
    {img: "monster-40.png", elm: "悪意", Atk: 0, SAtk: 3, Def: 0, SDef: 0, Speed: 3, name: "M-040 ラスティタワー"},

    {img: "monster-41.png", elm: "神秘", Atk: 3, SAtk: 0, Def: 2, SDef: 0, Speed: 0, name: "M-041 ディバインロード"},
    {img: "monster-42.png", elm: "神秘", Atk: 2, SAtk: 2, Def: 1, SDef: 1, Speed: 0, name: "M-042 グロリアスブレス"},
    {img: "monster-43.png", elm: "神秘", Atk: 3, SAtk: 0, Def: 3, SDef: 0, Speed: 0, name: "M-043 セラフィム"},
    {img: "monster-44.png", elm: "神秘", Atk: 2, SAtk: 0, Def: 1, SDef: 2, Speed: 1, name: "M-044 ハーモニーウイング"},
    {
        img: "monster-45.png",
        elm: "神秘",
        Atk: 3,
        SAtk: 0,
        Def: 1,
        SDef: 0,
        Speed: 2,
        name: "M-045 ミスティックエンジェル"
    },
    {img: "monster-46.png", elm: "神秘", Atk: 3, SAtk: 0, Def: 1, SDef: 1, Speed: 0, name: "M-046 ミスリルファイター"},
    {
        img: "monster-47.png",
        elm: "神秘",
        Atk: 2,
        SAtk: 2,
        Def: 2,
        SDef: 0,
        Speed: 0,
        name: "M-047 セレスティアルグローリー"
    },
    {img: "monster-48.png", elm: "神秘", Atk: 2, SAtk: 0, Def: 3, SDef: 0, Speed: 1, name: "M-048 アークエンジェル"},
    {img: "monster-49.png", elm: "神秘", Atk: 2, SAtk: 0, Def: 2, SDef: 2, Speed: 0, name: "M-049 シャイニーリング"},
    {img: "monster-50.png", elm: "神秘", Atk: 3, SAtk: 0, Def: 1, SDef: 0, Speed: 0, name: "M-050 エターナル"},
]
const cardImagePath = "../../img/card/small/"
monsterSelectList = SetupForm.querySelector("#monsters")
let readyFormCount = 0;
[...SetupForm.querySelectorAll(".monsters-select")].forEach(form => {
    const img = form.querySelector("img")
    const input = form.querySelector("input")
    input.addEventListener("input", e => {
        const monster = monstersData.find(monster => monster.name === input.value)
        if (monster === undefined) {
            img.src = cardImagePath + "backside_monster.png"
        } else {
            img.src = cardImagePath + monster.img
        }
        console.log(monster)
    })
    input.addEventListener("focus", _ => {
        input.value = ""
        input.dispatchEvent(new Event("input"))
        SetupForm.dispatchEvent(new Event("input"))
    })
    img.addEventListener("click", _ => {
        input.focus()
    })
})

// monstersData からモンスター名を抜き出して入力候補に追加する
monstersData
    .map(m => m.name)
    .forEach(name => {
        const option = document.createElement("option")
        option.setAttribute("value", name)
        monsterSelectList.appendChild(option)
    })

const PlayerAMonstersInput = [SetupForm.PlayerA1, SetupForm.PlayerA2, SetupForm.PlayerA3]
const PlayerBMonstersInput = [SetupForm.PlayerB1, SetupForm.PlayerB2, SetupForm.PlayerB3]
// フォームの入力を監視して、全ての入力欄に正しいモンスター名が入力されていたらスタートボタンを enable する
SetupForm.addEventListener("input", e => {
    const playerAMonsters = PlayerAMonstersInput
        .map(input => input.value)
        .map(name => monstersData.find(monster => monster.name === name))
        .filter(monster => monster !== undefined)
    const playerBMonsters = PlayerBMonstersInput
        .map(input => input.value)
        .map(name => monstersData.find(monster => monster.name === name))
        .filter(monster => monster !== undefined)
    if (playerAMonsters.length + playerBMonsters.length !== 6) {
        StartButton.disabled = true
        return
    }
    StartButton.addEventListener("click", e => {
        console.log("プレイヤー1の手持ち:", playerAMonsters.map(m => m.name))
        console.log("プレイヤー2の手持ち:", playerBMonsters.map(m => m.name))
        StartGame(playerAMonsters, playerBMonsters)
    })
    StartButton.disabled = false
})

function StartGame(playerAMonsters, playerBMonsters) {
    playersContext = [
        new PlayerContext(".p1", playerAMonsters),
        new PlayerContext(".p2", playerBMonsters)
    ]

    const setup = document.querySelector(".setup")
    setup.style.display = "none"
    const app = document.querySelector(".app")
    app.style.display = "grid"

    app.addEventListener("click", e => {
        const p1 = playersContext[0].monsters[playersContext[0].currentIndex].data
        const p2 = playersContext[1].monsters[playersContext[1].currentIndex].data
        playersContext[0].Calculate(p2)
        playersContext[1].Calculate(p1)
    })
    app.dispatchEvent(new Event("click"))
}

function Compatible(offence, defence) {
    switch (offence) {
        case 0:
            switch (defence) {
                case 0:
                    return 0
                case 1:
                    return -1.5
                case 2:
                    return -1.5
                case 3:
                    return 1.5
                case 4:
                    return 1.5
            }
            break
        case 1:
            switch (defence) {
                case 0:
                    return 1.5
                case 1:
                    return 0
                case 2:
                    return 1.5
                case 3:
                    return 0
                case 4:
                    return -1.5
            }
            break
        case 2:
            switch (defence) {
                case 0:
                    return -1.5
                case 1:
                    return 1.5
                case 2:
                    return 0
                case 3:
                    return -1.5
                case 4:
                    return 1.5
            }
            break
        case 3:
            switch (defence) {
                case 0:
                    return 1.5
                case 1:
                    return 1.5
                case 2:
                    return -1.5
                case 3:
                    return 0
                case 4:
                    return -1.5
            }
            break
        case 4:
            switch (defence) {
                case 0:
                    return 0
                case 1:
                    return -1.5
                case 2:
                    return 1.5
                case 3:
                    return 1.5
                case 4:
                    return 0
            }
            break
    }
}

class PlayerContext {
    constructor(playerID, monsters) {
        this.currentIndex = 1;
        this.monsters = [...document.querySelectorAll(playerID + ".monster > img")]
            .map((img, index) => ({data: monsters[index], img: img}))
        this.monsters.forEach((monster, index) => {
            monster.img.setAttribute("src", cardImagePath + monster.data.img)
            monster.img.addEventListener("click", e => {
                this.monsters[this.currentIndex].img.classList.remove("selected")
                this.currentIndex = index
                monster.img.classList.add("selected")
            })
        })
        this.status = new Status(playerID)
        this.summary = new Summary(playerID)
    }

    Calculate(enemy) {
        const me = this.monsters[this.currentIndex].data
        this.summary.atk.forEach((node, elm) => {
            const statusDiff = me.Atk + this.status.Atk.value / 2 - enemy.Def
            const bonus = (elm === ElementMap[me.elm]) ? 0.5 : 0
            const weak = Compatible(elm, ElementMap[enemy.elm])
            const damage = statusDiff + bonus + weak
            const sign = damage > 0 ? "+" : damage < 0 ? "" : "±"
            node.innerText = sign + damage
        })
        this.summary.satk.forEach((node, elm) => {
            const statusDiff = me.SAtk + this.status.SAtk.value / 2 - enemy.SDef
            const bonus = (elm === ElementMap[me.elm]) ? 0.5 : 0
            const weak = Compatible(elm, ElementMap[enemy.elm])
            const damage = statusDiff + bonus + weak
            const sign = damage > 0 ? "+" : damage < 0 ? "" : "±"
            node.innerText = sign + damage
        })

    }
}

class Status {
    constructor(playerID) {
        this.Atk = new StatusCube(playerID, ".atk")
        this.SAtk = new StatusCube(playerID, ".satk")
        this.Speed = new StatusCube(playerID, ".speed")
    }
}

class StatusCube {
    constructor(playerID, kind) {
        this.value = 0
        this.node = document.querySelector(playerID + kind + ".cube .cube-value")
        this.upButton = document.querySelector(playerID + kind + ".up.button")
        this.downButton = document.querySelector(playerID + kind + ".down.button")

        this.node.addEventListener("oraclamityUpdate", e => {
            const sign = this.value > 0 ? "+" : this.value < 0 ? "" : "±"
            this.node.innerText = sign + (this.value / 2)
        })
        this.upButton.addEventListener("click", e => {
            if (this.upButton.classList.contains("disable")) {
                return
            }
            this.upButton.classList.add("clicking")
            setTimeout(() => {
                this.upButton.classList.remove("clicking")
            }, 50)
            this.Up()
        })
        this.downButton.addEventListener("click", e => {
            if (this.downButton.classList.contains("disable")) {
                return
            }
            this.downButton.classList.add("clicking")
            setTimeout(() => {
                this.downButton.classList.remove("clicking")
            }, 50)
            this.Down()
        })
        this.update()
    }

    update() {
        if (4 <= this.value) {
            this.value = 4
            this.upButton.classList.add("disable")
        } else {
            this.upButton.classList.remove("disable")
        }
        if (this.value <= -4) {
            this.value = -4
            this.downButton.classList.add("disable")
        } else {
            this.downButton.classList.remove("disable")
        }
        this.node.dispatchEvent(new Event("oraclamityUpdate"))
    }

    Up() {
        this.value += 1
        this.update()
    }

    Down() {
        this.value -= 1
        this.update()
    }
}

class Summary {
    constructor(playerID) {
        this.atk = [...document.querySelectorAll(playerID + ".atk-summary")]
        this.satk = [...document.querySelectorAll(playerID + ".satk-summary")]
    }
}


