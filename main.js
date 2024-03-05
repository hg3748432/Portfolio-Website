var content1=document.getElementById("content1");
var content2=document.getElementById("content2");
var content3=document.getElementById("content3");
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");
function openskills(){
    content1.style.transform="translateX(0)";
    content2.style.transform="translateX(100%)";
    content3.style.transform="translateX(100%)";
    btn2.style.color="aliceblue";
    btn3.style.color="aliceblue";
}
function openeducation(){
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(0)";
    content3.style.transform="translateX(100%)";
    btn2.style.color="rgb(206, 169, 241)";
    btn1.style.color="aliceblue";
    btn3.style.color="aliceblue";
}
function openexperience(){
    content1.style.transform="translateX(100%)";
    content2.style.transform="translateX(100%)";
    content3.style.transform="translateX(0)";
    btn3.style.color="rgb(206, 169, 241)";
    btn2.style.color="aliceblue";
    btn1.style.color="aliceblue";
}
