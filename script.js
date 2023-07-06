//snak speed
 let snakSpeed = 40;
 let seepdIncessCount = 5;

 //song play and push
 let backgroundSong_count = 0;
 let backgroundSong = new Audio('song/backgroundSong.mp3');
const background_SongPlay = ()=>{
    backgroundSong.play();
}
const background_SongPause =()=>{
    backgroundSong.pause();
}

let eatSong =new Audio ('song/eatSong.mp3');
const eatSong_play = ()=>{
     eatSong.play();
}

let lifeDicressSong = new Audio('song/lifeDicressSong.mp3');
const lifeDicressSong_play = ()=>{
    lifeDicressSong.play();
}

let GameOverSong = new Audio('song/GameOver.mp3')
const GameOverSong_play = ()=>{
    GameOverSong.play();
}
  

//scrore bord
let currScoreID = document.getElementById('currScor');
let heigthScror = document.getElementById('heigthScror');

//inistiol heigh score
let localStorage_Chack_HeigthScore = localStorage.getItem('heighScore');
  
     if(localStorage_Chack_HeigthScore){
        heigthScror.innerHTML = localStorage_Chack_HeigthScore;
     }else{
        heigthScror.innerHTML = 0
     }
   
 
 let currScor = 0;

 //life time
 let lifeTimeID = document.getElementById('lifeTime');
 let lifeTime = 5;


//variable
let snak = document.getElementById('snak')
let apple = document.getElementById('apple');

//positin insial
let SnakLeftPosition = 200;
let SnakTopPosition = 100;

//interval inisal
let rigthInterVal = 0;
let LeftInterVal = 0;
let TopInterVal = 0;
let BottomInterVal = 0;

const startRigth = ()=>{
    //clear interval
        clearInterval(rigthInterVal);
        clearInterval(LeftInterVal);
        clearInterval(BottomInterVal);
        clearInterval(TopInterVal)

        //UPDATE heigth score
        let heightScore = Math.max(localStorage.getItem('heighScore') , currScor);
        localStorage.setItem('heighScore', heightScore)


    //change imgs
    snak.src = "imgs/SnakR.png"

    rigthInterVal =  setInterval(moveRigth , snakSpeed);

    //background song play
    if(backgroundSong_count == 0){
        background_SongPlay();
        backgroundSong_count++;
    }
    
}
const startLeft = ()=>{
    //clear interval
        clearInterval(rigthInterVal);
        clearInterval(LeftInterVal);
        clearInterval(BottomInterVal);
        clearInterval(TopInterVal)

        //UPDATE heigth score
        let heightScore = Math.max(localStorage.getItem('heighScore') , currScor);
        localStorage.setItem('heighScore', heightScore)


    //change imgs
    snak.src = "imgs/SnakL.png"

     //upadete snak speed
     setInterval(()=>{
        if(snakSpeed == 0){
            snakSpeed = 5;
           }else{
               if(seepdIncessCount == 0){
                   snakSpeed -= 10;
                   seepdIncessCount = 5;
               }
           }
    } , 1);

    LeftInterVal =  setInterval(moveLeft , snakSpeed);

     //background song play
     if(backgroundSong_count == 0){
        background_SongPlay();
        backgroundSong_count++;
    }
}
const startTop = ()=>{
    //clear interval
        clearInterval(rigthInterVal);
        clearInterval(LeftInterVal);
        clearInterval(BottomInterVal);
        clearInterval(TopInterVal)

        //UPDATE heigth score
        let heightScore = Math.max(localStorage.getItem('heighScore') , currScor);
        localStorage.setItem('heighScore', heightScore)


    //change imgs
    snak.src = "imgs/SnakT.png"

    setInterval(()=>{
        if(snakSpeed == 0){
            snakSpeed = 5;
           }else{
               if(seepdIncessCount == 0){
                   snakSpeed -= 10;
                   seepdIncessCount = 5;
               }
           }
    } , 1);

    TopInterVal = setInterval(moveTop , snakSpeed);

     //background song play
     if(backgroundSong_count == 0){
        background_SongPlay();
        backgroundSong_count++;
    }
}
const startBottom = ()=>{
    //clear interval
        clearInterval(rigthInterVal);
        clearInterval(LeftInterVal);
        clearInterval(BottomInterVal);
        clearInterval(TopInterVal)

        //UPDATE heigth score
        let heightScore = Math.max(localStorage.getItem('heighScore') , currScor);
        localStorage.setItem('heighScore', heightScore)


    //change imgs
    snak.src = "imgs/SnakB.png"

    //upadete snak speed
    setInterval(()=>{
        if(snakSpeed == 15){
            snakSpeed = 15;
           }else{
               if(seepdIncessCount == 0){
                   snakSpeed -= 10;
                   seepdIncessCount = 5;
               }
           }
    } , 1);

    BottomInterVal = setInterval(moveBottom , snakSpeed);

     //background song play
     if(backgroundSong_count == 0){
        background_SongPlay();
        backgroundSong_count++;
    }
}

const moveRigth = ()=>{
    SnakLeftPosition += 10;
    snak.style.left = SnakLeftPosition+'px';


    let ansLeft = appleLeft - SnakLeftPosition;
    let ansTop = appleTop - SnakTopPosition;
    if(ansLeft<= 20 && ansLeft>= -20 && ansTop <=20 && ansTop >= -20){
        ApplePositon();
        currScor++;
        currScoreID.innerHTML =currScor;
        seepdIncessCount --;

        //eat song play
        eatSong_play();
    }

    if(SnakLeftPosition == 890){
        SnakLeftPosition = 100;
        
        lifeTime--;
        if(lifeTime <= 3){
            lifeTimeID.style.color ='red';
        }
        lifeTimeID.innerHTML = lifeTime

        //lifeDicressSong_play
        lifeDicressSong_play();
    }
     //check game over
     if(lifeTime == 0){
        console.log("game over")
        //clear interval
        clearInterval(rigthInterVal);
        clearInterval(LeftInterVal);
        clearInterval(BottomInterVal);
        clearInterval(TopInterVal)

        //UPDATE heigth score
        let heightScore = Math.max(localStorage.getItem('heighScore') , currScor);
        localStorage.setItem('heighScore', heightScore)

        
        //alrt box
        Swal.fire({
            title: `Game Over \n Your Scor is : ${currScor} \n heigh Score is : ${heightScore}`,
            confirmButtonText: 'retry',
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                window.location.reload();
            } 
            })
    
            //gameOver Songs
            GameOverSong_play();
            background_SongPause();

    }

    //update snak speed
    if(currScor == currScor+10){
        snakSpeed -= 10;
      }

}
const moveLeft = ()=>{
    SnakLeftPosition -= 10;
    snak.style.left = SnakLeftPosition+'px';

    //eat apple
    let ansLeft = appleLeft - SnakLeftPosition;
    let ansTop = appleTop - SnakTopPosition;
    if(ansLeft<= 20 && ansLeft>= -20 && ansTop <=20 && ansTop >= -20){
        ApplePositon();
        currScor++;
        currScoreID.innerHTML =currScor;
        seepdIncessCount --;

        //eat song play
        eatSong_play();
    }

    
    if(SnakLeftPosition < 100 ){
        SnakLeftPosition = 890;
        lifeTime--;
        if(lifeTime <= 3){
            lifeTimeID.style.color ='red';
        }
        lifeTimeID.innerHTML = lifeTime

        //lifeDicressSong_play
        lifeDicressSong_play();
    }

    //check game over
        if(lifeTime == 0){
            console.log("game over")
            //clear interval
        clearInterval(rigthInterVal);
        clearInterval(LeftInterVal);
        clearInterval(BottomInterVal);
        clearInterval(TopInterVal)

        //UPDATE heigth score
        let heightScore = Math.max(localStorage.getItem('heighScore') , currScor);
        localStorage.setItem('heighScore', heightScore)

            
        //alrt box
                Swal.fire({
        title: `Game Over \n Your Scor is : ${currScor} \n heigh Score is : ${heightScore}`,
        showDenyButton: true,
        confirmButtonText: 'retry',
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.reload();
        } 
        })
         //gameOver Songs
         GameOverSong_play();
         background_SongPause();
         back
       
        }

}
const moveBottom = ()=>{
    SnakTopPosition += 10;
    snak.style.top = SnakTopPosition+'px';

    

    let ansLeft = appleLeft - SnakLeftPosition;
    let ansTop = appleTop - SnakTopPosition;
    if(ansLeft<= 20 && ansLeft>= -20 && ansTop <=20 && ansTop >= -20){
        ApplePositon();
        currScor++;
        currScoreID.innerHTML =currScor;
        seepdIncessCount --;

        //eat song play
        eatSong_play();
    }
    
    if(SnakTopPosition == 550){
        SnakTopPosition = 70;
        lifeTime--;
        if(lifeTime <= 3){
            lifeTimeID.style.color ='red';
        }
        lifeTimeID.innerHTML = lifeTime

        //lifeDicressSong_play
        lifeDicressSong_play();
    }

     //check game over
     if(lifeTime == 0){
        console.log("game over")
        //clear interval
        clearInterval(rigthInterVal);
        clearInterval(LeftInterVal);
        clearInterval(BottomInterVal);
        clearInterval(TopInterVal)

        //UPDATE heigth score
        let heightScore = Math.max(localStorage.getItem('heighScore') , currScor);
        localStorage.setItem('heighScore', heightScore)

        
        //alrt box
                Swal.fire({
        title: `Game Over \n Your Scor is : ${currScor} \n heigh Score is : ${heightScore}`,
        showDenyButton: true,
        confirmButtonText: 'retry',
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.reload();
        } 
        })
         
         //gameOver Songs
         GameOverSong_play();
         background_SongPause();
         back
    }
   
}
const moveTop = ()=>{
    SnakTopPosition -= 10;
    snak.style.top = SnakTopPosition+'px';


    let ansLeft = appleLeft - SnakLeftPosition;
    let ansTop = appleTop - SnakTopPosition;
    if(ansLeft<= 20 && ansLeft>= -20 && ansTop <=20 && ansTop >= -20){
        ApplePositon();
        currScor++;
        currScoreID.innerHTML = currScor;
        seepdIncessCount --;

        //eat song play
        eatSong_play();
    }

    if(SnakTopPosition < 70 ){
        SnakTopPosition = 550;
        lifeTime--;
        if(lifeTime <= 3){
            lifeTimeID.style.color ='red';
        }
        lifeTimeID.innerHTML = lifeTime

        //lifeDicressSong_play
        lifeDicressSong_play();
    }

     //check game over
     if(lifeTime == 0){
        console.log("game over")
        //clear interval
        clearInterval(rigthInterVal);
        clearInterval(LeftInterVal);
        clearInterval(BottomInterVal);
        clearInterval(TopInterVal)

        //UPDATE heigth score
        let heightScore = Math.max(localStorage.getItem('heighScore') , currScor);
        localStorage.setItem('heighScore', heightScore)

        
        //alrt box
                Swal.fire({
        title: `Game Over \n Your Scor is : ${currScor} \n heigh Score is : ${heightScore}`,
        showDenyButton: true,
        confirmButtonText: 'retry',
        }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.reload();
        } 
        })

         //gameOver Songs
         GameOverSong_play();
         background_SongPause();
         back
         
    }

}



//apple postion
let appleposition = 0;
let appleLeft = 500;
let appleTop = 600;

const ApplePositon = ()=>{
     appleLeft = Math.ceil(Math.random()*790);
     appleTop = Math.ceil(Math.random()*490);

     console.log(appleTop)


    if(appleLeft < 120  || appleLeft > 895){
        appleLeft = 150;
    }

    if(appleTop < 75 || appleTop > 525){
        appleTop = 95
    }


    apple.style.left = appleLeft+"px";
    apple.style.top = appleTop+"px";
}

//handle keyparess
document.addEventListener('keydown' , (event)=>{
    console.log(event.key)
    if(event.key == "ArrowDown"){
        startBottom();
    }
    if(event.key == "ArrowRight"){
        startRigth();
    }
    if(event.key == "ArrowUp"){
        startTop();
    }
    if(event.key == "ArrowLeft"){
        startLeft();
    }
    if(event.key == "Enter"){
        clearInterval(rigthInterVal);
        clearInterval(LeftInterVal);
        clearInterval(BottomInterVal);
        clearInterval(TopInterVal)

        //UPDATE heigth score
        let heightScore = Math.max(localStorage.getItem('heighScore') , currScor);
        localStorage.setItem('heighScore', heightScore)

       //background song push
        background_SongPause();
        backgroundSong_count = 0;
        
    }

})








