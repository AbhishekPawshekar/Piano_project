let pianokey=[];
for(let i=1;i<=24;i++){
          pianokey[i]=document.getElementById("key"+i);
}

function playsound(count){
          let newurl ='24/key'+' ('+count+')'+'.mp3';
          new Audio(newurl).play();

}



