import React from "react";
import {useParams } from "react-router-dom";
import Comments from "./comments";
import {  Container, Row, Image} from "react-bootstrap";
//news details that loads the detail of each article
export default function NewsDetail(props){
  const {store} = props;
  let articleId = useParams().articleId;
  let itemId =parseInt(articleId);
    return( 

        store.articles.length>0?
          <React.Fragment>
            <Container>
   
        <Row> 
          <h2>{store.articles[itemId].title}</h2></Row>
        <Row> 
          <Image src={store.articles[itemId].urlToImage} fluid/>
        </Row>
        <Row>
            <p className="span-margin"> Publisher:{store.articles[itemId].source.name}</p>
            <p className="span-margin"> | Author: {store.articles[itemId].author}</p>
            <p className="span-margin"> | Published: {store.articles[itemId].publishedAt}</p>
        </Row>
        <Row>
          <span>{store.articles[itemId].content}</span>
          <a href ={store.articles[itemId].url} target="_blank" rel="noopener noreferrer" >read more </a>
        </Row>
        
        
     
    
      <Comments articleId ={store.articles[itemId].url}/>    </Container> </React.Fragment>:"Reload or check your network"
   
      );

 
}