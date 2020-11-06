import questions from "../dummy/questions.json";





export function get(url) {
    if(url === 'question') {
        return questions;
    }
    else if(url === 'question1'){
        return questions[0];
    }
}