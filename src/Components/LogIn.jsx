import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import app from '../Firebase/Firebase.init';
import UserContext, { AuthContext } from '../Contexts/UserContext';

const auth = getAuth(app)

const LogIn = () => {


    const { user, userWithEmail , logIn } = useContext(AuthContext)

    //console.log(user, userWithEmail)



    const [IsSuccess, setIsSuccess] = useState('')

    const navigate =  useNavigate()




    const handlerLogIn = (event) => {
        event.preventDefault()

        const form = event.target

        const email = form.email.value
        const password = form.password.value
        

        logIn (email , password).then(res  => {
            const userInfo = res.user
            console.log(userInfo)
            form.reset()
            setIsSuccess("Successfully Log In . . . ")

            navigate('/home')
        }).catch(error => {
          setIsSuccess(error.message)
        })
      

    }


    return (

        <div className='m-2 '>
            <div className="hero min-h-screen bg-base-200 rounded">
                <div className="hero-content flex-col ">

                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6"></p>

                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handlerLogIn}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <h2 className='p-1 text-[10px] font-s'>{IsSuccess}</h2>
                                <label className="label">

                                    <Link to='/register' className="label-text-alt link link-hover">Don't register?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;