(function(){
    const titleInformation = [...document.querySelectorAll('.information__title')];

    titleInformation.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0
            let answer = question.nextElementSibling;

            question.children[0].classList.toggle('information__arrow--rotate')

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        })
    });

})();

var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrar = document.getElementById('btn-cerrar-popup')

btnAbrirPopup.addEventListener('click', function(){
    overlay.classList.add('active'),
    popup.classList.add('active')
})

cerrar.addEventListener('click', function(){
    overlay.classList.remove('active');
})