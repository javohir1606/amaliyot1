import { data } from "./data.js";

const List = document.querySelector(".list");

const render = () => {
  for (let i of data) {
    let div = document.createElement("div");
    div.classList = "about_list";

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
    div.append(img, wrapper )
    List.append(div)
  }
}

render(data)