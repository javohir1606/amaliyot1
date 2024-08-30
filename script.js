import { data } from "./data.js";

const List = document.querySelector(".list");

const render = () => {
  for (let i of data) {
    let li = document.createElement("li");
    li.classList = "about_item";

    const wrapper = document.createElement("div")
    const wrap = document.createElement("div")

    const img = document.createElement("img");
    img.src = i.img;
    img.className = "img"


    const title = document.createElement("h2");
    title.textContent = i.title;

    const text = document.createElement("text");
    text.textContent = i.text;

    const icon = document.createElement("img");
    icon.src = i.icon;
    img.className = "icon"

    const p = document.createElement("p");
    p.textContent = i.p;

    wrap.append(icon, p)
    wrapper.append(title, text,wrap)
    li.append(img, wrapper )
    List.append(li)
  }
}

render();


// import {person} from "./data.js";

// const menu = document.querySelector(".menu");

// const row = () => {
//   for (let i of person) {
//     let div = document.createElement("div");
//     div.classList = "block";

//     const title = document.createElement("h2");
//     title.textContent = i.title;
    
//     const text = document.createElement("h2");
//     text.textContent = i.text;
    
//     const tx = document.createElement("h3");
//     tx.textContent = i.tx;
    
//     div.append(title, text, tx)
//     menu.append(div)
//   }
// }

// row(person)

