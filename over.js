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
<strong>Over ons</strong> <br>
Welkom bij OnlyBowling! Wij zijn dé bestemming voor iedereen die op zoek is naar plezier, ontspanning en <br>
sportieve uitdaging. Sinds onze oprichting in [jaar van oprichting], hebben wij ons toegewijd aan het bieden van <br>
een onvergetelijke bowlingervaring voor jong en oud. <br><br>

<strong>Onze Missie</strong> <br>
Bij OnlyBowling streven we ernaar om een gezellige en veilige omgeving te creëren waar vrienden en familie <br>
samen kunnen komen om te genieten van een potje bowlen. Ons doel is om iedereen, van beginners tot ervaren <br>
bowlers, een plek te bieden waar ze zich welkom en gewaardeerd voelen.<br> <br>

<strong> Onze Faciliteiten</strong> <br>
Wij beschikken over moderne bowlingbanen, voorzien van de nieuwste technologieën om uw spelervaring <br>
optimaal te maken. Naast bowlen kunt u bij ons ook genieten van onze uitgebreide horecagelegenheden, <br>
waar we een breed scala aan dranken aanbieden. <br>
Of u nu komt voor een verfrissend drankje na het bowlen, onze horeca biedt voor elk wat wils. <br> <br>

<img src='images/OB_one.jpg' style='width:800px;'> <br>

<strong>Ons Team</strong> <br>
Ons enthousiaste en professionele team zet zich dagelijks in om ervoor te zorgen dat u een geweldige tijd <br>
bij ons hebt. Van het onderhoud van de banen tot de gastvrijheid in ons restaurant, wij doen er alles aan om uw <br>
bezoek aan OnlyBowling onvergetelijk te maken. <br> <br>

<strong>Kom Langs!</strong> <br>
Wij nodigen u uit om langs te komen en zelf te ervaren waarom OnlyBowling de favoriete bowlingbaan is <br>
voor velen. bij OnlyBowling bent u altijd aan het juiste adres. <br> <br>
Bedankt voor uw interesse in OnlyBowling. Wij hopen u binnenkort te mogen verwelkomen! <br> <br>
`
document.body.appendChild(p);
    p.style.color = 'black';
    p.style.position = 'absolute';
    p.style.top = '300px'; 
    p.style.left = '300px';
    p.style.fontSize = '30px';
    p.style.lineHeight = '1.5'