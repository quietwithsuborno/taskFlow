const cardInput = document.querySelector('#card-input');
const addBtn = document.querySelector('#add-btn');
const errorMsg = document.querySelector('#error-msg');
const todoList = document.querySelector('#todo-list');

function createCard(title){
    const card = document.createElement("div");
    card.classList.add("card")

    const text = document.createElement("span")
    text.textContent = title

    card.appendChild(text)
    todoList.appendChild(card)
}

addBtn.addEventListener("click", function(){
    const title = cardInput.value
    createCard(title)
    cardInput.value = ""
    cardInput.focus();
})