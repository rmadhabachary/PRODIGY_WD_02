const stop=document.querySelector('.stop')
const play=document.querySelector('.play')
const restart=document.querySelector('.restart')
const display=document.querySelector('.display')

let [s,m,h]=[0,0,0]
const start=null;

play.addEventListener('click',()=>{

    const start=setInterval(timer,1000)

    function timer(){
    s++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++
        }
    }

    const hr=h<10?"0"+h:h
    const mn=m<10?"0"+m:m
    const sec=s<10?"0"+s:s

    display.innerHTML=hr+":"+mn+":"+sec
    }

    stop.addEventListener('click',()=>{
        if(start!=null){
            clearInterval(start)
        }
        
    })

    restart.addEventListener('click',()=>{
        [s,m,h]=[0,0,0];
        clearInterval(start);
        display.innerHTML="00:00:00";
        
    })
    
})


