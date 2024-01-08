import React from "react";


const News = ({article}) => {
    // console.log(props)
    return (

        

        <div className='news'>

            <div className="news-img">

                {
                    article.urlToImage!==null ? 
                    <img src={article.urlToImage} /> :
                    <img src="https://imgs.search.brave.com/B9mB7QFPGgzBNg6rpiv9rHhVdP5-qOxhuHlrhTIeSvU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0Lzk5LzkzLzMx/LzM2MF9GXzQ5OTkz/MzExN19aQVVCZnYz/UDFIRU9zWkRybmti/TkN0NGpjM0FvZEFy/bC5qcGc" />

                }
                
                {/* <img src={article.urlToImage} alt="" /> */}
                

            </div>  <br />

            <div className="news-content">
                <h5>{article.title}</h5>
                <p style={{color:"#006400"}}>{article.description?.substring(0,100).concat("...")} <a style={{textDecoration:"none"}} href={article.url} target="_blank">Read More</a></p>
                {/* <a href="#">Read More</a> */}
                <div className="author">
                    <p style={{color:"red"}}>Author:{article.author}</p>
                    <p style={{color:"#800000"}}>{article.source.name}</p>
                </div>
            </div>


        </div> 

    );
};

export default News;
