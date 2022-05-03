import { useParams } from "react-router-dom";


const EditAuthor = () => {
    
    

    let params = useParams();
    return <p>hej journalist! {params.authorId}</p>
};

export default EditAuthor;
