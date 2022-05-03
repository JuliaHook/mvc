import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import ArticlesComponent from './Components/articles-component';
import EditArticle from './Components/editArticle';
import AuthorComponent from './Components/Authors-component';
import EditAuthor from './Components/editAuthor';
import PicturesComponent from './Components/pictures-component';


const baseUrl = "Admin";
const rootElement = document.getElementById('root');

ReactDOM.render(
 <React.StrictMode>
  <BrowserRouter basename={baseUrl}>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route path=":admin/articles" element={<ArticlesComponent />} >
            <Route path=":admin/articles/ArticleId" element={<editArticle />} />
           </Route>
          <Route path=":admin/journalists" element={<AuthorComponent />} >
           <Route path=":admin/journalists/JournalistId" element={<editAuthor />} />
          </Route>
          <Route path=":admin/images" element={<PicturesComponent />} > 
          
          </Route>
          <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
          }
         />

        </Route>
      </Routes>
  
  </BrowserRouter>
</React.StrictMode>,
   rootElement);
  
 
    

