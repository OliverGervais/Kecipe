import React from "react";
import Post from "./Post/Post" 
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const PostUser = ({setCurrentId}) => {

    const posts = useSelector((state) => state.posts);
   
    const [search, setSearch] = useState("");
   

    

    
    return(
       


        
        !posts.length ? <div>No recipe</div> : (
            
            <main className="" >
                 <div className="flex mr-4 ml-4 lg:mr-36 lg:ml-36  ">
                 
               
                 
                 
                 <div className=" grid grid-col-1 ">
                 
                 
                 
                     <Link to="/" className=" w-26  my-2 py-4 px-8 bg-ice text-pinkk font-sans text-xl font-bold italic underline">
                     <h1 className="">Search By Title</h1></Link>
                     

                     

                     </div>
                     
            <input
            className="w-full my-2 py-4 px-8 bg-ice text-pinkk font-sans text-xl font-bold italic underline  "
            text="text"
            placeholder="General Search Ex: almonde flour"
            onChange={(event)=>{
                setSearch(event.target.value);
            }}
            />

            </div>

                {posts.filter((post) =>{
                    if (search === ""){
                        return post
                    }else if (post.message.toLowerCase().includes(search.toLowerCase())){
                        return post
                    }
                }).map((post )=>{
                    return(
                   <section key={post._id} >
                       
                       

                       <Post post={post} setCurrentId={setCurrentId}/>


                    
                   </section>
                    );
                })}
            </main>
        )
        
        )
        
};
    

export default PostUser;