const section = document.querySelector('section');
const playerLivesCount =document.querySelector('span');
const playerLives = 6;

playerLivesCount.textContent = playerLives;


//generade the obect

const getData = () => [
{imgSrc:"./documentos/img1-annya.jpg", name: "annya"},
{imgSrc:"./documentos/img2-jam.jpg", name: "jam"},
{imgSrc:"./documentos/img3-ghibli.gif", name: "ghibli"},
{imgSrc:"./documentos/img4-duck.jpg", name: "duck"},
{imgSrc:"./documentos/img5-catnana.jpg", name: "catnana"},
{imgSrc:"./documentos/img6-sky.jpg", name: "sky"},
{imgSrc:"./documentos/img7-candy.jpg", name: "candy"},
{imgSrc:"./documentos/img8-cat.gif", name: "cat"},

{imgSrc:"./documentos/img1-annya.jpg", name: "annya"},
{imgSrc:"./documentos/img2-jam.jpg", name: "jam"},
{imgSrc:"./documentos/img3-ghibli.gif", name: "ghibli"},
{imgSrc:"./documentos/img4-duck.jpg", name: "duck"},
{imgSrc:"./documentos/img5-catnana.jpg", name: "catnana"},
{imgSrc:"./documentos/img6-sky.jpg", name: "sky"},
{imgSrc:"./documentos/img7-candy.jpg", name: "candy"},
{imgSrc:"./documentos/img8-cat.gif", name: "cat"},

];

//randomize
const randomize = () => {
const cardData = getData();
cardData.sort(()=> Math.random() -0.5);
return cardData;

};
randomize();

//card generator function

const cardGenerator = () => {
    const cardData = randomize();
// generate the HTML 
cardData.forEach(item => {
   
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div"); 
    card.classList ='card';
    face.classList = 'face';
    back.classList = 'back'; 
//attach the info to the cards
face.src =item.imgSrc;
//attach the cards to the section
section.appendChild(card);
card.appendChild(face);
card.appendChild(back);

card.addEventListener('click', (e)=> {
card.classList.toggle("toggleCard");
})

});

};
cardGenerator(); 