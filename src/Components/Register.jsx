import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../Firebase/Firebase.init';
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import { AuthContext } from '../Contexts/UserContext';

const auth = getAuth(app)


const Register = () => {


    const {user , userWithEmail} = useContext(AuthContext)
  

   const [errorMessage , setErrorMessage] = useState('')
    const handlerForm = (event)=>{
       event.preventDefault()
        const form =  event.target

        const name = form.name.value
        const email =  form.email.value
        const password =  form.password.value


        userWithEmail(email ,  password)
        .then(result => {
            const userInfo =  result.user 
            form.reset()
        })
        .catch(error => {
            console.log(error)
        })


        



    }


    return (
        <>
            <div className='m-2 '>
                <div className="hero min-h-screen bg-base-200 rounded">
                    <div className="hero-content flex-col ">

                        <h1 className="text-5xl font-bold">Register Now !</h1>
                        <p className="py-6"></p>

                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form 
                            onSubmit={handlerForm}
                            className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Full Name</span>
                                    </label>
                                    <input name='name' type="text" placeholder="name . . " className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email . . " className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password . . " className="input input-bordered" required />
                                    <h2
                                    className=' p-1 text-red-500 text-[10px] font-semibold'
                                    >{errorMessage}</h2>
                                    <label className="label">
                                        <Link to='/login' className="label-text-alt link link-hover">Already have an Account?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div></>
    );
};

export default Register;