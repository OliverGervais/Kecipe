import React from "react";
import Post from "./Post/Post" 
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";


const Posts = ({setCurrentId}) => {

    const posts = useSelector((state) => state.posts);
    const [search, setSearch] = useState("");

    

    
    return(
       


        
        !posts.length ? <div>No recipe</div> : (
            
            <main  >
                <div className="flex mr-4 ml-4 lg:mr-36 lg:ml-36 ">
                
               
                 
                 
                 
                 <div className=" grid grid-col-1 ">
                 
                 
                 <Link to="/Gsearch" className=" w-26  my-2 py-4 px-8 bg-ice text-pinkk font-sans text-xl font-bold italic underline">
                     <h1 className="">General Search</h1></Link>
                    
                     

                     

                     </div>
                     

            <input
            className="w-full my-2 py-4 px-8 bg-ice text-pinkk font-sans text-xl font-bold italic underline  "
            text="text"
            placeholder="Search By Title"
            onChange={(event)=>{
                setSearch(event.target.value);
            }}
            />
            </div>

            
            
                {posts.filter((post) =>{
                    if (search === ""){
                        return post
                    }else if (post.title.toLowerCase().includes(search.toLowerCase())){
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
    

export default Posts;