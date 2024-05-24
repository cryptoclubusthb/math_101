function calculateScore(form, questionName) {
    let score = 0;
    const questions = form.elements[questionName];

    for (const question of questions) {
        if (question.checked) {
            score += parseInt(question.value);
        }
    }

    return score;
}

function calculateFinalScore() {
    const form = document.getElementById('quiz-form');

    const algebreScore = calculateScore(form, 'q1-algebre');
    const analyseScore = calculateScore(form, 'q1-analyse');
    const probabiliteScore = calculateScore(form, 'q1-probabilite');

    const totalScore = algebreScore + analyseScore + probabiliteScore;

    const resultDiv = document.getElementById('result-final');
    resultDiv.textContent = `Votre score final est: ${totalScore} (Algèbre: ${algebreScore}, Analyse: ${analyseScore}, Probabilité: ${probabiliteScore})`;
}
