const htmlElement = document.querySelector('html');
const focusButton = document.querySelector('.app__card-button--foco');
const shortBreakButton = document.querySelector('.app__card-button--curto');
const longBreakButton = document.querySelector('.app__card-button--longo');
const playPauseButton = document.querySelector('.app__card-primary-button');
const timerDisplay = document.querySelector('#timer');
const focusDuration = 1500;
const shortBreakDuration = 300;
const longBreakDuration = 900;
const mainImage = document.querySelector('.app__image');
const mainTitle = document.querySelector('.app__title');
const buttons = document.querySelectorAll('.app__card-button');

const musicPlayer = document.querySelector('#alternar-musica');
const music = new Audio('/sons/luna-rise-part-one.mp3');
music.loop = true;

musicPlayer.addEventListener('change', () => {
    if (music.paused) {
        music.play()
    } else {
        music.pause()
    }
})

const resetActiveButtons = () => {
    buttons.forEach(button => button.classList.remove('active'));
}

const toggleContext = (context) => {
    switch (context) {
        case 'foco':
            htmlElement.setAttribute('data-contexto', context);
            mainImage.src = `/imagens/${context}.png`;
            mainTitle.innerHTML = 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';
            resetActiveButtons();
            focusButton.classList.add('active');
            break;
        case 'descanso-curto':
            htmlElement.setAttribute('data-contexto', context);
            mainImage.src = `/imagens/${context}.png`;
            mainTitle.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
            resetActiveButtons();
            shortBreakButton.classList.add('active');
            break;
        case 'descanso-longo':
            htmlElement.setAttribute('data-contexto', context);
            mainImage.src = `/imagens/${context}.png`;
            mainTitle.innerHTML = 'Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa!</strong>';
            resetActiveButtons();
            longBreakButton.classList.add('active')
            break;
    }
};

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
    alert('Função de iniciar/pausar o timerDisplay ainda não implementada!');
})