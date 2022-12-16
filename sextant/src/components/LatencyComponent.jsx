import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState
 } from 'react';
export default function LatencyExposer() {
   const [stamp, setStamp] = useState("")
    const exampleSocket = new WebSocket("ws://localhost:55455");
    exampleSocket.onmessage = (event) => {
        console.log(event.data);
        setStamp(Date.now()-event.data)
      }
  return (
    <Card style={{ width: '80vw' , transform: 'translate(10%,25%)'}}>
      <Card.Header style={{backgroundColor:'gainsboro'}}>Network Latency</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Latency: {stamp} miliseconds
          </p>
           <br />
          <footer className="blockquote-footer">
            Developed by Qasim Farooq. Source code available @ <cite title="Source Title">github.com/ka7em/Sextant_Cisco</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
