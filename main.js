let btnMenu = document.getElementById('menu');
let btnClose = document.getElementById('close');
let container = document.querySelector('.container');

btnClose.onclick = function () {
    container.classList.add('hide');
    this.classList.add('hide');
    btnMenu.classList.remove('hide');
}

 btnMenu.onclick = function(){
                    this.classList.add('hide');
                    btnClose.classList.remove('hide');
                    container.classList.remove('hide');
                }
