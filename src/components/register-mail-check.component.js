import React from 'react'
import { Container, Alert } from "react-bootstrap";

export default function RegisterMailCheck({already}) {
    return (
      <Container style={{marginTop : "10px"}}>
        <Alert variant="success">
          {already && already ? <Alert.Heading>Hey, Welcome to the family</Alert.Heading> : null}
          <p>
            {already && already ? "We've sent you a verification email. Please check your email and verify your account." : 
             "You're already a member. Please sign in with your email."}
          </p>
        </Alert>
      </Container>
    )
}
