function checkTest() {
    let questions = document.getElementsByTagName("article");
    let answers = 0;
    for (let i = 0; i < questions.length; i++) {
        let buttons = questions[i].getElementsByTagName("input");
        for (let index = 0; index < buttons.length; index++) {
            if (buttons[index].checked) {
                answers++;
                break;
            } 
        }
    }
    if (answers !== questions.length){
        document.getElementsByClassName("warning")[0].style.display='block';
        window.scrollTo(0,document.body.scrollHeight);
    }
    else {
        let result = checkRightAnswer(questions);
        let resultPoints = document.getElementsByClassName("results")[0];
        let resultLevel = document.getElementsByClassName("results")[1];
        let level = "";
        let message;
        switch (true) {
            case (result <= 20):
                level = "Beginner и Elementary (A1)";
                message = "Все с чего-то начинают!";
                break;
            case (result <= 40):
                level = "Pre-Intermediate (A2)";
                message = "Хорошая работа!";
                break;
            case (result <= 60):
                level = "Intermediate (B1)";
                message = "Отличный результат!";
                break;
            case (result <= 80):
                level = "Upper-Intermediate (B2)";
                message = "У вас прекрасные знания языка!";
                break;
            case (result <= 99):
                level = "Advanced (C1)";
                message = "Вы прекрасно знаете яык!";
                break;
            case (result === 100):
                level = "Proficiency (C2)";
                message = "А вы случайно не носитель английского?";
                break;
            default:
                break;      
        }
        resultPoints.getElementsByTagName("span")[0].innerHTML = result + "%";
        resultPoints.getElementsByTagName("span")[1].innerHTML = level;
        resultPoints.getElementsByTagName("span")[2].innerHTML = message;
        document.getElementsByClassName("warning")[0].style.display='none';
        resultPoints.style.display='block';
        window.scrollTo(0,document.body.scrollHeight);
    }
}
function checkRightAnswer(questions) {
    const rightAnswers = [4, 4, 3, 1, 3, 1, 2, 4, 2, 4, 4, 3, 4, 1, 3, 2, 1, 4, 1, 4, 3, 4, 2, 2, 3];
    let points = 0;
    for (let i = 0; i < questions.length; i++) {
        if (document.getElementById("q" + (i + 1) + "-" + rightAnswers[i]).checked) {
            points++;
        }
    } 
    points = Math.floor(points / questions.length * 100);
    return points;
}