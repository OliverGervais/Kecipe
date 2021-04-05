import React, { useState, useEffect } from "react";

import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const user = JSON.parse(localStorage.getItem('profile'));


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        title:"",
        message:"",
        tags:"",
        selectedFile:""
    });

   



    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId): null);

    
    
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    },[post] )


    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,{...postData,name:user?.result?.name,email:user?.result?.email}));
            
            clear()
            
        }else{
            dispatch(createPost({...postData,name:user?.result?.name,email:user?.result?.email}));
            
            clear()
            

        }

        

    };

    const clear=() =>{
        setCurrentId(null);
        setPostData({
            title:"",
            message:"",
            tags:"",
            selectedFile:""
        });

    };

    const [makeRecipe,setMakeRecipe] = useState(false);


    
    
    return(
        <main>
            <div className="lg:mr-32 lg:ml-32 xl:mr-64 xl:ml-64 ">
            <button 
            className=" w-full my-4 py-4 px-8 bg-ice text-pinkk font-sans text-xl font-bold italic underline "
            type="button"
                onClick={()=> setMakeRecipe(!makeRecipe)}
            >   {makeRecipe? <h1>Hide Recipe Editer</h1>: <h1>Make New Recipe</h1>}</button>
            </div>
            { makeRecipe ? 
            <form autoComplete="off"  onSubmit={handleSubmit} className=" p-4 bg-yell border-2 border-ice rounded">
                <h1 className="text-center text-xl font-bold text-pinkk italic underline tracking-wider mb-2">
                    {currentId ? 'Edit' : 'Create'} a Rescipe
                </h1>
                <div className=" grid grid-flow-col grid-cols-1 grid-rows-5"  >
                
                <input
                className="row-start-2 m-2 rounded px-2"
                type="text" 
                name="title" 
                placeholder="Title"   
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value})}
                />    
                
                <input
                className="row-start-3 m-2 rounded px-2"
                type="text" 
                name="tags" 
                placeholder="Tags"  
                value={postData.tags}
                onChange={(e) => setPostData({ ...postData, tags: e.target.value})}
                />    
                <input
                className="row-start-4 m-2  px-2 bg-transparent border-t-2  border-pinkk"
                type="text" 
                name="selectedFile" 
                value={postData.selectedFile}
                onChange={(e) => setPostData({ ...postData, selectedFile: e.target.value})}
                />  
                
                <div  className="row-start-5 m-2 ">
                    <FileBase
                    type="file"
                    multiple={false}
                    onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                
                </div>  
                </div>
                <div className=" grid grid-flow-col grid-cols-1">
                <textarea
                type="text"
                className="row-start-3 m-2 rounded px-2"
                rows="4" 
                cols="50"
                name="message" 
                placeholder="Message"   
                value={postData.message}
                onChange={(e) => setPostData({ ...postData, message: e.target.value})}
                />    
                </div>
                <div className="border-t-2 p-2 border-ice grid grid-flow-col grid-cols-2 ">
                <button type="submit" className="bg-ice mx-4 px-4 py-2 rounded col-start-1"  >Submit</button>
                <button   onClick={clear} className="bg-ice mx-4 px-4 py-2 rounded col-start-2" >Clear</button>
                </div>
            </form>
            :null}
        </main>
        )
};

export default Form;