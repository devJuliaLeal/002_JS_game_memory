const section = document.querySelector('section')
const playerLivesCount =document.querySelector('span')
const playerLives = 6;

playerLivesCount.textContent = playerLives;


//generade the obect

const getData = () => [
{imgSrc:"./documentos/img1-annya.jpg", name: "annya"},
{imgSrc:"./documentos/img2-jam.jpg", name: "jam"},
{imgSrc:"./documentos/img3-sword.gif", name: "sword"},
{imgSrc:"./documentos/img4-duck.jpg", name: "duck"},
{imgSrc:"./documentos/img5-catnana.jpg", name: "catnana"},
{imgSrc:"./documentos/img6-flower.jpg", name: "flower"},

];

//randomize
const randomize = () => {
const cardData = getData();
cardData.sort(()=> Math.random() -0.5);
console.log(cardData);
};
randomize();

//card generator function

const cardGenerator = () => {
    const cardData = randomize();
    console.log(cardData);
    
}