
let userList = document.querySelector("#userList");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Something went wrong!");
        }

        return response.json();
    })
    .then(data => {

        userList.innerHTML = "";

        data.forEach(user => {

            let div = document.createElement("div");

            div.className = "user-card";

            let name = document.createElement("h3");
            name.textContent = user.name;

            let email = document.createElement("p");
            email.textContent = `Email: ${user.email}`;

            let city = document.createElement("p");
            city.textContent = `City: ${user.address.city}`;

            let phone = document.createElement("p");
            phone.textContent = `Phone: ${user.phone}`;

            div.appendChild(name);
            div.appendChild(email);
            div.appendChild(city);
            div.appendChild(phone);

            userList.appendChild(div);
        });

    })
    .catch(error => {
        userList.textContent = "Unable to load users. Please try again.";
        console.error(error);
    });
