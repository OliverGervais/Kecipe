import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar"
import Input from './Input';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom'
import { signin, signup } from "../../actions/auth";


const initialState = {firstName: "", lastName: "", email:"", password:"", confirmPassword:""};

export default function Auth() {
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const [formData, setFormData] = useState(initialState);
    
    const handleShowPassword = () => setShowPassword( (prevShowPassword) => !prevShowPassword);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    
        
      

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            dispatch(signup(formData, history))
            

        }else{
            dispatch(signin(formData, history))

        }

    }
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp );
        setShowPassword(false);
    }

    const googleSuccess = async (res) => {
        const result = res?.profileObj;
        const token = res?.tokenId;

        try {
            dispatch({ type: 'AUTH', data: { result, token } });

            history.push('/');
        } catch (error) {
            console.log(error)
        }


    };
    const googleFailure = (error) => {
        console.log(error)
        console.log("Google Log in ERROR")
    };

    return (
        <div className="bg-oran h-screen">
        
            <Navbar/>
            <main>
                
                    <section className="grid grid-cols-1 bg-yell md:w-1/2 p-4 ml-auto mr-auto">
                        <article className="text-center">
                            
                            <h5 className="text-2xl text-pinkk font-bold mb-2 italic underline"> {isSignUp ? "Sign Up": "Sign In"} </h5>
                            <form onSubmit={handleSubmit} className="flex flex-col">
                                <div>
                                    {
                                        isSignUp && (
                                            <>
                                            <Input name="firstName" label="First Name" type="text" handleChange={handleChange} autoFocus />
                                            <Input name="lastName" label="Last Name" type="text" handleChange={handleChange}  />

                                            </>
                                        )
                                    }
                                    <div className="mb-2">
                                     <Input name="email" label="Email" type="email" handleChange={handleChange}   />
                                     </div>
                                     <div className="flex justify-center">
                                         <div className="ml-12 ">
                                             
                                     <Input  name="password" label="Password" type={showPassword ? "text" : "password"} handleChange={handleChange} handleShowPassword={handleShowPassword} />
                                     
                                     </div>
                                     <button className="bg-ice  px-2 text-sm  text-md text-pinkk font-bold italic" onClick={handleShowPassword}>show</button> 
                                     </div>
                                     { isSignUp && <Input name="confirmPassword" label="confirmPassword" handleChange={handleChange} type="password"/> }
                                </div>
                                <GoogleLogin 
                                clientId = "620205674330-eo8rp54gl41q2c231qft5mrm8s9npm1u.apps.googleusercontent.com"
                                render={(renderProps) => (
                                    <button 
                                    className="py-2 px-4 bg-oran text-lg font-bold italic mt-2"
                                    onClick={renderProps.onClick}
                                    
                                    
                                    >Google Log In</button>
                                )}
                                onSuccess={googleSuccess}
                                onFailure={googleFailure}
                                cookiePolicy="single_host_origin"
                                />
                                <button type="submit" className="bg-ice py-2 px-4 text-lg font-bold italic text-pinkk my-2">{ isSignUp ? 'Sign Up': 'Log In' }</button>
                                <button type="submit" className="bg-ice py-2 px-4 text-lg font-bold italic text-pinkk " onClick={switchMode}> { isSignUp ? 'Got an account? Log in': "Sign Up Here :)" } </button>
                            </form>
                        </article>
                        
                    </section>
                
            </main>

       
        </div>
    )
}