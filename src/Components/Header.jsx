import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const handlerLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })

    }

    //  console.log(user)

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/home'>Home Page</Link>
                            <Link to='/login'>Log In </Link>
                            <Link to='/register'>Register</Link>

                        </ul>
                    </div>
                </div>
                <div className=' border rounded text-center'>
                   {
                    user?.email && <h2 className='font-bold  p-1  shadow'>Welcome !! {user.email}</h2>
                   }
                    
                </div>
                <div className="navbar-center">
                    <Link to='/' className="btn btn-ghost text-xl">daisyUI</Link>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>

                    <div >
                        {
                            user?.email && <button
                                onClick={handlerLogOut}
                                className="text-[12px] underline btn btn-ghost">Log Out</button>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;