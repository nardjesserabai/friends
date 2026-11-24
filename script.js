// when click the window 
// don'( forgot the sound )
const envlope = document.querySelector('.envlope');
const loveWindow= document.querySelector('.letter-container');
envlope.addEventListener('click',()=>{
    envlope.style.display="none";
    loveWindow.style.display="flex";
    setTimeout(()=>{
       document.querySelector('.letter-window').classList.add("open");
    },100)

})

// no button to move away 
const noBtn=document.querySelector('.no-btn');
noBtn.addEventListener("mouseover",()=>{
    const min=200;
    const max=200;

    const distance=Math.random()*(min-max) +min //random number between min and max 
    const angle =Math.random()*Math.PI*2; // pick a random angle 

    const moveX=Math.cos(angle)*distance;
    const moveY=Math.sin(angle)*distance;
    noBtn.style.transform=`translate(${moveX}px , ${moveY}px)` ;
    noBtn.style.transition="transform 0.3s ease" ;

})



// //  yes btn to grow 
// const noBtn=document.querySelector('.no-btn');
// let yesScale=1;
// noBtn.addEventListener("click",()=>{
    //     yesScale+=2 ;
    //     if(yesBtn.style.psition!=="fixed"){
        //         yesBtn.style.psition="fixed";
//         yesBtn.style.top="50%" ;
//         yesBtn.style.left="50%" ;
//         yesBtn.style.transform=`translate(-50% , -50%) scale(${yesScale}) ` ;
        
//     }else{
    //         yesBtn.style.transform=`translate(-50% , -50%) scale(${yesScale}) ` ;
    //     }
    
    // });
    
const yesBtn=document.querySelector('.yes-btn');
// yes is clicked 
const title =document.querySelector('h1');
const cat =document.querySelector('.cat');
const buttons =document.querySelector('.buttons');
const finalText =document.querySelector('.quote');

// adding the song 
const song = new Audio("assets/myGirl.mp3");
const START = 132;       // where the part starts (seconds)
const END = 183;         // where the part ends (seconds)
const FADE_STEP = 0.002; // how much volume drops each tick
const TICK = 200;       // time between ticks (milliseconds)

function playPart() {
    song.currentTime = START;
    song.volume = 1;
    song.play();

    const timer = setInterval(() => {
        // loop: jump back to the start when the part ends
        if (song.currentTime >= END) {
            song.currentTime = START;
        }

        // lower the volume a little (never below 0)
        song.volume = Math.max(0, song.volume - FADE_STEP);

        // silent -> stop everything
        if (song.volume === 0) {
            song.pause();
            clearInterval(timer);
        }
    }, TICK);
}

yesBtn.addEventListener("click",()=>{
    title.textContent="Yipeee!!" ;
    cat.src="assets/cat_dance.gif" ;
    cat.style.position="relative";
    cat.style.top="-30px" ;
    finalText.style.position="relative";
    finalText.style.top="-12px" ;
    buttons.style.display="none" ;
    finalText.style.display="block";
    document.querySelector('.letter-window').classList.add("final");
    playPart();

    
})