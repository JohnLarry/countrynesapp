import React, {useState}  from "react";
import { Image,Container, Row , Col} from "react-bootstrap";
import { useForm } from "react-hook-form";
import {firebase} from "../firebaseconfig";


const db = firebase.database()
export default function Comments(props){
    const  { register, handleSubmit, reset, formState: { errors }} = useForm();
    const {articleId} = props;
    const [newsComments, setNewsComments] =useState(null);
    const getComment =()=>{
        const dbRef = db.ref("comments");
     
 var data =dbRef.orderByChild("newsurl").equalTo(articleId).
        on("value", (snapshot)=>{
            setNewsComments(
                
                JSON.stringify(snapshot.val())
                
                );
    })
   
}
    
    const postComment =(data)=>{
   
        const newsCommentRef =  db.ref("comments");
        const newNewsCommentRef = newsCommentRef.push();
        newNewsCommentRef.set(data);
        getComment();
        showComments();
        reset(data.comment);
       
    }

    const showComments=()=>{
        var articleComment =[];
        const commentOobject = JSON.parse(newsComments)
        for(const commentId in commentOobject){
            articleComment.push(commentOobject[commentId].comment)}
            return articleComment;

    }
    return(
        <div>
    
        
            <form onSubmit ={handleSubmit(postComment)}>
            <input className="form-control" {...register("newsurl")} type="hidden" defaultValue={articleId}/>
            <textarea 
                className="form-control comment-text" 
                name = "comment" 
                placeholder="enter your comments" 
                {...register("comment", { required: true })}

            >
                
                </textarea> 
                <p>{errors.comment && <span>This field is required</span>}</p>
           <div><button type="submit" className="comment-btn">Post</button></div> 
            
            </form>
            <h2>Comment(s)</h2>
      <ul>  {showComments().map((i,j)=>{
            return<li key={j} className="comment-li">
                <Image src ="../Profile_avatar_placeholder.png" rounded thumbnail className="profile_avater"/>
                <div><p>Ananymous</p>
                <p className="user-comment">{i}</p>
                </div></li>
        })}
           </ul> </div>
      
    );
}