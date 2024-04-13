

const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-[#048F8F] text-white px-36 h-20">
                <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-[#048F8F] rounded-box w-52">
                    <li className="text-xl"><a>Individuals</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Enterprise</a></li>
                    <li>
                    <a>Product</a>
                    <ul className="p-2 ">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                    <li><a>Pricing</a></li>
                    <li>
                    <a>Resources</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <a className="font-semibold text-2xl">Calendly</a>
                </div>
                <div className="navbar-center hidden lg:flex font-semibold">
                    <ul className="menu menu-horizontal px-1 z-[1] ">
                    <li><a>Individuals</a></li>
                    <li><a>Teams</a></li>
                    <li><a>Enterprise</a></li>
                    <li>
                        <details>
                        <summary>Product</summary>
                        <ul className="p-1 bg-[#048F8F] text-white">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    <li><a>Pricing</a></li>
                    <li>
                        <details>
                        <summary>Resources</summary>
                        <ul className="p-1 bg-[#048F8F] text-white">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
                <div className="navbar-end lg:flex gap-8 font-bold">
                    <p className="">Login</p>
                    <a className="bg-white h-10 flex justify-center items-center font-bold rounded-2xl px-6 py-4 text-[#048F8F]">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;