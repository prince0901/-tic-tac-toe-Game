let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let nw =document.querySelector("#new");
let msgContainer=document.querySelector(".msg-container");
let p=document.querySelector("#msg");

let turnO=true;
let listArray = [
  { age: 12, name: "shalu" },
  { age: 12, name: "shalu" },
  { age: 12, name: "shalu" },
  { age: 12, name: "shalu" },
  { age: 12, name: "shalu" },
  { age: 12, name: "shalu" },
  { age: 12, name: "shalu" },
];

const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }};

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
  
];

const resetGame=()=>{
    enableBoxes()
    msgContainer.classList.add("hide"); 
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was click");
        if(turnO){
            box.style.color = "yellow" ;
            box.innerText="O";
           
        turnO=false;
    }else{
        box.style.color = "pink" ;
        box.innerText="X"
        turnO=true;
    }
    box.disabled=true;
    checkWinner();
});

});
const disabledBoxes=()=>{
for(box of boxes){
    box.disabled=true;
}};

const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}





const checkWinner=()=>{
    for(let pattern of win){
        // console.log(pattern[0],pattern[1],pattern[2 ]);
        // console.log(boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2 ]].innerText;

      if(pos1 !=""&&pos2 !=""&& pos3 !=""){
         if(pos1===pos2&& pos2===pos3){
            console.log("winner");
            showWinner(pos1);
         }
      }
    }
};

nw.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
