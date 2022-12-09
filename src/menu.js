// https://cdn4.vectorstock.com/i/1000x1000/58/63/set-of-pizza-and-hand-vector-10175863.jpg
import Pepperoni from "./pepperoni.png";
import Mushroom from "./mushroom.png";
import Seafood from "./seafood.png";
import Hawaiian from "./hawaiian.png";
import Margherita from "./margherita.png";
import Neopolitan from "./neopolitan.png";

export default function generateMenu() {
    const menu = document.createElement("div");
    menu.className = "menu";

    const pepperoni = new MenuItem("Pepperoni", "pepperoni slices, mozarella cheese, permasan cheese, tomato sauce", Pepperoni, "$9.90");    
    const mushroom = new MenuItem("Mushroom", "mushroom, mozarella cheese, tomato sauce, paprika, basil", Mushroom, "$8.90");
    const seafood = new MenuItem("Seafood", "shrimp, anchovy fillets, provolone cheese, mozarella cheese, tomato sauce, basil", Seafood, "$10.90");
    const hawaiian = new MenuItem("Hawaiian", "pineapple, ham, mozarella cheese, tomato sauce", Hawaiian, "$7.90");
    const margherita = new MenuItem("Margherita", "mozarella cheese, tomato sauce, basil", Margherita, "$6.90");
    const neopolitan = new MenuItem("Neopolitan", "buffalo mozarella cheese, tomato sauce, olive, basil", Neopolitan, "$7.90");

    const menuItems = [pepperoni, mushroom, seafood, hawaiian, margherita, neopolitan];
    menuItems.forEach(key => {
        menu.appendChild(key.generateMenuItem());
    });

    document.querySelector(".content").appendChild(menu)
};

class MenuItem {
    constructor(name, description, imgSrc, price){
        this.name = name;
        this.description = description;
        this.imgSrc = imgSrc;
        this.price = price;
    }

    generateMenuItem() {
        const menuItem = document.createElement("div");
        menuItem.className = "menu-item";
        const name = document.createElement("div");
        name.className = "name";
        name.innerText = this.name;
        const description = document.createElement("div");
        description.className = "description";
        description.innerText = this.description;
        const img = document.createElement("img");
        img.src = this.imgSrc;
        const price = document.createElement("div");
        price.className = "price";
        price.innerText = this.price;

        const args = [name, description, img, price];
        args.forEach(key => {
            menuItem.appendChild(key);
        });

        return menuItem;
    }
}