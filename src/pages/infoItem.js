import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useEffect, useState } from "react";
import { useAppContext } from "../store/store";

export default function InfoItem() {
    const [item, setItem] = useState(null);
    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        const itemInfo = store.getItem(params.itemId);
        setItem(itemInfo); // Corregido aquí
    }, []);

    if (!item) {
        return <Layout>Item not found</Layout>;
    }

    return (
        <Layout>
            <h2>{item?.title}</h2>
            <div>{item?.image ? <img src={item.image} width="200px" alt={item.title} /> : ""}</div>
            <div>{item?.company}</div>
            <div>{item?.caract}</div>
            <div>{item?.exist ? "we have stock" : "no stock"}</div>
        </Layout>
    );
}
