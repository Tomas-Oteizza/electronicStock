import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";
import Card from 'react-bootstrap/Card';

export default function InfoItem() {
    const [item, setItem] = useState(null);
    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        const itemInfo = store.getItem(params.itemId);
        setItem(itemInfo); 
    }, []);

    if (!item) {
        return <Layout>Item not found</Layout>;
    }

    return (
        <Layout>
            <div className="infoitem">
            <Card style={{ width: '18rem' }}>

                <Card.Img variant="top" src= {item.image}/>

                <Card.Body className="cardbody">
                <Card.Title>
                    {item?.title}
                </Card.Title>
                <Card.Text>
                    {item?.company}
                </Card.Text>
                <Card.Text>
                    {item?.caract}
                </Card.Text>
                <Card.Text>
                    {item?.exist ? "we have stock" : "no stock"}
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
        </Layout>
    );
}


