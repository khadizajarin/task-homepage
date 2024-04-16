import { MdOutlineEditCalendar } from "react-icons/md";

const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-[#048F8F] text-white lg:px-36 h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white text-[#048F8F] rounded-box w-52">
                            <li className=""><a>Individuals</a></li>
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
                    <div className="flex justify-center lg:gap-2 gap-1">
                        <MdOutlineEditCalendar className="text-3xl" />
                        <a className="font-semibold text-2xl ">Calendly</a>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex font-semibold">
                    <ul className="menu menu-horizontal px-1 z-[1] text-lg">
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
                <div className="navbar-end lg:flex lg:gap-4 gap-2 font-bold">
                    <p className="lg:text-lg text-base">Login</p>
                    <a className="bg-white lg:h-10 flex justify-center items-center rounded-full lg:px-6 px-2 lg:py-4 py-2 text-[#048F8F]">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;