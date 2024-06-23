<template>
    <title>Abrigo de Idosos Helena Dornfeld - Agradecimento</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <body>
        <div id="app">
            <canvas id="confetti"></canvas>
            <div class="container">
                <div class="logo">
                    <img id="logo" src="../../assets/catavento.png" alt="Logo Abrigo de Idosos Helena Dornfeld">
                </div>
                <div class="thank-you">
                    <h1>Obrigado por sua Contribuição!</h1>
                    <p>Sua generosa doação garante que nossos idosos recebam os medicamentos de que precisam.
                        Estamos profundamente agradecidos por seu apoio inestimável.</p>
                    <div class="back-home">
                        <a href="home.html"><i class="fas fa-arrow-left"></i> Voltar para a página inicial</a>
                    </div>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Abrigo de Idosos Helena Dornfeld. Todos os direitos reservados.</p>
                </div>
            </div>
        </div>
    </body>
</template>

<style>
body {
    font-family: 'Arial', sans-serif;
    background-color: #121212;
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 0;
    overflow: hidden; /* Prevent scrolling */
}

#confetti {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.container {
    position: relative;
    padding: 20px;
    max-width: 600px;
    margin: auto;
    background-color: #1e1e1e;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-top: 50px;
    z-index: 1;
}

.thank-you {
    margin-top: 50px;
}

.thank-you h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #72b6ff;
}

.thank-you p {
    font-size: 1.2em;
    margin-bottom: 40px;
    color: #c6c5c5;
}

.back-home {
    margin-top: 30px;
}

.back-home a {
    color: #007bff;
    text-decoration: none;
    font-size: 1.2em;
}

.footer {
    margin-top: 50px;
    font-size: 0.9em;
    color: #8a8a8a;
}

.logo {
    margin-top: 20px;
}

.logo img {
    width: 100px;
    animation: spin 2s linear infinite;
    animation-fill-mode: forwards;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>

<script>
export default {
    name: "App",
    data() {
        return {
            mode: "",
        }
    },
    mounted() {
        this.animateLogo();
        this.dropConfetti();
    },
    methods: {
        animateLogo() {
            const logo = document.getElementById('logo');
            let degree = 0;
            let speed = 2; // initial speed

            const spin = () => {
                degree += speed;
                speed *= 0.98; // slow down the speed
                if (speed < 0.1) speed = 0; // stop the spinning
                logo.style.transform = `rotate(${degree}deg)`;
                if (speed > 0) requestAnimationFrame(spin);
            };

            spin();
        },
        dropConfetti() {
            const confettiCanvas = document.getElementById('confetti');
            const confettiCtx = confettiCanvas.getContext('2d');
            confettiCanvas.width = window.innerWidth;
            confettiCanvas.height = window.innerHeight;

            const confettiColors = ['#ff0', '#f00', '#0f0', '#00f', '#f0f', '#0ff'];
            const confettiCount = 300;
            const confettis = [];

            class Confetti {
                constructor(x, y, color) {
                    this.x = x;
                    this.y = y;
                    this.color = color;
                    this.size = Math.random() * 5 + 5;
                    this.speed = Math.random() * 3 + 2;
                    this.angle = Math.random() * 2 * Math.PI;
                }

                update() {
                    this.y += this.speed;
                    this.x += Math.sin(this.angle);
                    if (this.y > confettiCanvas.height) this.y = 0;
                    if (this.x > confettiCanvas.width) this.x = 0;
                    if (this.x < 0) this.x = confettiCanvas.width;
                }

                draw() {
                    confettiCtx.beginPath();
                    confettiCtx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
                    confettiCtx.fillStyle = this.color;
                    confettiCtx.fill();
                }
            }

            for (let i = 0; i < confettiCount; i++) {
                const x = Math.random() * confettiCanvas.width;
                const y = Math.random() * confettiCanvas.height - confettiCanvas.height;
                const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                confettis.push(new Confetti(x, y, color));
            }

            const animateConfetti = () => {
                confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
                confettis.forEach((confetti) => {
                    confetti.update();
                    confetti.draw();
                });
                requestAnimationFrame(animateConfetti);
            };

            animateConfetti();
        },
    },
};
</script>
