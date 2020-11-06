import React from 'react';
import { Container, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import CardActionArea from '@material-ui/core/CardActionArea';



export default function QuestionComponent({question}) {

    return (
      <Container>
          <Card style={{margin : "5px", border : "solid black" ,borderRadius : "10px", backgroundColor: "#312e31", color:"white"}}>
          <CardActionArea component={Link} to="/question-detail" style={{color:"white"}}>
            <Card.Title style={{padding : "20px"}}> <Link to="/question-detail" style={{color:"white"}}>{question.question}</Link> </Card.Title>
            <Card.Body>
              <p>{question.description}</p>
              <b>Asked in</b> <Badge variant="info" style={{textTransform: "capitalize"}}>{question.askedIn.join(", ")}</Badge>
            </Card.Body>
            </CardActionArea> 
          </Card>
      </Container>
    )




}