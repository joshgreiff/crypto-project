async function quizFormHandler(event) {
    event.preventDefault()

    const quiz_name = document.querySelector(".quizname-signup").value.trim()
    const question_text = document.querySelector(".question-one-signup").value.trim()
    const answer_text = document.querySelector(".correct-one-signup").value.trim()
    const answer_text_1 = document.querySelector(".answer-two-signup").value.trim()
    // const answer_text = {
    //     answer_text: document.querySelector(".correct-one-signup").value.trim(),
    //     is_true: true
    // }

    // const answer_text_1 = {
    //     answer_text: document.querySelector(".answer-two-signup").value.trim(),
    //     is_true: false
    // }
    // const answer3 = {
    //     answer_text: document.querySelector(".answer-three-signup"),
    //     is_true: false
    // }
    // const answer4 = {
    //     answer_text: document.querySelector(".answer-four-signup"),
    //     is_true: false
    // }

    // const answer_text = [answer1, answer2, answer3, answer4]



    if (quiz_name && question_text && answer_text && answer_text_1) {

        const response = await fetch('/api/quizzes', {
            method: 'post',
            body: JSON.stringify({
                quiz_name,
                question_text,
                answer_text
            }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.ok) {
            console.log('success');
        } else {
            alert(response.statusText);
        }
    }


}




document.querySelector('.create-quiz-form').addEventListener('submit', quizFormHandler)