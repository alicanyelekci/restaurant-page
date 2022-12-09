export default function generateHome() {
    const home = document.createElement("div");
    home.className = "home";
    const intro = document.createElement("div");
    intro.className = "intro";
    intro.innerText = "Welcome to"
    const title = document.createElement("div");
    title.className = "title";
    title.innerText = "Guillermo's Pizza"
    const best = document.createElement("div");
    best.className = "best";
    best.innerText = "The best Italian Pizza in town since 1995.";

    const args = [intro, title, best];
    args.forEach(key => {
       home.appendChild(key);
    });
    document.querySelector(".content").appendChild(home);
};