const htmlElement = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortBreakButton = document.querySelector('.app__card-button--curto');
const longBreakButton = document.querySelector('.app__card-button--longo');
const timerDisplay = document.querySelector('#timer');

const playPauseButton = document.querySelector('#start-pause');
const playPauseTextButton = document.querySelector('#start-pause span');
const playPauseIconButton = document.querySelector('.app__card-primary-butto-icon');
const musicPlayer = document.querySelector('#alternar-musica');

const mainImage = document.querySelector('.app__image');
const mainTitle = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');

const music = new Audio('./sons/luna-rise-part-one.mp3');
const startMusic = new Audio('./sons/play.wav')
const pauseMusic = new Audio('./sons/pause.mp3')
const endMusic = new Audio('./sons/beep.mp3')

music.loop = true;
let focusTime = 1500; // 25 minutos em segundos
let intervaloId = null;

focusButton.addEventListener('click', () => {
    toggleContext('foco');
});

shortBreakButton.addEventListener('click', () => {
    toggleContext('descanso-curto');
});

longBreakButton.addEventListener('click', () => {
    toggleContext('descanso-longo');
});

playPauseButton.addEventListener('click', () => {
    iniciarPausar();
});

musicPlayer.addEventListener('change', () => {
    if (music.paused) {
        music.play()
    } else {
        music.pause()
    }
});

const toggleContext = (context) => {
    htmlElement.setAttribute('data-contexto', context);
    mainImage.src = `./imagens/${context}.png`;
    resetActiveButtons();
    zerar();
    switch (context) {
        case 'foco':
            focusTime = 1500;
            mainTitle.innerHTML = 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';
            focusButton.classList.add('active');
            break;
        case 'descanso-curto':
            focusTime = 300;
            mainTitle.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
            shortBreakButton.classList.add('active');
            break;
        case 'descanso-longo':
            focusTime = 900;
            mainTitle.innerHTML = 'Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa!</strong>';
            longBreakButton.classList.add('active');
            break;
    }
    showDisplay();
};

const resetActiveButtons = () => {
    buttons.forEach(button => button.classList.remove('active'));
}

const contagemRegressiva = () => {
    if (focusTime <= 0) {
        endMusic.play()
        timerDisplay.innerHTML = 'FIM!';
        zerar();
        return;
    }
    focusTime--;
    showDisplay();
}

const iniciarPausar = () => {
    if (intervaloId) {
        pauseMusic.play()
        zerar();
        return;
    }
    playPauseIconButton.src = './imagens/pause.png';
    playPauseTextButton.textContent = 'Pausar';
    intervaloId = setInterval(contagemRegressiva, 1000);
    startMusic.play()
}

const zerar = () => {
    clearInterval(intervaloId);
    intervaloId = null;
    playPauseIconButton.src = './imagens/play_arrow.png';
    playPauseTextButton.textContent = 'Começar';
}

const showDisplay = () => {
    let tempo = new Date(focusTime * 1000); // Converter segundos para milissegundos
    let tempoFormatado = tempo.toLocaleTimeString('pt-BR', {
        minute: '2-digit',
        second: '2-digit'
    }) // Formatar o tempo como mm:ss
    timerDisplay.innerHTML = `${tempoFormatado}`;
}

showDisplay();