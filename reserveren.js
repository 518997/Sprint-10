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
    <strong>Reserveren van Tickets</strong> <br> <br>
    Welkom bij OnlyBowling! Volg de stappen hieronder om je bowlingtickets te reserveren:
    `
document.body.appendChild(p);
p.style.color = 'black';
p.style.position = 'absolute';
p.style.top = '250px';
p.style.left = '300px';
p.style.fontSize = '30px';

var div = document.createElement('div')
div.innerHTML = 
    `
            <label for="reserveren_datum" id='datum'>Kies een datum:</label> 
            <input type="date" id="reserveren_datum">
            <label for="reserveren-tijd" id='tijd'>Kies een tijd: </label>
            <input type="time" id="time">
            <input type="Voornaam" id='naam' placeholder="Voer je naam in">
            <input type="achternaam" id='achternaam' placeholder="achternaam">
            <input type="email" id='email' placeholder="Email">
            <input type="aantal spelers" id='aantal' placeholder="Aantal spelers">
            <button onclick="Bevestiging()" id="submit">Reserveren</button>
    
    `
document.body.appendChild(div);

reserveren_datum.style.color = 'black';
reserveren_datum.style.position = 'absolute';
reserveren_datum.style.top = '450px';
reserveren_datum.style.left = '510px';
reserveren_datum.style.width = '250px';
reserveren_datum.style.height = '40px';
reserveren_datum.style.fontSize = '30px';

datum.style.top = '450px';
datum.style.position = 'absolute';
datum.style.left = '300px';
datum.style.fontSize = '30px';


tijd.style.top = '450px';
tijd.style.position = 'absolute';
tijd.style.left = '870px';
tijd.style.fontSize = '30px';

time.style.color = 'black';
time.style.position = 'absolute';
time.style.top = '450px';
time.style.left = '1050px';
time.style.width = '250px';
time.style.height = '40px';
time.style.fontSize = '30px';

naam.style.color = 'black';
naam.style.position = 'absolute';
naam.style.top = '550px';
naam.style.left = '300px';
naam.style.width = '455px';
naam.style.height = '40px';
naam.style.fontSize = '30px';

achternaam.style.color = 'black';
achternaam.style.position = 'absolute';
achternaam.style.top = '550px';
achternaam.style.left = '870px';
achternaam.style.width = '430px';
achternaam.style.height = '40px';
achternaam.style.fontSize = '30px';

email.style.color = 'black';
email.style.position = 'absolute';
email.style.top = '650px';
email.style.left = '300px';
email.style.width = '455px';
email.style.height = '40px';
email.style.fontSize = '30px';

aantal.style.color = 'black';
aantal.style.position = 'absolute';
aantal.style.top = '650px';
aantal.style.left = '870px';
aantal.style.width = '430px';
aantal.style.height = '40px';
aantal.style.fontSize = '30px';

submit.style.color = '#F9DBBB';
submit.style.position = 'absolute';
submit.style.top = '600px';
submit.style.left = '650px';
submit.style.width = '200px';
submit.style.height = '50px';
submit.style.fontSize = '30px';

function Bevestiging() {
    window.location.href = 'bevestiging.html';
}







