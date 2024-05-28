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
<strong>HORECA</strong><br>
 Bij OnlyBowling bieden we naast een geweldige bowlingervaring ook een uitgebreide selectie aan dranken.<br>
 Geniet van verfrissende frisdranken, ambachtelijke cocktails, sappen en koffie. Onze gezellige horeca is de <br>
 perfecte plek om te ontspannen na een potje bowlen. Kom langs en ontdek het zelf! <br><br>

 <strong>Koffie en Thee</strong> <br>
 1. Espresso - €2,50<br>
 2. Cappuccino - €3,00 <br>
 3. Latte Macchiato - €3,50 <br>
 4. Verse Munttee - €2,75 <br> <br>

 <strong>Sappen en Smoothies</strong> <br>
 1. Versgeperste Sinaasappelsap - €3,50 <br>
 2. Appelsap - €2,75<br>
 3. Groene Smoothie - €4,50 <br>
 4. Bessen Smoothie - €4,50 <br><br>
`
document.body.appendChild(p);
    p.style.color = 'black';
    p.style.position = 'absolute';
    p.style.top = '250px'; 
    p.style.left = '400px';
    p.style.fontSize = '30px';
    p.style.lineHeight = '1.5';
    
var p2 = document.createElement('P2');
p2.innerHTML =
    `
<strong>Frisdranken</strong> <br>
 1. Coca-Cola - €2,50 <br> 
 2. Fanta - €2,50 <br>
 3. Sprite - €2,50 <br>
 4. Tonic - €2,75 <br>
 5. Spa Rood - €2,25 <br> <br>

<strong>Coktails</strong> <br>
 1. Virgin Mojito - €5,00 <br>
 2. Nojito - €5,00 <br>
 3. Fruit Punch - €5,00 <br><br>
    `
document.body.appendChild(p2);
    p2.style.color = 'black';
    p2.style.position = 'absolute';
    p2.style.top = '470px'; 
    p2.style.left = '1300px';
    p2.style.fontSize = '30px';
    p2.style.lineHeight = '1.5';
   
/* var footer = document.createElement('footer');
footer.innerHTML = 
    `
      <footer class="footer">
        <h1>Contactgegevens</h1>
    </footer>
    `
document.body.appendChild(footer);

footer.style.marginTop = '800px';
footer.style.width = '100%px';
footer.style.height = '250px';
footer.style.backgroundColor = '#F9DBBB'; */




    
