var boardElementArray = [
    {
        name:'fries',
        img: 'images/fries.png',
      
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png',
      
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png',
      
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png',
      
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name:'pizza',
        img: 'images/pizza.png',
    },

    {
        name:'fries',
        img: 'images/fries.png',
      
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png',
      
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png',
      
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png',
      
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name:'pizza',
        img: 'images/pizza.png',
    }
]

randomShuffle(boardElementArray);

var boardDisplay = document.querySelector('#board');

var clickedElementsArray =[];
var chosenElementIds =[];

//making the board
for(let i=0; i<12; i++){
    var element = document.createElement('img');
    
    element.setAttribute('src','images/blank.png');
    element.setAttribute('element-id', i);
    element.style.padding = "10px 10px 10px 10px";
    
    //showelement when clicked
    element.addEventListener('click',showcard);
    boardDisplay.appendChild(element);
}

function showcard(){
    {
        imgPath = boardElementArray[this.getAttribute("element-id")].img;
        var clickedElement = boardElementArray[this.getAttribute("element-id")];
        console.log(clickedElement);
        clickedElementsArray.push(clickedElement.name);
        chosenElementIds.push(this.getAttribute("element-id"));
        this.setAttribute('src',imgPath); //change the image when turned over

        if(document.getElementById("score").textContent == "Click on a tile to start the game!"){
            document.getElementById("score").textContent = "Your Score is : 0";
        }
        //check match
        if(clickedElementsArray.length == 2){
            setTimeout(function(){
                var allElements = document.querySelectorAll('img');
                if(clickedElementsArray[0]==clickedElementsArray[1]){
                    console.log("It's a match!");
                    //matched images are changed to white
                    allElements[chosenElementIds[0]].setAttribute('src','images/white.png');
                    allElements[chosenElementIds[0]].removeEventListener('click',showcard);
                    allElements[chosenElementIds[1]].setAttribute('src','images/white.png');
                    allElements[chosenElementIds[1]].removeEventListener('click',showcard);
                    var textElement = document.getElementById("score");
                    var text = textElement.textContent;
                    var score;
                    if(text == "Your Score is : 0"){
                        score = 1;
                    }
                    else {
                        score = parseInt(text[text.length-1]);
                        score++;
                    }
                    var header = `Your Score is: ${score}`;
                    textElement.textContent = header;
                    if(score == 6){
                        textElement.textContent = "Great Job! You have matched all the pairs!!";
                    }
                }
                //unmatched pairs are made blank again
                else{
                    allElements[chosenElementIds[0]].setAttribute('src','images/blank.png');
                    allElements[chosenElementIds[1]].setAttribute('src','images/blank.png');
                }
                //reset these arrays
                clickedElementsArray = [];
                chosenElementIds = [];
            },200)
        }
    }
}


//randomly shuffle the array of elements
function randomShuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
