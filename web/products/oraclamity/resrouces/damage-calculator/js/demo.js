const monsters = document.querySelectorAll(".monster-class > img")
let selectedIndex = 0;
[...monsters].forEach((m,index)=>{
    m.addEventListener("click",e=>{
        console.log(m,index)
        monsters[selectedIndex].classList.remove("selected")
        selectedIndex = index
        m.classList.add("selected")
    })
})

const upButtons = document.querySelectorAll(".p1.status > .status-button > img");
[...upButtons].forEach((upButton,index) =>{
    upButton.addEventListener("click", e=>{
        const d = document.createElement("div")
        d.innerText = "+1"
        d.classList.add("up-button-click-effect")
        console.log("+1")
        upButton.appendChild(d)
        setTimeout(()=>upButton.removeChild(d),1000 )
    })
})


const aisho= {
    "混沌": {
        "混沌": {},
        "超常": {},
        "幻想": {},
        "悪意": {},
        "神秘": {}
    },
    "超常": {
        "混沌": {},
        "超常": {},
        "幻想": {},
        "悪意": {},
        "神秘": {}
    },
    "幻想": {
        "混沌": {},
        "超常": {},
        "幻想": {},
        "悪意": {},
        "神秘": {}
    },
    "悪意": {
        "混沌": {},
        "超常": {},
        "幻想": {},
        "悪意": {},
        "神秘": {}
    },
    "神秘": {
        "混沌": {},
        "超常": {},
        "幻想": {},
        "悪意": {},
        "神秘": {}
    }
}