import React from "react";
import { Link } from "react-router-dom";

export default function Itemview({ item }) {
    return (
        <div>
            <Link to={`/InfoItem/${item.id}`}>
                <img src={item.image} alt={item.title} width="200px" />
                <div>{item.title}</div>
            </Link>
        </div>
    );
}
