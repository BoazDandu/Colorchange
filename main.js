
var root = document.getElementById('root');

var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'indigo', 'violet'];

var boxes = document.querySelectorAll('.box');

boxes.forEach((element, index) => {
    element.style.backgroundColor = colors[index % colors.length];

    element.onmouseover = (e) => {
        document.querySelector('body').style.backgroundColor = element.style.backgroundColor;
    }

    element.addEventListener('click', (e) => {
        document.querySelector('body').style.backgroundColor = element.style.backgroundColor;
    });
    
});

const rotate = () => {
    document.getElementById('clockWise').style.transform = "rotate(360deg)";
}

const resetOptions = () => {            
    setTimeout(function() {
        document.querySelector('body').style.backgroundColor = "transparent";
        window.location.reload();
    }, 3000)
}



