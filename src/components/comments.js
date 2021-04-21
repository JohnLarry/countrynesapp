import React, {useState, useEffect}  from "react";
import { Image} from "react-bootstrap";
import { useForm } from "react-hook-form";
import {firebase} from "../firebaseconfig";

//comment component expoorted to newsdetail component 

const db = firebase.database()
export default function Comments(props){
    const  { register, handleSubmit, reset, formState: { errors }} = useForm();
    const {articleId} = props;
    const [newsComments, setNewsComments] =useState(null);
    
    //retrieve comments from firebase
    //set state using the retrieved comments
    const getComment =()=>{
        const dbRef = db.ref("comments");
     
        var data =dbRef.orderByChild("newsurl").equalTo(articleId).on("value", (snapshot)=>{
            setNewsComments(
                
                JSON.stringify(snapshot.val())
                
                );
    })
   
}
    //post new comment to firebaseconfig
    //reload comment to show updated comments
    //reset data on the form after posting comment to firebase
    const postComment =(data)=>{
   
        const newsCommentRef =  db.ref("comments");
        const newNewsCommentRef = newsCommentRef.push();
        newNewsCommentRef.set(data);
        getComment();
        showComments();
        reset(data.comment);
       
    }
   //create an array from the retrieved object comment to using array.map
   //to loop over the array of comments and display them
    const showComments=()=>{
        var articleComment =[];
        const commentOobject = JSON.parse(newsComments)
        for(const commentId in commentOobject){
            articleComment.push(commentOobject[commentId].comment)}
            return articleComment;

    }
    useEffect(()=>{
        getComment();
    },[newsComments]
    )

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
                <div><p>Anonymous</p>
                <p className="user-comment">{i}</p>
                </div></li>
        })}
           </ul> </div>
      
    );
}