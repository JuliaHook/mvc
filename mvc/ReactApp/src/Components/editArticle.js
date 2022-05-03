import { useParams } from "react-router-dom";

const EditArticle = () => {
    let params = useParams();
    return <p>{params.ArticleId}</p>
}

export default EditArticle;

 //första övningen:
    // const [componentValue, setComponentValue] = useState("");

    // const buttonClickedFunction = () => {
    //     props.callbackProp(string(props.changeValue))
    //     setComponentValue(componentValue + string(props.changeValue));
    // }


    // <Fragment>
    //     //     <div className="container">
    //     //       <div className="article">
    //     //          <ArticleComponent callbackProp={callbackFunction} changeValue="article" />
    //     //        </div>
    //     //        <div className="journalist">
    //     //        <JournalistComponent callbackProp={callbackFunction} changeValue="journalist" />
    //     //         </div>
    //     //         <div className="pictures">
    //     //         <PictureComponent callbackprop={callbackFunction} changeValue="pictures"/>
    //     //        </div>
    //     //     </div>
    //     // </Fragment>