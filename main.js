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

function createOnlyBowlingContent() {
   
    var imgElement = new Image();
    imgElement.src = "images/OnlyBowling main.jpg";
    document.body.appendChild(imgElement);
    imgElement.style.width = '800px';
    imgElement.style.marginTop = '100px';
    imgElement.style.height = '555px'; 
    imgElement.style.marginLeft = '550px';

    
    var h1 = document.createElement('h1');
    h1.textContent = "Welkom bij OnlyBowling!";
    document.body.appendChild(h1);
    h1.style.color = 'black';
    h1.style.position = 'absolute';
    h1.style.top = '1400px'; 
    h1.style.left = '400px';

    var p1 = document.createElement('p');
    p1.innerHTML =
        "Ben je klaar om een geweldige tijd te hebben? Bij OnlyBowling draait alles om plezier en <br> gezelligheid met vrienden en familie. We zijn dé plek waar bowlen tot leven komt!";
    document.body.appendChild(p1);
    p1.style.color = 'black';
    p1.style.position = 'absolute';
    p1.style.top = '1450px'; 
    p1.style.left = '400px';
    p1.style.fontSize = '30px';

       var h1= document.createElement('h1');
    h1.innerHTML =
        "<bold> <br> Wat is OnlyBowling? </bold>";
    document.body.appendChild(h1);
    h1.style.color = 'black';
    h1.style.position = 'absolute';
    h1.style.top = '1500px'; 
    h1.style.left = '400px';

     var p2 = document.createElement('p2');
    p2.innerHTML =
        `
        OnlyBowling is jouw ultieme bestemming voor een onvergetelijk bowlingavontuur.  <br> Of je nu een beginner bent of een ervaren bowler,
       onze moderne bowlingbanen en <br>gezellige sfeer zorgen ervoor dat iedereen zich thuis voelt.
       `
    document.body.appendChild(p2);
    p2.style.color = 'black';
    p2.style.position = 'absolute';
    p2.style.top = '1590px'; 
    p2.style.left = '400px';
    p2.style.fontSize = '30px';

    var head= document.createElement('h1');
    head.innerHTML =
        "<bold> <br>Wat bieden we aan?</bold>";
    document.body.appendChild(head);
    head.style.color = 'black';
    head.style.position = 'absolute';
    head.style.top = '1700px'; 
    head.style.left = '400px';

      var p3 = document.createElement('p3');
    p3.innerHTML =
        `
        &#8226 State-of-the-art bowlingbanen <br>
        &#8226 Gezellige sfeer voor vrienden en familie <br>
        &#8226 Heerlijk eten en drinken in ons restaurant <br>
        &#8226 Professionele begeleiding voor beginners 
       `
    document.body.appendChild(p3);
    p3.style.color = 'black';
    p3.style.position = 'absolute';
    p3.style.top = '1790px'; 
    p3.style.left = '400px';
    p3.style.fontSize = '30px';

    var hoe = document.createElement('h1');
    hoe.innerHTML =
        "<bold> <br>Hoe werkt het?</bold>";
    document.body.appendChild(hoe);
    hoe.style.color = 'black';
    hoe.style.position = 'absolute';
    hoe.style.top = '1950px'; 
    hoe.style.left = '400px';

    var p4 = document.createElement('p4');
    p4.innerHTML =
        `
      Het is eenvoudig! Reserveer een baan, trek je bowlingschoenen aan en begin met gooien.
      <br> Of je nu wilt ontspannen met vrienden of een competitief potje wilt spelen,
      <br> bij OnlyBowling beleef je altijd plezier.
       `
    document.body.appendChild(p4);
    p4.style.color = 'black';
    p4.style.position = 'absolute';
    p4.style.top = '2040px'; 
    p4.style.left = '400px';
    p4.style.fontSize = '30px';

    var contact = document.createElement('h1');
    contact.innerHTML =
        "<bold> <br>Contacteer ons</bold>";
    document.body.appendChild(contact);
    contact.style.color = 'black';
    contact.style.position = 'absolute';
    contact.style.top = '2150px'; 
    contact.style.left = '400px';

    var p5 = document.createElement('p5');
    p5.innerHTML =
        `
        Heb je vragen of wil je een evenement organiseren?
        <br>Neem gerust contact met ons op! Ons vriendelijke team staat klaar om je te helpen. <br>
       <br> Klaar om te bowlen? Kom langs bij OnlyBowling en ervaar de spanning en gezelligheid! <br> <br> <br>
       `
    document.body.appendChild(p5);
    p5.style.color = 'black';
    p5.style.position = 'absolute';
    p5.style.top = '2250px'; 
    p5.style.left = '400px';
    p5.style.fontSize = '30px';

}

setupNavbar();
createOnlyBowlingContent();
