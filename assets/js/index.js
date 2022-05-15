var firstFormChoiceOne = document.getElementById('programmingLanguage');
var secondFormChoiceTwo = document.getElementById('ifStatementSecondChoice');
var thirdFormChoiceFour = document.getElementById('hyperTextQuizFourth')
var fourthFormChoiceTwo = document.getElementById('dataTypeQuizSecond');
var fifthFormChoiceFour = document.getElementById('alertBoxQuizFourth');


function clickMe(){
    if(firstFormChoiceOne.checked, secondFormChoiceTwo.checked, thirdFormChoiceFour.checked, fourthFormChoiceTwo.checked, fifthFormChoiceFour.checked){
        alert(`You have 100%`);
    }
}

var button = document.getElementById('submitBtn');

button.addEventListener("click", clickMe)





