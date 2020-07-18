let container = document.querySelector('#container');
let i;
let j;


for(i = 0; i < 256; i++){
        let content = document.createElement('div');
        content.classList.add('quadradinho');
        container.appendChild(content);
}


let quadradinho = document.querySelector(".quadradinho");

quadradinho.addEventListener("mouseover", function(e){
        e.currentTarget.style.color = 'black';
});

console.log(container)