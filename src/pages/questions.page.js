import React from 'react'
import QuestionComponent from "../components/question.component";
import { get } from "../services/http.service";
import SignInscreen from './loginpage';

class Questions extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            questions : []
        }
    }

    async componentDidMount(){
        let getQuestion = get('question');
        await this.setState({questions : getQuestion})
    }
    

    render(){

        return (
            <div>
                {
                    this.state.questions.map((question, index) => (
                        <QuestionComponent key={index}  question={question}/>
                    ))
                }
            </div>
        )

    }



}

export default Questions;