
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import  axios  from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { FaPen,FaTrash } from "react-icons/fa";
import './article.css';

const ArticlesComponent = () => {


    const [articles, setArticles] = useState([]);

    useEffect(()=>{
    
      
      axios.get("https://localhost:7208/api/articles")
      .then((response) => {
        let articles = response.data;
        setArticles(articles)
      });
    }, [])
     
    // axios.delete(api/articles);
  
      return(

       <Fragment>
         <div className="outer">
           <nav>

           
          <header className="article-header">
          
          <h2>Artiklar</h2>
          
          <div className="skapabtn">
          <button className='skapaButton'><Link to="articles/new" className="skapa">Skapa</Link></button>
          </div>
          
          </header>
          
           

              {articles.map((article) => {
                 return (

                  <table>
                    <tr>
                    <td className='list' keys={article.id}>{article.title}</td>
                    <td> <button className='icon'><Link to={article.id}><FaPen></FaPen></Link></button></td>
                    <td> <button className="icon"><FaTrash></FaTrash></button></td>
                    </tr>
                    </table>
        )}

        /* <button onClick={()=> {DeleteArticle(article.id)}}><FaTrash></FaTrash></button> */
               

      
      )};
      </nav>

  <Outlet />
   </div>
  </Fragment>
       
      );


};

export default ArticlesComponent;