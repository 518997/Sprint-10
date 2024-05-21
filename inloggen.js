function goToOnlyBowling() {
    window.location.href = 'index.html';
}

function goToHoreca() {
    window.location.href = 'horeca.html';
}

function goToReserveren() {
    window.location.href = 'reserveren.html';
}

function goToOver() {
    window.location.href = 'over.html';
}

function goToContact() {
    window.location.href = 'contact.html';
}

function goToInloggen() {
    window.location.href = 'inloggen.html';
}
 
function setupNavbar() {
    let btnMenu = document.getElementById('menu');
    let btnClose = document.getElementById('close');
    let container = document.querySelector('.container');

    btnClose.onclick = function () {
        container.classList.add('hide');
        this.classList.add('hide');
        btnMenu.classList.remove('hide');
    }

    btnMenu.onclick = function() {
        this.classList.add('hide');
        btnClose.classList.remove('hide');
        container.classList.remove('hide');
        imgElement.style.position = 'absolute';
    }
}
setupNavbar()