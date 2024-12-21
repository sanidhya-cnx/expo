let inp1=document.getElementById("input1");
let inp2=document.getElementById("input2");
let body=document.querySelector('body');
let btn=document.getElementById("btn");
btn.addEventListener("click",()=>{
    console.log("button clicked");
    let div=document.createElement('div')
    body.appendChild(div);
    let newP1=document.createElement('p');
    newP1.innerText=inp1.value;
    inp1.value="";
    div.appendChild(newP1);
    let newP2=document.createElement('p');
    newP2.innerText=inp2.value;
    inp2.value=""
    div.appendChild(newP2);
})