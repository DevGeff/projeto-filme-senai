const productContainers = [...document.querySelectorAll('.produto-container')]
const nxtBtn =  [...document.querySelectorAll('.nxt-btn')]
const preBtn =  [...document.querySelectorAll('.pre-btn')]

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;})
    
})
 
/*let tempoRestante = 2700;

    const timerEl = document.getElementById("timer");
      //funcao para formatar tempo e segundos
    function formatarTempo(segundos) {
        //      (1342 / 60 ) -> 22.33333333
        //  math floor ( 1342 / 60 ) -> 22
        const minutos = Math.floor(segundos / 60);
        // ( 1342 / 60 ) -> 22.33333333
        // 1342 / 60 % segRestantes
        const segRestantes = segundos % 60;
        // 12 minutos ->
        // 9 minutos =>
        const minFormatado = String(minutos).padStart(2, '0');



        const segFormatado = String(segRestantes).padStart(2, '0');

        return `${minFormatado}:${segFormatado}`;



    }
    //intervalo que atualiza o nosso tempo
    const intervaloTimer = setInterval(() => {
        tempoRestante--;

        timerEl.textContent = ` ${formatarTempo(tempoRestante)}`;

        if (tempoRestante <= 0) {
            clearInterval(intervaloTimer);
            timerEl.textContent = 'Tempo esgotado';
            finalizarQuiz();
        }


    }, 1000);*/
