import React from "react";
import Post from "./Post/Post" 
import { useSelector } from "react-redux"


const PostProfile = ({setCurrentId}) => {
    const user = JSON.parse(localStorage.getItem('profile'));

    const posts = useSelector((state) => state.posts);
   
    
   

    

    
    return(
       


        
        !posts.length ? <div>No recipe</div> : (
            
            <main className="" >
                 <div className="flex mr-4 ml-4 lg:mr-36 lg:ml-36  ">
                 
               
                 
                 
                 
           
            </div>

            { posts.filter((post) => post.creator === (user?.result?.googleId || user?.result?._id))
            .map((post )=>{
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
    

export default PostProfile;