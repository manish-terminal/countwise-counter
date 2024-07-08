let count=0;

document.getElementById('increasebtn').addEventListener('click',increment)
document.getElementById('decreasebtn').addEventListener('click',decrement)
document.getElementById('resetbtn').addEventListener('click',reset)

function increment(){
    count++;
    document.getElementById('counter').innerHTML=count
}
function decrement(){
    count--;
    document.getElementById('counter').innerHTML=count
}
function reset(){
    count=0
    document.getElementById('counter').innerHTML=count
}