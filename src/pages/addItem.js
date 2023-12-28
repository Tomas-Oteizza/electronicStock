import { useState } from "react";
import { useAppContext } from "../store/store";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [image, setImage] = useState('');
    const [caract, setCaract] = useState('');
    const [exist, setExist] = useState(false);

    const store = useAppContext()
    const navigate = useNavigate()

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        switch (name) {
            case "title":
                setTitle(value);
                break;

            case "company":
                setCompany(value);
                break;

            case "caract":
                setCaract(value);
                break;

            case "exist":
                setExist(event.target.checked);
                break;

            default:
        }
    }

    function handleChangeFile(event) {
        const element = event.target;
        const file = element.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = function() {
            setImage(reader.result.toString());
        };
    }

    function handleSubmit(event) {
        event.preventDefault();

        const newItem = {
            id: crypto.randomUUID(),
            title,
            company,
            image,
            caract,
            exist,
        };

        store.createItem(newItem)
        navigate("/")
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}> 
                <div>
                    <div>title</div>
                    <input type="text" name="title" onChange={handleChange} value={title}  />
                </div>

                <div>
                    <div>company</div>
                    <input type="text" name="company" onChange={handleChange} value={company}  />
                </div>

                <div>
                    <div>image</div>
                    <input type="file" name="image" onChange={handleChangeFile}  />
                </div>
                <div>{!!image ? <img src={image} width="200px" alt="Preview" /> : ''}</div>

                <div>
                    <div>caract</div>
                    <input type="text" name="caract" onChange={handleChange} value={caract}  />
                </div>

                <div>
                    <div>Stock</div>
                    <input type="checkbox" name="exist" onChange={handleChange} value={exist}  />
                </div>

                <input type="submit" value="New Item" />
            </form>
        </Layout>
    );
}
