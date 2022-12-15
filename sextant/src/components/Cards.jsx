import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';


export default function CardComponent(props) {
const [ip, setIP] = useState("")

    useEffect( ()=>{
       axios.get(`${props.url}`,  ).then((res)=>{
        console.log(res.data.ip)
        setIP(res.data.ip)
       })
         }
           ,)


  return (
    <Card style={{ width: '18rem',
     left: '18%', top: '49%', mt:12,
         transform: 'translate(,-50%)'
    }}>
      <Card.Header>Universal IPv4/IPv6 address</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Your Public {props.for} is</ListGroup.Item>
        <ListGroup.Item>{ip}</ListGroup.Item>

      </ListGroup>
    </Card>
  );
}

