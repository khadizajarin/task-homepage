import img1 from "./../assets/OIP.jpg";
import img2 from "./../assets/Google-Play.jpg";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";


const Contacts = () => {

    const underlined = <>
            <span className="absolute bottom-1 left-0 w-full h-2">
                    <span className="inline-block lg:w-6 w-4 border-b-2 border-[#048F8F]"></span>
                    <span className="inline-block w-1 border-b-2 border-transparent"></span>
                    <span className="inline-block lg:w-10 w-6 border-b-2 border-[#048F8F]"></span>
                    <span className="inline-block w-1 border-b-2 border-transparent"></span>
                    <span className="inline-block lg:w-10 w-6 border-b-2 border-[#048F8F]"></span>
                    <span className="inline-block w-1 border-b-2 border-transparent"></span>
                    <span className="inline-block lg:w-6 w-4 border-b-2 border-[#048F8F]"></span>
            </span>
    </>
    return (
        <div className="hero bg-white flex justify-center items-center relative"  >
            <div className="hero-overlay bg-[#048F8F] w-1/2 absolute" style={{opacity:0.05}}></div>

            <div className="flex lg:gap-44 flex-col-reverse lg:flex-row">
               
                {/* left part */}
                <div className="lg:pb-20 pb-10 lg:pt-16 pt-8">
                <hr className=" lg:hidden bg-[#6D6D6D] mx-14 mb-5" style={{height:2}}/>
                    <h2 className="lg:text-left text-center tracking-wider font-extrabold text-5xl text-[#333535]" style={{"font-size": 44}}><span className="text-[#048F8F] leading-snug">Easy</span><br /> Ahead</h2>
                    <p className="lg:text-left text-center text-base tracking-wide leading-6 text-[#6D6D6D] mt-8">We take the work out of connecting with <br />others so you can accomplish more.</p>

                    <div className="px-4 lg:px-0">
                        <select className="select border-[#333535] bg-[#FFFFFF] w-full text-[#048F8F] font-semibold text-sm mt-10">
                        <option className="">English</option>
                        <option>English(UK)</option>
                        <option>English(Indian)</option>
                        </select>
                    </div>

                    <div className="flex lg:justify-start justify-center mt-8 lg:gap-2 gap-4" >
                            <img className="w-36" src={img1} alt="" />
                            <img className="w-36" src={img2} alt="" />
                    </div>

                    <div className="text-[#048F8F] text-xl flex lg:justify-start justify-center gap-6 mt-8">
                        <FaTwitter></FaTwitter>
                        <FaFacebookF></FaFacebookF>
                        <FaInstagram></FaInstagram>
                        <FaLinkedinIn></FaLinkedinIn>
                        <FaYoutube></FaYoutube>
                    </div>
                </div>


                {/* right part */}
                <div className="text-center grid lg:grid-cols-3 grid-cols-2 gap-8 lg:pb-16 lg:pt-20 pt-10 px-4">
                    {/* list 1 */}
                    <div className="leading-8 ">
                        <h5 className="text-[#333535] font-bold lg:text-2xl text-xl relative mb-6 ">About
                            {underlined}
                        </h5>
                            <ul className="text-[#6D6D6D] lg:text-base text-sm leading-7 mt-5">
                                <li>About Calendly</li>
                                <li>Contact Sales</li>
                                <li>Newsroom</li>
                                <li>Careers</li>
                                <li>Security</li>
                            </ul>
                    </div>
                    {/* list 2 */}
                    <div className="leading-8">
                        <h5 className="text-[#333535] font-bold lg:text-2xl text-xl relative mb-6">Solutions
                            {underlined}
                        </h5>
                        <ul className="text-[#6D6D6D] lg:text-base text-sm leading-7 mt-5">
                            <li>Customer Success</li>
                            <li>Sales</li>
                            <li>Recruiting</li>
                            <li>Information Techology</li>
                            <li>Marketing</li>
                        </ul>
                    </div>
                    {/* list 3 */}
                    <div className="leading-8">
                        <h5 className="text-[#333535] font-bold lg:text-2xl text-xl relative mb-6">Popular features
                            {underlined}
                        </h5>
                        <ul className="text-[#6D6D6D] lg:text-base text-sm leading-7 mt-5">
                            <li>Embed Calendly</li>
                            <li>Avalability</li>
                            <li>Sending Notification</li>
                            <li>Using Calendly Mobile</li>
                        </ul>
                    </div>
                    {/* list 4 */}
                    <div className="leading-8">
                        <h5 className="text-[#333535] font-bold lg:text-2xl text-xl relative mb-6">Support
                            {underlined}
                        </h5>
                        <ul className="text-[#6D6D6D] lg:text-base text-sm leading-7 mt-5">
                            <li>Help Center</li>
                            <li>Video Tutorials</li>
                            <li>Cookie Settings</li>
                        </ul>
                    </div>
                    {/* list 5 */}
                    <div className="leading-8">
                    <h5 className="text-[#333535] font-bold lg:text-2xl text-xl relative mb-6">Add-Ons
                        {underlined}
                    </h5>
                        <ul className="text-[#6D6D6D] lg:text-base text-sm leading-7 mt-5">
                            <li>Download for Chrome</li>
                            <li>Download for Firefox</li>
                        </ul>
                    </div>
                    {/* list 6 */}
                    <div className="leading-8">
                        <h5 className="text-[#333535] font-bold lg:text-2xl text-xl relative mb-6">Developers
                            {underlined}
                        </h5>
                        <ul className="text-[#6D6D6D] lg:text-base text-sm leading-7 mt-5">
                            <li>Developer Tools</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;