import React from "react";
import { useState } from 'react';



import moment from "moment";
import { useDispatch }  from 'react-redux';
import {deletePost, likePost} from '../../../actions/posts';

const Post = ({post, setCurrentId}) => {
const user = JSON.parse(localStorage.getItem('profile'));

const dispatch = useDispatch();

const [ showPost, setShowPost] = useState(false);

const Likes = () => {
    if (post.likes != null) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <> {post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <>{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Like'}</>
        );
    }
    return <>Like</>;
}



    return(
        <main className="bg-yell border-2 border-ice rounded m-4">
            <div className="flex border-b-2">
                
            
            <img src={post.selectedFile} alt={post.title} className=" h-44 w-44 md:w-64 md:h-64  " />

            {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator)&&(
            <button
            className="mb-auto font-sans text-pinkk  text-xs sm:text-sm md:text-xl font-bold italic underline  ml-auto mr-auto md:mr-4  bg-ice py-1 px-2 rounded"
            onClick={()=>setCurrentId(post._id)}>
                    <h1>Edit</h1>
                </button>
            )}

            </div>
            <div className="flex" >
                <h1 className="text-pinkk italic underline ml-auto text-sm font-sans font-semibold" >Type Of Food: {post.tags}</h1>
                <h2 className="text-pinkk italic underline ml-auto mr-12 text-sm font-sans font-semibold">{moment(post.createdAt).fromNow()}</h2>

            </div>
            
            <div className="classes.details">
            
            <article>
            <h2 className="text-lg md:text-2xl font-sans text-pinkk  font-bold italic underline  px-4 py-2 rounded- mr-12 border-b-4 border-ice tracking-wide italic ml-12 font-sans font-semibold">{post.title}</h2>
            { showPost ?
            <h3 className="text-md md:text-xl ml-12 mb-8 mr-12 tracking-wide text-left font-sans font-bold  font-sans leading-relaxed	 text-redd italic" 
            style={{ whiteSpace: 'pre-wrap' }}
            > {post.message} </h3> :null
            }
            <button 
            className="text-md md:text-xl my-4 py-4 px-8 bg-ice text-pinkk font-sans  font-bold italic underline "
            type="button"
            onClick={()=> setShowPost(!showPost)}
            > {showPost? <h1>Hide Post</h1>: <h1>Show Post</h1>}</button>

            </article>
            <article className="flex" >



            <h1 className="font-sans text-pinkk  text-xs sm:text-sm md:text-xl font-bold italic underline ml-auto mr-auto bg-ice py-1 px-2 rounded"
>
                {post.email}</h1>




                <button
                className="font-sans text-pinkk text-md md:text-xl font-bold italic underline ml-auto mr-auto bg-ice py-1 px-2 rounded"
                disabled={!user?.result}
                onClick={()=> dispatch(likePost(post._id)) } >
                    <Likes className=" text-xs sm:text-sm md:text-xl"/>
                </button>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator)&&(
                <button
                className="font-sans text-pinkk text-xs sm:text-sm md:text-xl font-bold italic underline ml-auto mr-auto bg-ice py-1 px-2 rounded"
                onClick={()=> dispatch(deletePost(post._id))}> <h1>Delete</h1>
                </button>



                )}
                   
            </article>
            
            </div>
        </main>
        )
};

export default Post;