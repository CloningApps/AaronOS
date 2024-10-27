document.querySelector('.start-button').addEventListener('click', function() {
    document.getElementById('myWindow').style.display = 'block';
});

// Funkcja do zamykania okna
function closeWindow() {
    document.getElementById('myWindow').style.display = 'none';
}

// Dodawanie akcji po kliknięciu przycisku
document.getElementById("btnClickMe").addEventListener("click", function() {
    document.getElementById("message").innerText = "Dziękuję za kliknięcie!";
});

// Wyświetlanie zegara
setInterval(() => {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
}, 1000);
