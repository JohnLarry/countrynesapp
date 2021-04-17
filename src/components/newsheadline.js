import { observer } from "mobx-react";
import React from "react";
import { Col, Container, Row, Image} from "react-bootstrap";
import { Link } from "react-router-dom";

export  const NewsHeadline = observer(({store})=>{
    return <div> 
<Container>
{store.articles.map((article,id)=>{
         
    
         return<Row key={id} xs={1}  md={2} className="news_headline">
    <Col className="newsImage" md={4}>
    <Image src={article.urlToImage} alt="article image" thumbnail  /></Col>
    <Col className="news_basic" md={8}>
        <h5 className="news_title"  >{article.title}</h5>
        <div className="">
            <span>{article.source.name}</span> <span>{article.publishedAt}</span>
        </div>
        <div><Link to={`/details/${id}`}>Details...</Link></div>
    </Col>
    

    
  </Row>    })}
</Container>


        

        <button onClick={()=>{
           
            store.loadNewsArticles();  
        
           }
        }>L0ad News</button>
        
        </div>;
});