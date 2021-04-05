import React from 'react'
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

const Navbar = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);
    
    const logout = () => {
        dispatch({type: 'LOGOUT'})
        history.push('/');
        setUser(null);
    }

    

    useEffect(() =>{
        const token = user?.token;

        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp* 1000 < new Date().getTime()) logout();
        }


        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location] );
    

    return (
        <header className="flex p-4  mb-4 mx-4 border-b-4 rounded border-ice bg-yell text-pinkk">
                 
                 <Link  to="/">
                     <h1 className="sm:ml-4 text-2xl sm:text-6xl font-sans italic font-semibold " > Kecipe </h1>
                 </Link>

                 <section className="ml-auto">
                     {user ? (
                         <Link className="flex" to="/Profile">

                             {user.result.imageUrl ?
                             <img alt={user.result.name} src={user?.result?.imageUrl} className="w-4 hidden sm:block sm:w-12 lg:w-24" />
                            : <h2 className="hidden sm:block rounded-full py-6 px-8 text-xl bg-ice flex items-center justify-center...">{user?.result.name.charAt(0)}</h2>}
                             <h1 className="mx-4 mt-auto text-sm sm:text-md italic text-pinkk font-bold">{user.result.name}</h1>
                             <button className="py-1 px-2 bg-ice text-lg lg:text-2xl italic text-pinkk font-bold rounded-lg " onClick={logout}>log out</button>
                         </Link>
                     ):(
                        <Link className="py-2 px-4 bg-ice text-lg lg:text-2xl italic text-pinkk font-bold rounded-lg" to="/auth">log in</Link>

                     )}
                 </section>
            </header>
    )
}

export default Navbar
