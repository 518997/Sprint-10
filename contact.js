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
` <strong>Contactgegevens</strong> <br>
  Heeft u vragen of wilt u meer informatie? Neem dan gerust contact met ons op. <br>
  Ons vriendelijke team staat klaar om u te helpen! <br> <br>

   <strong>Adres:</strong> <br>
   OnlyBowling <br>
   Centrale Straat 123 <br>
   1000 AB Amsterdam <br>
   Nederland <br> <br>

   <strong>Telefoon:</strong> <br>
   +31 20 123 4567 <br> <br>

   <strong>E-mail:</strong> <br>
   info@onlybowling.nl <br> <br>

   <strong>Openingstijden:</strong> <br>
   Maandag - Vrijdag: 12:00 - 22:00 <br>
   Zaterdag - Zondag: 10:00 - 23:00 <br> <br>

   <strong>Social Media:</strong> <br>
   Volg ons op sociale media voor de laatste updates en speciale aanbiedingen! <br> <br> 

   &#8226 Facebook  <br>
   &#8226 Instagram <br>
   &#8226 Twitter <br> <br>

`
document.body.appendChild(p);
    p.style.color = 'black';
    p.style.position = 'absolute';
    p.style.top = '300px'; 
    p.style.left = '400px';
    p.style.fontSize = '30px';
    p.style.lineHeight = '1.5';
