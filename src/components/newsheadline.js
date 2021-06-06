import { observer } from "mobx-react";
import React,{useEffect} from "react";
import { Col, Container, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";
//NewsHeadline loads the artiles headline 
//using selected data from the store
export  const NewsHeadline = observer(({store})=>{
useEffect(()=>{
    store.loadNewsArticles(); 
}
)
    return <div> {store.articles.length===0?"Loading...":""}
<Container>
{store.articles.map((article,id)=>{
         
    
         return<Row key={id} xs={1}  md={2} className="news_headline">
    <Col className="newsImage" md={4}>
    <Image src={article.image} alt="article image" thumbnail  /></Col>
    <Col className="news_basic" md={8}>
        <h5 className="news_title"  >{article.title}</h5>
        <div className="article_profile">
            <span>{article.source}</span> <span>{article.published_at}</span>
        </div>
        <div classNam="articledetails"><Link to={`/details/${id}`}>Details...</Link></div>
    </Col>
    

     
  </Row>    })}
  <button onClick={()=>{
           
           store.loadNewsArticles();  
       
          }
       }>Refresh</button>
</Container>


        

        
        
        </div>;
});
