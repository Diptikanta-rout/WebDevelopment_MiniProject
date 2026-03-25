let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newbutton");
let msg = document.querySelector("#msg")
let msgcontainer = document.querySelector(".msg-container");

let turn0 = true; //playerx, player0
let count = 0; // Use for match Draw

// step - 1
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// step - 6
const resetgame = () => {
    turn0 = true;
    count = 0;
    msgcontainer.classList.add("hide");
    enableboxes();
};

// step - 2
boxes.forEach( (box) =>{
    box.addEventListener( "click", () => {
        // console.log("box click");
        // Taggle case //
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            box.style.color = "red";
            // box.disabled = true;
        }else{
            box.innerText = "X";
            turn0 = true;
            box.style.color = "blue";
            // box.disabled = true;
        }
        box.disabled = true;
        count++; 

        let iswinner = checkwinner();

        if(count === 9 && !iswinner){
            gamedraw();
        }
    });
});

// step - 9
const gamedraw = () => {
    msg.innerText = "Match is Draw";
    msgcontainer.classList.remove("hide");
    disableboxes();
};

// step -5 
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

// step - 7
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

// step - 4
const showWinner = (winner) => {
    msg.innerText = `Congratulation Winner is '${winner}'`;
    msgcontainer.classList.remove("hide");
    disableboxes();
};

// step - 3
const checkwinner = () => {
    for(let pattern of winpatterns){
        let para1 = boxes[pattern[0]].innerText;
        let para2 = boxes[pattern[1]].innerText;
        let para3 = boxes[pattern[2]].innerText;

        if(para1 != "" && para2 != "" && para3 != ""){
            if(para1 === para2 && para2 === para3){
                // console.log("winner",para1);
                showWinner(para1);
            }
        }
    }
};

// step - 8
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);