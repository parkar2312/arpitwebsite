import React, { useEffect, useState } from 'react'
import { get } from '../services/http.service';
import { Container, Jumbotron, Badge } from 'react-bootstrap';

function QuestionDetail () {
    const [question, setQuestion] = useState({})

    useEffect(() => {
        let  getQ = async () => {

            let getQuestion = get('question1');
            await setQuestion(getQuestion)
        }
        getQ()
    },[])  

    //this is a component for showing details
    const ShowDetails =  ({question}) => {
        return (
            <div>
                <p><span style={{fontSize : "30px", fontWeight : "bold"}}>{question.question}</span> <Badge variant="info">{question.level}</Badge> </p> 
                <p>{question.description}</p>
            </div>
        )
    }

    //this is a component for showing examples
    const QuestionExample = ({example, num}) => {
        return (
            <div>
                <h3>Example {num+1}</h3>
                <Jumbotron style={{padding : "10px"}}>
                    <p><b>Input</b> : {example.input}</p>
                    <p><b>Output</b> : {example.output}</p>
                    <p><b>Explaination</b> : {example.explaination}</p>
                </Jumbotron>
            </div>
        )
    }

    return (
        <Container>
            {<ShowDetails question={question} />}
            {question.examples && question.examples.map((ex, key) => <QuestionExample example={ex} num={key} key={key} /> )}
            <div>
                <b>Constraints : </b>
                <br/>
                {question.constraints && question.constraints.map( (c, key) => <p style={{margin : "0px", marginLeft : "20px" , fontWeight : "bold"}} key={key}>{c}</p> )}
            </div>
        </Container>
    )
}

export default QuestionDetail 
