// Obter a modal
const dialog = document.getElementById("dialog-box");

// Obter o botão que abre a modal
const btnOpen = document.getElementById("openModalBtn");

// Obter o botão que fecha a modal
const btnClose = document.getElementById("closeModalBtn");

// Quando o usuário clica no botão, abre a modal 
btnOpen.addEventListener("click", function() {
    dialog.showModal();
    console.log("Abrindo modal"); // Log de depuração
});

// Quando o usuário clica no botão de fechar, fecha a modal
btnClose.addEventListener("click", function() {
    dialog.close();
    console.log("Fechando modal"); // Log de depuração
});

// Quando o usuário clica fora da modal, fecha a modal
dialog.addEventListener("click", function(event) {
    if (event.target === dialog) {
        dialog.close();
        console.log("Fechando modal ao clicar fora"); // Log de depuração
    }
});
