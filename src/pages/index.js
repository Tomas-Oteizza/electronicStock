import Itemview from "../components/itemview"
import Layout from "../components/layout"
import { useAppContext } from "../store/store"

export default function Index() {
    
    const store = useAppContext()
    
    return(
        <Layout>
            {store.items.map((item) => (<Itemview key={item.id} item={item}/>))}
        </Layout>
    )
}