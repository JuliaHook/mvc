
// import {Fragment, useState } from "react";
//import React, { Component } from 'react';
import './App.css';
import {NavLink, Outlet } from "react-router-dom";

    function App() {
        // // genomgång övning:
        // const [page, setpage] = useState(0) 
        // const callbackFunction = (setpage) => {
        //      setTotalCount(page + setpage)
        //andra exemplet
      //  const [showArticles, setShowArticles] = useState(false);
      //  const [showJournalists, setShowJournalists] = useState(false);
      //  const [showPictures, setShowPictures] = useState(false);

      //  const toggleArticles = () => {
      //   setShowArticles(!showArticles);
      //  };

      //  const toggleJournalists = () => {
      //    setShowJournalists(!showJournalists);
      //  };

      //  const togglePictures = () => {
      //    setShowPictures(!showPictures);
      //  };

     

        return (
          <div>

          <nav
          
          >
          <div className="buttonContainor">


            <div className="MainNav">
            
            <div>
             <button className="mainButton"><NavLink to="admin/articles" className="nav">Artiklar</NavLink> {" "}</button>
            </div>
            
            {/* <button type="button" className="Button">Artiklar</button> */}
          
            <div>
            <button className="mainButton"><NavLink to="admin/journalists" className="nav">Journalist</NavLink> {" "}</button>
            </div>
            
            {/* <button type="button" className="Button">Journalist</button> */}
          
             <div>
             <button className="mainButton"><NavLink to="admin/images" className="nav">Bilder</NavLink> {" "}</button>
             </div>
             
           {/* <button type="button" className="Button">Bilder</button> */}
          
            

            </div>
           


          </div>
           


          </nav>
         <Outlet />
          </div>



          //andra exemplet
        //  <div>
        //   <button onClick={toggleArticles}>Artiklar</button>
        //   <button onClick={toggleJournalists}>Journalist</button>
        //   <button onClick={togglePictures}>Bilder</button>
        //   {showArticles ? <ArticleComponent /> : null}
        //   {showJournalists ? <JournalistComponent /> : null}
        //   {showPictures ? <PictureComponent /> : null}
        //  </div>

          //genomgång Övning:
        // 
          
        );
  }

  export default App;

