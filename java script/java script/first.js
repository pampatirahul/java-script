let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn =document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");

let turnO = true;
 
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],


]; 
const resetGame = () =>{
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

}
const count  =() => {
    
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turnO){
            box.innerText ="O";
            turnO = false;
           
            
        }
        else{
            box.innerText="X";
            turnO = true;
            
        }
        box.disabled = true;
        checkwinner();
        checkDraw();
        
        });
});
const checkDraw = () => { let isDraw = true; for (let box of boxes) { if (box.innerText === "") { isDraw = false; break; } } if (isDraw) { msg.innerText = "It's a Draw!"; msgcontainer.classList.remove("hide"); disableboxes(); }
}
const disableboxes = () =>{
    for(box of boxes){
        box.disabled =true;
    }
   
    
}
const enableboxes = () =>{
    for(box of boxes){
        box.disabled =false;
        box.innerText= "";
    }
}

const showwinner = ( winner) => {
    msg.innerText = `congratulations , Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for (let pattern of winPatterns){
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        
        if (posval1 != ""&& posval2 != "" && posval3 !="" ){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("wineer",posval1);
                showwinner(posval1);
            }
        }

    }
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
