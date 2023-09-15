
document.addEventListener('DOMContentLoaded', () => {

    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario');
    const cloud = document.querySelector('.clouds');
    const cloud1 = document.querySelector('.clouds1');


    const audio2 = new Audio("./images/lose.mp3");
    const audio = new Audio("./images/musicamario.mp3");

    const gameOverModal = document.getElementById('gameOverModal');
    const restartButton = document.getElementById('restartGame');
    restartButton.addEventListener('click', function () {
        location.reload();  // Recarrega a página para reiniciar o jogo
    });


    const loop = setInterval(() => {
        const cloudPosition = cloud.offsetLeft;
        const cloudPosition1 = cloud1.offsetRight;
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", '');
        audio.play();
        console.log(marioPosition);

        console.log(pipePosition);

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            cloud.style.animation='none'
            cloud.style.left=`${cloudPosition}px`

            cloud1.style.animation='none'
            cloud1.style.right=`${cloudPosition1}px`


            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = "./images/game-over.png"
            mario.style.width = '75px'

            audio.pause();
            audio2.play().catch(error => {
                console.error("Erro ao iniciar o áudio de perder:", error);
            });

            clearInterval(loop);

            // Mostrar o modal quando o jogo terminar
            gameOverModal.style.display = 'block';

        }
    }, 5)


    const jump = () => {
        mario.classList.add('jump')

        setTimeout(() => {
            mario.classList.remove('jump')
        }, 500);
    }

    document.addEventListener('keydown', jump)

});



