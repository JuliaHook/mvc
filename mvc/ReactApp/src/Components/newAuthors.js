import { useParams } from "react-router-dom";

const NewAuthor = () => {
    let params = useParams();
    return <p>Hej {params.ArticleId}</p>
}

export default NewAuthor;