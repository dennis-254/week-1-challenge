marksBtn.addEventListener("click", function(){
    const score = inputMarks.value;
    let gscore; 
    switch(true) {
        case (score <= 100 && score >= 79):
           gscore = 'A';
            break;
        case (score < 79 && score >= 60):
            gscore = 'B';
             break;
        case (score <= 59 && score >= 49):
            gscore = 'C';
             break;
           case (score < 49 && score >= 40):
            gscore = 'D';
             break;
        case (score < 40 && score >= 0):
            gscore = 'E';
            break;

        case (score > 100 || score < 0):
            gscore = 'INVALID SCORE';
            break; 

        default:
          return 'INVALID SCORE';

    }
    gradeScore.textContent = `${gscore} !`;

})