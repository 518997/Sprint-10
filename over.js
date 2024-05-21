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

var p = document.createElement('p');
p.innerHTML = 
`
<strong>Over ons</strong>
Welkom bij OnlyBowling! Wij zijn dé bestemming voor iedereen die op zoek is naar plezier, ontspanning en sportieve uitdaging.<br>
Sinds onze oprichting in [jaar van oprichting], hebben wij ons toegewijd aan het bieden van een onvergetelijke bowlingervaring voor jong en oud. <br><br>
Onze Missie<br>
Bij OnlyBowling streven we ernaar om een gezellige en veilige omgeving te creëren waar vrienden en familie samen kunnen komen om te genieten van een potje bowlen.<br>
Ons doel is om iedereen, van beginners tot ervaren bowlers, een plek te bieden waar ze zich welkom en gewaardeerd voelen.<br> <br>
Onze Faciliteiten <br>
Wij beschikken over moderne bowlingbanen, voorzien van de nieuwste technologieën om uw spelervaring optimaal te maken. Naast bowlen kunt u bij ons ook genieten van onze uitgebreide horecagelegenheden,<br>
waar we een breed scala aan dranken aanbieden. Of u nu komt voor een verfrissend drankje na het bowlen, onze horeca biedt voor elk wat wils. <br> <br>
Ons Team <br>
Ons enthousiaste en professionele team zet zich dagelijks in om ervoor te zorgen dat u een geweldige tijd bij ons hebt. Van het onderhoud van de banen tot de gastvrijheid in ons restaurant,
wij doen er alles aan om uw bezoek aan OnlyBowling onvergetelijk te maken. <br> <br>
Kom Langs! <br>
Wij nodigen u uit om langs te komen en zelf te ervaren waarom OnlyBowling de favoriete bowlingbaan is voor velen. bij OnlyBowling bent u altijd aan het juiste adres. <br> <br>
Bedankt voor uw interesse in OnlyBowling. Wij hopen u binnenkort te mogen verwelkomen! <br> <br>
`
document.body.appendChild('p');
    p.style.color = 'black';
    p.style.position = 'absolute';
    p.style.top = '1450px'; 
    p.style.left = '400px';
    p.style.fontSize = '30px';