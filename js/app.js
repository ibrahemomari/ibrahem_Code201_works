'use strict';
let Qus, Qus1, Qus2, Qus3, Qus4, Qus5, Qus6, Qus7, conf1, conf2, yesCount = 0, noCount = 0, qus6Count = 0, qus7Count = 0, score = 0;

let footballTeams = ['LIVERPOOL', 'BARCELONA', 'AC MILAN', 'JUVENTUS', 'MAN CITY'];

alert("Welcome To My Page ");

Qus = prompt("What your name please");

conf1 = confirm('Welcome agian ' + Qus + ' , are you ready to answes a few questions? ');


// this function receive a what user input , and check the input if is valid
function theGuessingGames(answer) {
    if (answer.toUpperCase() === 'YES' || answer.toUpperCase() === 'Y') {
        yesCount++;
        alert('correct answer ♥');
        score++;
    }
    else if (answer.toUpperCase() === 'NO' || answer.toUpperCase() === 'N') {
        noCount++;
        alert('Wrong answer ☻');
    }
    else {
        alert('invalid answer');
    }
}

switch (conf1) {
    case true:
        {
            conf2 = confirm("coooool , let's started (*^*), please use answer with Just yes or no ");


            Qus1 = prompt('Do you Know who am i ? (yes or no)');
            theGuessingGames(Qus1);

            Qus2 = prompt('Are im a gamer or a programmer? (yes or no)');
            theGuessingGames(Qus2);

            Qus3 = prompt('Do you Know if i like a pizza ? (yes or no)');

            theGuessingGames(Qus3);
            Qus4 = prompt('Do you know if my favorite color is Black ? (yes or no)');
            theGuessingGames(Qus4);

            Qus5 = prompt('Do you ask your self why are you here ?(yes or no)');
            theGuessingGames(Qus5);

            console.log(yesCount);
            console.log(noCount);
            break;



        }
    case false:
        {
            alert('Ok , you can continue browsing !!')
        }


}

function myHeight() {
    for (let i = 0; i < 4; i++) {
        Qus6 = parseInt(prompt("Ok , now can you gusse Guess how tall is my height? "));

        if (Qus6 === 176) {
            alert("You are incredible , thats correct answer ");
            score++;
            break;

        }
        else if (Qus6 < 176) {
            alert("your answer(" + Qus6 + ') its less than correct answer');
            qus6Count++;
        }
        else {
            alert("your answer(" + Qus6 + ') its more than correct answer');
            qus6Count++;
        }

    }

    if (qus6Count == 4) {
        alert('Sorry, your chances are exhausted.\n The correct answer is (176) cm');
    }
}

myHeight();



let status;

function soccerTeams(FT)
{
    for (let i = 0; i < 6; i++) {
        Qus6 = (prompt("Ok , now can you gusseWho are the soccer teams that I encourage? "));
    
        for (let j = 0; j < FT.length; j++) {
            if (FT[j] == Qus6.toUpperCase()) {
                alert("You are incredible , thats correct answer ");
                score++;
                status = true;
                break;
    
            }
        }
    
        if (status) {
    
            break;
        }

    
    }
    
    return FT;
}
alert('My soccer teams that I encourage is \n' + soccerTeams(footballTeams));



function result (){
    alert('your score is ( ' + score + ' ) ,Great Job')

    document.write('<h3>You answred ' + yesCount + ' questions with yes ' + '</h3>');
    document.write('<h3>You answred ' + noCount + ' questions with no ' + '</h3>');
}

result();