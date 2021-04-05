import React, { useState, useEffect } from 'react';

import PostProfile from "../components/Posts/PostProfile";
import Form from "../components/Form/Form";

import Button from '../components/button'

import { getPosts } from "../actions/posts"
import { useDispatch } from "react-redux"
import Navbar from "../components/Navbar/Navbar"

export default function Index() {
    const [currentId, setCurrentId] = useState(null)
    
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getPosts());
    }, [dispatch]);


    

    return (
        <div className="bg-oran  pb-36">
    
            <Navbar/>
            <main>
                <Button/>
                    <section className="">
                    <nav className="sm:w-lg mx-4">
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </nav>
                        <article className="">
                            <PostProfile setCurrentId={setCurrentId}/>
                        </article>
                        
                    </section>
                
            </main>

      
        </div>
    )
}