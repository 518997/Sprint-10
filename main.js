
// Navbar
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
                
// Zoekbalk

   let searchInput = document.getElementById("searchbar_got");
   searchInput.onkeyup = searchGOT;

   function searchGOT() {
       const table = document.getElementById(‘gottable’);
       const allCharacters = table.getElementsByTagName(’tr’);
   }

   for (var i=1; i < allCharacters.length; i++) {
       var cellData = allCharacters[i].getElementsByTagName(’td’);
       for (var j=0; j < cellData.length; j++) {
          if(cellData[j].innerHTML.toUpperCase().indexOf(searchValue) > -1) {
          var hit = true;
       }
   }

   if (hit) {
      allCharacters[i].style.display = "";
      hit = false;
   } else {
      if (i > 0) {
        allCharacters[i].style.display = "none";
      }  
   } }

