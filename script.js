// =======================================
// The Wedding of Kikik & Nia
// =======================================

// Tahun pernikahan
const weddingDate = new Date("July 20, 2025 09:00:00").getTime();

const countdown = document.getElementById("countdown");

if (countdown) {
    setInterval(() => {

        const now = new Date().getTime();
        const distance = weddingDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance > 0) {
            countdown.innerHTML =
                days + " Hari " +
                hours + " Jam " +
                minutes + " Menit " +
                seconds + " Detik";
        } else {
            countdown.innerHTML = "Acara Sedang Berlangsung ❤️";
        }

    }, 1000);
}

// Efek scroll halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const tujuan = document.querySelector(this.getAttribute("href"));

        if (tujuan) {
            tujuan.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});
