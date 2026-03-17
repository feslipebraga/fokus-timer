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

focusButton.addEventListener('click', () => {
    htmlElement.setAttribute('data-contexto', 'foco');
    // timerDisplay;
    mainImage.src = '/imagens/foco.png';
    mainTitle.innerHTML = 'Otimize sua produtividade,<br><strong class="app__title-strong">mergulhe no que importa.</strong>';
    focusButton.classList.add('active');
    shortBreakButton.classList.remove('active');
    longBreakButton.classList.remove('active');

})

shortBreakButton.addEventListener('click', () => {
    htmlElement.setAttribute('data-contexto', 'descanso-curto');
    // timerDisplay;
    mainImage.src = '/imagens/descanso-curto.png';
    mainTitle.innerHTML = 'Que tal dar uma respirada?<br><strong class="app__title-strong">Faça uma pausa curta!</strong>';
    shortBreakButton.classList.add('active');
    focusButton.classList.remove('active');
    longBreakButton.classList.remove('active');
})

longBreakButton.addEventListener('click', () => {
    htmlElement.setAttribute('data-contexto', 'descanso-longo');
    // timerDisplay;
    mainImage.src = '/imagens/descanso-longo.png';
    mainTitle.innerHTML = 'Hora de voltar à superfície.<br><strong class="app__title-strong">Faça uma pausa longa!</strong>';
    longBreakButton.classList.add('active');
    focusButton.classList.remove('active');
    shortBreakButton.classList.remove('active');
})

playPauseButton.addEventListener('click', () => {
    alert('Função de iniciar/pausar o timerDisplay ainda não implementada!');
})