// Ai 
var ai=Math.floor(Math.random()*3)+1;
var ai_score;

function ai_value(){
    var ai=Math.floor(Math.random()*3)+1;

    if(ai==1){
        document.querySelector(".ai_img").setAttribute("src","./images/Rrock.png");
        ai_score=1;
    }

    else if(ai==2){
        document.querySelector(".ai_img").setAttribute("src","./images/Rpaper.png");
        ai_score=2;
    }
    else{
        document.querySelector(".ai_img").setAttribute("src","./images/Rscissors.png");
        ai_score=3;
    }
}


// Player
var p_score=1;

// mouse click
document.querySelectorAll(".btn")[0].addEventListener("click",p_value1);
function p_value1(){
    document.querySelector(".player_img").setAttribute("src","./images/rock.png");
    p_score=1;
    ai_value();
    score();
}

document.querySelectorAll(".btn")[1].addEventListener("click",p_value2);
function p_value2(){
    document.querySelector(".player_img").setAttribute("src","./images/paper.png");
    p_score=2;
    ai_value();
    score();
}

document.querySelectorAll(".btn")[2].addEventListener("click",p_value3);
function p_value3(){
    document.querySelector(".player_img").setAttribute("src","./images/scissors.png");
    p_score=3;
    ai_value();
    score();
}

// button down
document.addEventListener("keydown",p_key);
function p_key(){
    if(event.key == 1){
        document.querySelector(".player_img").setAttribute("src","./images/rock.png");
        p_score=1;
        ai_value();
        score();
    }
    else if(event.key == 2){
        document.querySelector(".player_img").setAttribute("src","./images/paper.png");
        p_score=2;
        ai_value();
        score();
    }
    else if(event.key==3){
        document.querySelector(".player_img").setAttribute("src","./images/scissors.png");
        p_score=3;
        ai_value();
        score();
    }
}


//Score
function score(){
    if(p_score==ai_score){ //draw
        document.querySelector("h1").innerHTML="Draw!";
    }
    else if(p_score<ai_score){
        if(ai_score-p_score==1){
            document.querySelector("h1").innerHTML="Ai Wins!";
        }
        else{
            document.querySelector("h1").innerHTML="You Win!";
        }
    }
    else{
        if(p_score-ai_score==1){
            document.querySelector("h1").innerHTML="You Win!";
        }
        else{
            document.querySelector("h1").innerHTML="Ai Wins!";
        }
    }
}