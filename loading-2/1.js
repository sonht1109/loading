var h4 = document.getElementsByTagName('h4')[0];
var load = document.getElementById('load');
var h5 = document.getElementsByTagName('h5')[0];

var h2 = document.getElementsByTagName('h2')[0];
var container = document.getElementsByClassName('container')[0];
console.log(container);

var stt = 'a-dot';
var loadingDot = setInterval(dotplus, 400);
var loadingNum = setInterval(numplus, 40);
var loadingBlock = setInterval(blockplus, 40);

var i = 0, j = 0;

function dotplus(){
    if(stt === 'a-dot'){
        h4.innerHTML = 'Loading .';
        stt = 'two-dot'; 
    }
    else if(stt === 'two-dot'){
        h4.innerHTML = 'Loading ..';
        stt = 'three-dot'; 
    }
    else if(stt === 'three-dot'){
        h4.innerHTML = 'Loading ...';
        stt = 'a-dot'; 
    }
    if(i === 100){
        clearInterval(loadingDot);
        container.style.visibility = 'hidden';
        h2.classList.add('appear');
    }
    
}

function numplus(){
    i++;
    h5.innerHTML = i + '%';
    if(i === 100){
        clearInterval(loadingNum);
    }
}

function blockplus(){
    j += 1;
    load.style.width = j + 'px';
    if(j === 100){
        clearInterval(loadingBlock);
    }
}
