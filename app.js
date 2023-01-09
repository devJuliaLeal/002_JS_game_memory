const cardArray =[
    {
        name: 'img1-annya',
        img: 'img1-annya.jpg',
    },
    {
        name: 'img2-jam',
        img: 'img2-jam.jpg',
    },
    {
        name: 'img3-sword',
        img: 'img3-sword.jpg',
    },
    {
        name: 'img4-duck',
        img: 'img4-duck.jpg',
    },
    {
        name: 'img5-catnana',
        img: 'img5-catnana.jpg',
    },
    {
        name: 'img6-flower',
        img: 'img6-flower.jpg',
    },    {
        name: 'img1-annya',
        img: 'img1-annya.jpg',
    },
    {
        name: 'img2-jam',
        img: 'img2-jam.jpg',
    },
    {
        name: 'img3-sword',
        img: 'img3-sword.jpg',
    },
    {
        name: 'img4-duck',
        img: 'img4-duck.jpg',
    },
    {
        name: 'img5-catnana',
        img: 'img5-catnana.jpg',
    },
    {
        name: 'img6-flower',
        img: 'img6-flower.jpg',
    }
]

cardArray.sort(() => Math.random()) 

const gridDisplay = document.querySelector('#grid')

function createBoard () {
    for (let i=0; i<10; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'documentos/img6-flower.jpg')
      card.setAttribute('data-id', i)
      gridDisplay.appendChild(card)
    }
}
createBoard()

















