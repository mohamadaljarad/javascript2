let buton=document.getElementById("liveToastBtn")

buton.addEventListener('click',ekle)



function ekle(){
    
    const input=document.getElementById("task")
    let list=document.getElementById("list")
    
    if(input.value){
        let  li= document.createElement("li")
        let span =document.createElement("span")
        let txt = document.createTextNode("×")
        li.innerHTML=input.value
        span.className=("close") 
        span.appendChild(txt)
        li.appendChild(span)
        list.append(li)
        
        $('#liveToast').toast('show');
  

}
else{
    
    $('#liveToast2').toast('show');

}
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }

}

}


let le=document.getElementById("list")
le.addEventListener('click',isaretle)
function isaretle(event){
   
        event.target.classList.toggle('checked')
  



}
let le2=document.getElementsByTagName("li")
let i;
for(i=0;i<le2.length;i++){
    let span=document.createElement("span")
  let  txt = document.createTextNode("×")
  span.className=("close")
    span.appendChild(txt)
    le2[i].appendChild(span)

}
let close=document.getElementsByClassName("close")
for(i = 0; i < close.length; i++){
    close[i].onclick =function sil(){
      let  div = this.parentElement;
        div.style.display = "none";
    }
}
liste=document.getElementById("list").innerHTML
localStorage.setItem("liste",liste)