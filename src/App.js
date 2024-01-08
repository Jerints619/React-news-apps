import React, { useEffect, useState } from 'react'
import News from './News';
import './App.css';


const App = () => {

  let [articles, setArticles] = useState([]);
  let [category, setCategory] = useState("Apple");
  let [date, setDate] = useState("2024-01-07");


  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=${date}&sortBy=popularity&apiKey=2e6f33af050645a5b46f7b561fe6c65b`)



      .then((response) => response.json())
      .then((news) => {
        setArticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log(err)
      })

  }, [category])









  return (

    <>

      <header className='header'>


        <h4 style={{ marginTop: "10px", marginLeft: "3%", color: "white" }} >Upto Date News</h4>



        <input style={{ marginLeft: "40%", marginTop: "7px", width: "25%", height: "75%" }} type="text" onChange={(event) => {

          if (event.target.value !== "") {
            setCategory(event.target.value);
          }
          else {
            setCategory("Apple");
          }

        }} placeholder='search here' />


        {/* date field */}

        <input style={{ marginLeft: "3%", marginTop: "10px", width: "%", height: "60%" }} type="date" onChange={(event) => {

          if (event.target.value !== "") {
            setDate(event.target.value);
          }
          else {
            setDate("2024-01-07");
          }

        }} />

        {/* <button style={{ marginLeft: "5px", marginTop: "7px", width: "7%", height: "70%" }} >search</button> */}




      </header>



      <div className='main'>


        {

          articles.length !== 0 ?
            articles.map((article) => {
              return (
                // <News articles={article} />
                <News article={article} key={article.url} />
              )
            })
            :
            <h4>No news found</h4>

        }







      </div>



    </>
  )
}

export default App;