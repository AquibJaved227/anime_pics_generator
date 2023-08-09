const btnEls = document.getElementById('btn');
const animeContEls = document.querySelector('.anime-container');
const animeImgEls = document.querySelector('.anime-img');
const animeNameEls = document.querySelector('.anime-name');


btnEls.addEventListener('click', async function(){
 try{
    btnEls.disabled = true;
    btnEls.innerText = "Loading 😁";
    animeNameEls.innerText = "Updating 🧚‍♀️";
  const response = await fetch("https://api.catboys.com/img")
  const result = await response.json();
    btnEls.disabled = false;
     btnEls.innerText = "GET ANIME";
  animeContEls.style.display = "block";
  animeImgEls.src = result.url;
  animeNameEls.innerText = result.artist;
  }catch(error){
    console.log(error);
     btnEls.disabled = false;
     btnEls.innerText = "GET ANIME";
    animeNameEls.innerText = "Error,plzz try again";
    }
});




 
