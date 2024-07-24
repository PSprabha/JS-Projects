let div1 = document.getElementById("first");
let div2 = document.getElementById("second");
let div3 = document.getElementById("third");
let div4 = document.getElementById("fourth");
let div5 = document.getElementById("fifth");
let div6 = document.getElementById("sixth");
let div7 = document.getElementById("seventh");
let div8 = document.getElementById("eighth");
let div9 = document.getElementById("ninth");

let output = document.getElementById("output");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

let button = document.getElementById("restart");

let img = document.getElementById("display");
let commonDiv = document.querySelectorAll(".emptyDiv");

let scoreX = document.getElementById("x");
let scoreO = document.getElementById("o");

let a = 0;
let x = 0;
let o = 0;

let victory = false;

output.innerHTML = "X Player Turn";

function ticTac(event){

    let emptyDiv = event.target;
    let attribute = emptyDiv.getAttribute('class');
    output.innerHTML = "X Player Turn";

    if((attribute == "emptyDiv"  &&  emptyDiv.innerHTML != "") || victory == true){
        return;
    }
    else if(attribute == "emptyDiv" && a %2 == 0){
        emptyDiv.innerHTML = "X";
        output.innerHTML = "O Player Turn";
        a++;
    }else if(attribute == "emptyDiv" && a %2 != 0){
        emptyDiv.innerHTML = "O";
        a++;
    }

       if((div1.innerHTML == "X" && div2.innerHTML == "X" && div3.innerHTML == "X")){
        output.innerHTML = "X Player Win";
        div1.style.color = "rgb(233, 45, 45)";
        div2.style.color = "rgb(233, 45, 45)";
        div3.style.color = "rgb(233, 45, 45)";
        victory = true;
        x++;
        scoreX.innerHTML = x;
        block();
        return;
       }
       else if((div4.innerHTML == "X" && div5.innerHTML == "X" && div6.innerHTML == "X")){
        output.innerHTML = "X Player Win";
        div4.style.color = "rgb(233, 45, 45)";
        div5.style.color = "rgb(233, 45, 45)";
        div6.style.color = "rgb(233, 45, 45)";
        victory = true;
        x++;
        scoreX.innerHTML = x;
        block();
        return;
       }
       else if((div7.innerHTML == "X" && div8.innerHTML == "X" && div9.innerHTML == "X")){
        output.innerHTML = "X Player Win";
        div7.style.color = "rgb(233, 45, 45)";
        div8.style.color = "rgb(233, 45, 45)";
        div9.style.color = "rgb(233, 45, 45)";
        victory = true;
        x++;
        scoreX.innerHTML = x;
        block();
        return;
       }
       else if((div1.innerHTML == "X" && div5.innerHTML == "X" && div9.innerHTML == "X")){
        output.innerHTML = "X Player Win";
        div1.style.color = "rgb(233, 45, 45)";
        div5.style.color = "rgb(233, 45, 45)";
        div9.style.color = "rgb(233, 45, 45)";
        victory = true;
        x++;
        scoreX.innerHTML = x;
        block();
        return;
       }
       else if((div3.innerHTML == "X" && div5.innerHTML == "X" && div7.innerHTML == "X")){
        output.innerHTML = "X Player Win";
        div3.style.color = "rgb(233, 45, 45)";
        div5.style.color = "rgb(233, 45, 45)";
        div7.style.color = "rgb(233, 45, 45)";
        victory = true;
        x++;
        scoreX.innerHTML = x;
        block();
        return;
       }
       else if((div1.innerHTML == "X" && div4.innerHTML == "X" && div7.innerHTML == "X")){
        output.innerHTML = "X Player Win";
        div1.style.color = "rgb(233, 45, 45)";
        div4.style.color = "rgb(233, 45, 45)";
        div7.style.color = "rgb(233, 45, 45)";
        victory = true;
        x++;
        scoreX.innerHTML = x;
        block();
        return;
       }
       else if((div5.innerHTML == "X" && div2.innerHTML == "X" && div8.innerHTML == "X")){
        output.innerHTML = "X Player Win";
        div5.style.color = "rgb(233, 45, 45)";
        div2.style.color = "rgb(233, 45, 45)";
        div8.style.color = "rgb(233, 45, 45)";
        victory = true;
        x++;
        scoreX.innerHTML = x;
        block();
        return;
       }
       else if((div6.innerHTML == "X" && div9.innerHTML == "X" && div3.innerHTML == "X")){
        output.innerHTML = "X Player Win";
        div6.style.color = "rgb(233, 45, 45)";
        div3.style.color = "rgb(233, 45, 45)";
        div9.style.color = "rgb(233, 45, 45)";
        victory = true;
        x++;
        scoreX.innerHTML = x;
        block();
        return;
       } 
       

       
       if((div1.innerHTML == "O" && div2.innerHTML == "O" && div3.innerHTML == "O")){
        output.innerHTML = "O Player Win";
        div1.style.color = "rgb(233, 45, 45)";
        div2.style.color = "rgb(233, 45, 45)";
        div3.style.color = "rgb(233, 45, 45)";
        victory = true;
        o++;
        scoreO.innerHTML = o;
        block();
        return;
       }
       else if((div4.innerHTML == "O" && div5.innerHTML == "O" && div6.innerHTML == "O")){
        output.innerHTML = "O Player Win";
        div4.style.color = "rgb(233, 45, 45)";
        div5.style.color = "rgb(233, 45, 45)";
        div6.style.color = "rgb(233, 45, 45)";
        victory = true;
        o++;
        scoreO.innerHTML = o;
        block();
        return;
       }
       else if((div7.innerHTML == "O" && div8.innerHTML == "O" && div9.innerHTML == "O")){
        output.innerHTML = "O Player Win";
        div7.style.color = "rgb(233, 45, 45)";
        div8.style.color = "rgb(233, 45, 45)";
        div9.style.color = "rgb(233, 45, 45)";
        victory = true;
        o++;
        scoreO.innerHTML = o;
        block();
        return;
       }
       else if((div1.innerHTML == "O" && div5.innerHTML == "O" && div9.innerHTML == "O")){
        output.innerHTML = "O Player Win";
        div1.style.color = "rgb(233, 45, 45)";
        div5.style.color = "rgb(233, 45, 45)";
        div9.style.color = "rgb(233, 45, 45)";
        victory = true;
        o++;
        scoreO.innerHTML = o;
        block();
        return;
       }
       else if((div3.innerHTML == "O" && div5.innerHTML == "O" && div7.innerHTML == "O")){
        output.innerHTML = "O Player Win";
        div3.style.color = "rgb(233, 45, 45)";
        div5.style.color = "rgb(233, 45, 45)";
        div7.style.color = "rgb(233, 45, 45)";
        victory = true;
        o++;
        scoreO.innerHTML = o;
        block();
        return;
       }
       else if((div1.innerHTML == "O" && div4.innerHTML == "O" && div7.innerHTML == "O")){
        output.innerHTML = "O Player Win";
        div1.style.color = "rgb(233, 45, 45)";
        div4.style.color = "rgb(233, 45, 45)";
        div7.style.color = "rgb(233, 45, 45)";
        victory = true;
        o++;
        scoreO.innerHTML = o;
        block();
        return;
       }
       else if((div5.innerHTML == "O" && div2.innerHTML == "O" && div8.innerHTML == "O")){
        output.innerHTML = "O Player Win";
        div5.style.color = "rgb(233, 45, 45)";
        div2.style.color = "rgb(233, 45, 45)";
        div8.style.color = "rgb(233, 45, 45)";
        victory = true;
        o++;
        scoreO.innerHTML = o;
        block();
        return;
       }
       else if((div6.innerHTML == "O" && div9.innerHTML == "O" && div3.innerHTML == "O")){
        output.innerHTML = "O Player Win";
        div6.style.color = "rgb(233, 45, 45)";
        div9.style.color = "rgb(233, 45, 45)";
        div3.style.color = "rgb(233, 45, 45)";
        victory = true;
        o++;
        scoreO.innerHTML = o;
        block();
        return;
       }

       

       if(a == 9){
        output.innerHTML = "Match Tie";
        img1.src  = "images/tiegame.jpg" ;  
        img2.src  = "images/tiegame.jpg" ; 
        button.style.display = "block"; 
        return;
       }

       function block(){
        // img.style.display = "block";
        // img.style.transition = "all 3s"

          img.style.display = "block";
          img1.src  = "images/winner.jpg" ;  
          img2.src  = "images/winner.jpg" ; 
          button.style.display = "block";
        //   console.log(button)
    }
}
// console.log(commonDiv);

function restart(){
    // location.reload();

    for(i = 0; i < commonDiv.length; i++){
        commonDiv[i].innerHTML = "";
        commonDiv[i].style.color = "rgb(88,105,25)";
    }
    a = 0;
    victory = false;
    button.style.display = "none";
    img.style.display = "none";
}