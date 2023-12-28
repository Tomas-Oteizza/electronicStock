import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export default function Itemview({ item }) {
    return (
      <Link to={`/InfoItem/${item.id}`}>
        <Card className="itemview">

          <Card.Img className="itemimg" src={item.image} style={{ width: '50%' }} />

          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
          </Card.Body>

        </Card>
    </Link>
    );
}




   

