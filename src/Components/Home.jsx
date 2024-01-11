import React, { useContext, useState } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const Home = () => {


    const { user } = useContext(AuthContext)

    const [open , setOpen] =  useState(true)


    const handlerOpen  = () => {
        setOpen(!open)
        user.email =''
    }

    console.log(open)
    return (

        <div className='text-center mt-5'>

            {
                user?.email && <div className="mx-auto card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Welcome ! ! </h2>
                    <p>{user.email}</p>
                    <div className="card-actions justify-end">
                        <button
                        onClick={handlerOpen}
                        className="btn btn-primary">Close</button>
                    </div>
                </div>
            </div>
            }


            
        </div>
    );
};

export default Home;