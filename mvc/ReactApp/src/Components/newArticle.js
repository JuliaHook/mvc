import { useParams } from "react-router-dom";

const NewArticle = () => {
    let params = useParams();
    return <p>Hej {params.ArticleId}</p>
}

export default NewArticle;