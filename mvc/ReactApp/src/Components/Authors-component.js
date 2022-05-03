import './author.css';
import { useState } from 'react';
import { useEffect } from 'react';
import  axios  from 'axios';
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import { FaPen, FaTrash } from "react-icons/fa";
import { Fragment } from "react";

const AuthorComponent = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
      axios.get("https://localhost:7208/api/authors")
      .then((response) => {
        let authors = response.data;
        setAuthors(authors)
      });
    }, [])

    return(
        <Fragment>
          <div className="outer">
            <nav>
              
           <header className="article-header">

              <h2>Journalist</h2>

              <div className="skapabtn">
               <button className="skapaButton"><Link to="/journalists/new" className="skapa">Skapa</Link></button>
              </div>
           </header>
 
           
 
               {authors.map((author) => {
                  return (
                   <table>
                     <tr>
                     <td className='list' keys={author.id}>{author.firstName}{author.lastName}</td>
                     <td> <button className='icon'><Link to={author.id}><FaPen></FaPen></Link></button></td>
                     <td><button className='icon'><FaTrash></FaTrash></button></td>
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
 
        
     
    
    //första övningen
    // <div>
    //     <button Onclick={props.callbackProp}>Journalist</button>
    // </div>;
    


export default AuthorComponent;