
var root = document.getElementById('root');

var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'indigo', 'violet'];

var boxes = document.querySelectorAll('.box');

boxes.forEach((element, index) => {
    element.style.backgroundColor = colors[index % colors.length];
    element.addEventListener('click', () => {
        document.querySelector('body').style.backgroundColor = element.style.backgroundColor;
    });
});

document.getElementById('clockWise').addEventListener('click', () => {
    document.getElementById('clockWise').style.transform = "rotate(360deg)";
})

const resetOptions = () => {            
    document.getElementById('reset').addEventListener('click', () => {
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor = "transparent";
        }, 2000)

    });
}

resetOptions();
