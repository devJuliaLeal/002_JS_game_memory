const cardArray =[
    {
        name: 'img1-annya',
        img: 'documentos/img1-annya.jpg',
    },
    {
        name: 'img2-jam',
        img: 'documentos/img2-jam.jpg',
    },
    {
        name: 'img3-sword',
        img: 'documentos/img3-sword.jpg',
    },
    {
        name: 'img4-duck',
        img: 'img4-duck.jpg',
    },
    {
        name: 'img5-catnana',
        img: 'documentos/img5-catnana.jpg',
    },
    {
        name: 'img6-flower',
        img: 'documentos/img6-flower.jpg',
    },    {
        name: 'img1-annya',
        img: 'documentos/img1-annya.jpg',
    },
    {
        name: 'img2-jam',
        img: 'documentos/img2-jam.jpg',
    },
    {
        name: 'img3-sword',
        img: 'documentos/img3-sword.jpg',
    },
    {
        name: 'img4-duck',
        img: 'documentos/img4-duck.jpg',
    },
    {
        name: 'img5-catnana',
        img: 'documentos/img5-catnana.jpg',
    },
    {
        name: 'img6-flower',
        img: 'documentos/img6-flower.jpg',
    }
]
cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
console.log (gridDisplay)

function createBoard (){
    for(let i=0; i<10; i++) {
      const card = document.createElement('img')
      card.setAttribute('src','documentos/img6-flower.jpg')
      card.setAttribute('data-id', i)
    gridDisplay.appendChild(card)

    }
}
createBoard ()





















