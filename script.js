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
   //clrear all interval and upadete heigth score
   cleare_intervel_heigth_score(currScor);


   //change imgs
   snak.src = "imgs/SnakR.png"

   //upadete snak speed
   setInterval(()=>{
    incres_snak_speed()
} , 1);

   rigthInterVal =  setInterval(moveRigth , snakSpeed);

   //background song play
   if(backgroundSong_count == 0){
       background_SongPlay();
       backgroundSong_count++;
   }
   
}
const startLeft = ()=>{
   //clrear all interval and upadete heigth score
   cleare_intervel_heigth_score(currScor);

   //change imgs
   snak.src = "imgs/SnakL.png"

    //upadete snak speed
    setInterval(()=>{
      incres_snak_speed();
   } , 1);

   LeftInterVal =  setInterval(moveLeft , snakSpeed);

    //background song play
    if(backgroundSong_count == 0){
       background_SongPlay();
       backgroundSong_count++;
   }
}
const startTop = ()=>{
   //clrear all interval and upadete heigth score
   cleare_intervel_heigth_score(currScor);


   //change imgs
   snak.src = "imgs/SnakT.png"

   setInterval(()=>{
       incres_snak_speed();
   } , 1);

   TopInterVal = setInterval(moveTop , snakSpeed);

    //background song play
    if(backgroundSong_count == 0){
       background_SongPlay();
       backgroundSong_count++;
   }
}
const startBottom = ()=>{
   //clrear all interval and upadete heigth score
   cleare_intervel_heigth_score(currScor);


   //change imgs
   snak.src = "imgs/SnakB.png"

   //upadete snak speed
   setInterval(()=>{
       incres_snak_speed()
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
       score_incress();
   }

   if(SnakLeftPosition == 890){
       SnakLeftPosition = 100;
       
      decress_life_time();
   }
    //check game over
     check_game_over(currScor)

}

const moveLeft = ()=>{
   SnakLeftPosition -= 10;
   snak.style.left = SnakLeftPosition+'px';

   //eat apple
   let ansLeft = appleLeft - SnakLeftPosition;
   let ansTop = appleTop - SnakTopPosition;
   if(ansLeft<= 20 && ansLeft>= -20 && ansTop <=20 && ansTop >= -20){
       score_incress();
   }

   
   if(SnakLeftPosition < 100 ){
       SnakLeftPosition = 890;
      decress_life_time();
   }

   //check game over
      check_game_over(currScor)
}

const moveBottom = ()=>{
   SnakTopPosition += 10;
   snak.style.top = SnakTopPosition+'px';

   let ansLeft = appleLeft - SnakLeftPosition;
   let ansTop = appleTop - SnakTopPosition;
   if(ansLeft<= 20 && ansLeft>= -20 && ansTop <=20 && ansTop >= -20){
       score_incress();
   }
   
   if(SnakTopPosition == 550){
       SnakTopPosition = 70;
      decress_life_time();
   }

    //check game over
    check_game_over(currScor)
  
}

const moveTop = ()=>{
   SnakTopPosition -= 10;
   snak.style.top = SnakTopPosition+'px';

   let ansLeft = appleLeft - SnakLeftPosition;
   let ansTop = appleTop - SnakTopPosition;
   if(ansLeft<= 20 && ansLeft>= -20 && ansTop <=20 && ansTop >= -20){
       score_incress()
   }

   if(SnakTopPosition < 70 ){
       SnakTopPosition = 550;
      decress_life_time();
   }
    //check game over
   check_game_over(currScor)
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


//game over
 const check_game_over = (currScor) =>{
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
 }

 //score incress 
 const score_incress = ()=>{
    ApplePositon();
    currScor++;
    currScoreID.innerHTML =currScor;
    seepdIncessCount --;

 }
 //dicress life time
 const decress_life_time = ()=>{
    lifeTime--;
    if(lifeTime <= 3){
        lifeTimeID.style.color ='red';
    }
    lifeTimeID.innerHTML = lifeTime

    //lifeDicressSong_play
    lifeDicressSong_play();
 }


 //cleare all interval and upadte heigth score
  const cleare_intervel_heigth_score = (currScor)=>{
    //clear interval
    clearInterval(rigthInterVal);
    clearInterval(LeftInterVal);
    clearInterval(BottomInterVal);
    clearInterval(TopInterVal)

    //UPDATE heigth score
    let heightScore = Math.max(localStorage.getItem('heighScore') , currScor);
    localStorage.setItem('heighScore', heightScore)

  }

  //const incess snak speed
   const incres_snak_speed = ()=>{
    if(snakSpeed == 15){
        snakSpeed = 15;
       }else{
           if(seepdIncessCount == 0){
               snakSpeed -= 3;
               seepdIncessCount = 5;
           }
       }
   }