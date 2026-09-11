document.addEventListener("DOMContentLoaded", () => {
    const gato = document.getElementById("gatoImg");
    const sonidos = [
        new Audio("audio/gato1.mp3"),
        new Audio("audio/gato2.mp3"),
        new Audio("audio/gato3.mp3"),
    ];

    gato.addEventListener("mouseenter", () => {
        const aleatorio = Math.floor(Math.random() * sonidos.length);
        const elegido = sonidos[aleatorio];
        
        elegido.currentTime = 0;
        elegido.play().catch(() => {});

        
    });
});