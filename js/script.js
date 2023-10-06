let switchBtn = document.querySelector(".randomBtn");
let randomball = document.querySelectorAll(".randomBall");
let randomLink = document.getElementById("randomTxt")
let switchClose = document.querySelector(".switchClose");


let letterCont = [

    ["#Web", "Website"],
    ["#Rea", "React"],
    ["#JS" , "Javascript"]
]
console.log(letterCont.length); //3


function randomBox(){

    let randomarry = [];
        let random = Math.floor(Math.random() * letterCont.length);
        console.log(random);

    if(randomarry.indexOf(random) === -1){

        var random_arry = randomLink.innerHTML = letterCont[random][1];
        randomLink.setAttribute("href" , letterCont[random][0]);
        randomarry.push(random);
        console.log(randomarry);

    }else{

    }

};


function switchClick(){

    switchBtn.addEventListener("click" , () => {


        switchBtn.classList.add("switchClose");
        switchBtn.innerHTML = ``;
        randomball[0].classList.add("moving");
        randomball[2].classList.add("moving");
    
        setTimeout(()=> {
    
            randomball[0].classList.add("close");
            randomball[2].classList.add("close");
            randomball[0].classList.remove("moving");
            randomball[2].classList.remove("moving");
            randomBox();
            switchBtn.innerHTML = `Again`;
    
        },1000);
    
    });



}

switchClick();

