import generateHome from "./home.js";
import generateMenu from "./menu.js";
import generateContact from "./contact.js";
import "./style.css";


class Template {
    constructor(page) {
        this.page = page;
    }

    startPage() {
        const container = document.createElement("div");
        container.className = "container";
        document.body.appendChild(container);
        container.appendChild(this.header());
        const content = document.createElement("div");
        content.className = "content";
        container.appendChild(content);
        container.appendChild(this.footer());
        generateHome();
    }

    generatePage() {
        const container = document.querySelector(".container");
        const content = document.createElement("div");
        content.className = "content";
        container.appendChild(content);
        
        if(this.page === "home"){
            generateHome();
        }
        else if(this.page === "menu"){
            generateMenu();
        }
        else if(this.page === "contact"){
            generateContact();
        }
    }

    header() {
        const element = document.createElement("div");
        element.className = "header";
        const homeTab = document.createElement("button");
        homeTab.className = "tab";
        homeTab.id = "home"
        homeTab.innerText = "Home";
        element.appendChild(homeTab);
        const menuTab = document.createElement("button");
        menuTab.className = "tab";
        menuTab.id = "menu"
        menuTab.innerText = "Menu";
        element.appendChild(menuTab);
        const contactTab = document.createElement("button");
        contactTab.className = "tab";
        contactTab.id = "contact"
        contactTab.innerText = "Contact";
        element.appendChild(contactTab);

        return element;
    }

    footer() {
        const element = document.createElement("div");
        element.className = "footer";
        element.innerText = "Guillermo's Pizza by Ali Can Yelekci";

        return element;
    }
}

const homeHeader = new Template("home");
homeHeader.startPage();

let buttons = document.querySelectorAll(".tab");
buttons.forEach(key => {
    key.addEventListener("click", () => {
        document.querySelector(".content").remove();
        new Template(key.innerText.toLowerCase()).generatePage();
    });
});
