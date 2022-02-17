let images = document.querySelectorAll('.image')
for(let img of images){
    img.addEventListener('click',function(){
       player1 = this.getAttribute('value')
       document.querySelector('#player1').innerHTML = player1
       this.style.transform = 'scale(1.3)'
       computer();
       document.querySelector('.cover').style.display = 'block';
       if(player1 == player2){
        document.querySelector('#score').innerHTML = 'DRAW !!!';
        document.querySelector('#score').style.backgroundColor = 'yellowgreen'
       }
       else if(player1 == 'Rock' && player2 == 'Scissor'){
        document.querySelector('#score').innerHTML = 'YOU WIN';
        document.querySelector('#score').style.backgroundColor = 'green'
    } else if(player1 == 'Paper' && player2 == 'Rock'){
        document.querySelector('#score').innerHTML = 'YOU WIN';
        document.querySelector('#score').style.backgroundColor = 'green'
    }  else if(player1 == 'Scissor' && player2 == 'Paper'){
        document.querySelector('#score').innerHTML = 'YOU WIN';
        document.querySelector('#score').style.backgroundColor = 'green'
    }  else if(player1 == 'Rock' && player2 == 'Lizard'){
        document.querySelector('#score').innerHTML = 'YOU WIN';
        document.querySelector('#score').style.backgroundColor = 'green'
    } else if(player1 == 'Lizard' && player2 == 'Spock'){
        document.querySelector('#score').innerHTML = 'YOU WIN';
        document.querySelector('#score').style.backgroundColor = 'green'
    } else if(player1 == 'Spock' && player2 == 'Scissor'){
        document.querySelector('#score').innerHTML = 'YOU WIN';
        document.querySelector('#score').style.backgroundColor = 'green'
    }  else if(player1 == 'Scissor' && player2 == 'Lizard'){
        document.querySelector('#score').innerHTML = 'YOU WIN';
        document.querySelector('#score').style.backgroundColor = 'green'
    }  else if(player1 == 'Lizard' && player2 == 'Paper'){
        document.querySelector('#score').innerHTML = 'YOU WIN';
        document.querySelector('#score').style.backgroundColor = 'green'
    }  else if(player1 == 'Paper' && player2 == 'Spock'){
        document.querySelector('#score').innerHTML = 'YOU WIN';
        document.querySelector('#score').style.backgroundColor = 'green'
    }  else if(player1 == 'Spock' && player2 == 'Rock'){
        document.querySelector('#score').innerHTML = 'YOU WIN';
        document.querySelector('#score').style.backgroundColor = 'green'
    }  else{
        document.querySelector('#score').innerHTML = 'YOU LOSE';
        document.querySelector('#score').style.backgroundColor = 'red'
    }
    })
}

function computer(){
let random = Math.floor(Math.random() * 5)
let arr = ['Rock','Paper','Scissor','Lizard','Spock']
player2 = arr[random]
document.querySelector('#player2').innerHTML = player2
let compu = document.querySelectorAll('.image1')
for(let x of compu){
   if(x.getAttribute('value') == player2){
    console.log('hi')
     x.style.transform = 'scale(1.3)'
     break
   }else if(x.getAttribute('value') == player2){
    x.style.transform = 'scale(1.3)'
    break
  } else if(x.getAttribute('value') == player2){
    x.style.transform = 'scale(1.3)'
    break
  } else if(x.getAttribute('value') == player2){
    x.style.transform = 'scale(1.3)'
    break
  } else if(x.getAttribute('value') == player2){
    x.style.transform = 'scale(1.3)'
    break
  }
}
}

