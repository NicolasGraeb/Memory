document.addEventListener('DOMContentLoaded',()=>{
const cardArray=[
    {
        name:'debil',
        img:'img/1.png'
    },
    {
        name:'debil',
        img:'img/1.png'
    },
    {
        name:'schizol',
        img:'img/2.png'
    },
    {
        name:'schizol',
        img:'img/2.png'
    },
   {
        name:'siemastary',
       img:'img/3.png'
   },
    {
        name:'siemastary',
        img:'img/3.png'
    },
    {
        name:'wesolych',
        img:'img/4.png'
    },
    {
      name:'wesolych',
        img:'img/4.png'
    },
    {
        name:'franek',
        img:'img/5.png'
    },
    {
       name:'franek',
        img:'img/5.png'
   },
    {
        name:'chlop',
        img:'img/6.png'
    },
    {
        name:'chlop',
        img:'img/6.png'
    },
    {
        name:'pou',
        img:'img/7.png'
    },
    {
        name:'pou',
        img:'img/7.png'
    },
    {
        name:'mc',
        img:'img/8.png'
    },
    {
        name:'mc',
        img:'img/8.png'
    },
   // {
    //    name:'twr',
     //  img:'img/9.png'
  // },
    //{
       // name:'twr',
        //img:'img/9.png'
  //  },

]
cardArray.sort(() => 0.5-Math.random())
const gridDisplay=document.querySelector('#grid')
let cardsChosen=[];
let cardsChosenId=[];
const cardsWon=[];
function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card=document.createElement('img')
        card.setAttribute('src', 'img/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',pickCard)
        
        gridDisplay.appendChild(card)
    }
}
function checkPairs(){
    const cards=document.querySelectorAll('img')
    const optionOneId=cardsChosenId[0]
    const optionTwoId=cardsChosenId[1]
    if(optionOneId==optionTwoId){
        card[optionOneId].setAttribute('src', 'img/blank.png')
        card[optionTwoId].setAttribute('src', 'img/blank.png')

    }
    
    else if(cardsChosen[0]===cardsChosen[1]){
    cards[optionOneId].setAttribute('src','img/white.png')
    cards[optionTwoId].setAttribute('src','img/white.png')
    cards[optionOneId].removeEventListener('click',pickCard)
    cards[optionTwoId].removeEventListener('click',pickCard)
    cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src','img/blank.png')
        cards[optionTwoId].setAttribute('src','img/blank.png')
    }

    cardsChosen=[]
    cardsChosenId=[]

    if(cardsWon.length==cardArray/2){
        alert("bratku mniaaam")
    }
}

function pickCard(){
    
    let cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length===2){
        setTimeout(checkPairs,500)
        

    }
}
createBoard()
})





