import { Link } from "react-router-dom";
import logo from '../../public/temp-mail.png'


const Nabvar = () => {

    const navOpctions = <>
        <Link ><li><a>Inbox</a></li></Link>
        <Link ><li> <a>Get Email</a></li></Link>
        <Link ><li><a>Blog</a></li></Link>
        
    </>
    return (
        <>
            <div className="navbar bg-slate-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOpctions}
                        </ul>
                    </div>
                    <div className="flex items-center justify-center">
                        <a className="btn btn-ghost normal-case text-xl">
                            <img className="w-14 rounded-full" src={logo} alt="" />
                        </a>
                         <h1 className="text-3xl font-semibold"> <span>Temp</span> Mail</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOpctions}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                <button className="btn bg-yellow-400 rounded-l-3xl rounded-r-3xl">Premium</button>
                </div>
            </div>
        </>
    );
};

export default Nabvar;