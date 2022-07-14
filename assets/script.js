async function getCharacters(page = 1){
    const character = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    const data = await character.json();

    data.results.forEach(item => {  
        document.getElementById("completeList").insertAdjacentHTML("beforeEnd",`
            <div class="card">
                <img src="${item.image}" alt="">
                <div class="details">
                    <p class="name">${item.name}</p>
                    <p class="information">Status: ${item.status}</p>
                    <p class="information">Species: ${item.species}</p>
                    <p class="information">Gender: ${item.gender}</p>
                    <p class="information">Origin: ${item.origin.name}</p>
                    <p class="information">Location: ${item.location.name}</p>
                </div>
            </div>
        `);
    });
}
getCharacters(1);

for (let i = 1; i <= 42; i++){
    const footer = document.getElementById("buttons");
    const pageButton = document.createElement("span");
    const pageNumber = document.createTextNode(`${i}`);
    pageButton.appendChild(pageNumber);
    footer.appendChild(pageButton);
}

const span = document.querySelectorAll("span");
for (let n of span){
    n.addEventListener("click", function(){

        const cards = document.querySelectorAll(".card");
        for(let i of cards){
            i.style.display = "none";
        }
        getCharacters(n.innerText);
    });
}

function pesquisar(){
    const cards1 = document.querySelectorAll(".card");
    for(let i of cards1){
        i.style.display = "none";
    }
    for (let i = 1; i <= 42; i++){
        getCharacters(i);
    }
    const input = document.querySelector("#imputPesquisar");
    const cards = document.querySelectorAll(".card");

    for (let n of cards){

        const name = n.innerText.toLowerCase();
        const searchedName = input.value.toLowerCase()

        if (name.includes(searchedName)){
            n.style.display = "unset";
        } else {
            n.style.display = "none";
        }
    }
    input.value = "";
}