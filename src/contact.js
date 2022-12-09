import Location from "./location.jpg";

export default function generateContact() {
    const contact = document.createElement("div");
    contact.className = "contact";

    const name = document.createElement("div");
    name.className = "name";
    name.innerText = "Guillermo Rosso";
    const phone = document.createElement("div");
    phone.className = "phone";
    phone.innerText = "0532 451 50 90"
    const address = document.createElement("div");
    address.className = "phone";
    address.innerText = "1758 Dancing Dove Lane, New York, NY, 10011"
    const map = document.createElement("img");
    map.src = Location;

    const args = [name, phone, address, map];
    args.forEach(key => {
        contact.appendChild(key);
    });
    document.querySelector(".content").appendChild(contact);
};
