const theButton = document.querySelector("button");
const rColor = function(number) {
    return Math.floor(Math.random() * (number + 1));
}

theButton.addEventListener("click", function(){
    const bChange =`rgb(${rColor(255)}, ${rColor(255)}, ${rColor(255)})`;
    
    document.body.style.backgroundColor = bChange;
})
