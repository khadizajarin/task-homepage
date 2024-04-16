/* eslint-disable react/no-unescaped-entities */
import { TbTargetArrow } from "react-icons/tb";
import { FaAngleRight } from "react-icons/fa6";
import { RiUserSearchLine } from "react-icons/ri";
import { GiTeacher } from "react-icons/gi";
import { IoBarChartOutline } from "react-icons/io5";
import { RiFlashlightLine } from "react-icons/ri";
import { FaRegGrinStars } from "react-icons/fa";

const Cards = () => {
    return (
        <div className="relative lg:pb-20 bg-[#FFFFFF]">
            <div className="">
                <h4 className="font-bold text-[#048F8F] lg:text-xl text-lg text-center pt-16">SOLUTIONS</h4>
                <h1 className="pb-14 text-4xl text-[#333535] text-center lg:pt-6 " style={{fontWeight:700}}>Calendly Can Solve Your Specific Pain Points</h1>
            </div>

            <div className="hero-overlay bg-[#048F8F] w-64 lg:h-2/3 h-full absolute right-0 lg:top-48 top-64" style={{opacity:0.1}}></div>

            <div className="flex justify-center lg:mx-20  mx-0">
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 ">
                    {/* the 6 cards */}
                    {/* card 1 */}
                    <div className="card w-80 bg-[#FFFFFF] shadow-md shadow-[#333535] mx-5 lg:mb-6">
                        <div className="card-body ">
                            <TbTargetArrow className="text-[#048F8F] text-3xl mb-5 font-semibold" />
                            <h2 className="card-title text-[#048F8F] text-2xl font-bold mb-4">Sales</h2>
                            <p className="mb-5 pr-5 text-[#6D6D6D] ">Spend more time in selling, and less time on admin. Shorten your scales cycle by letting prospects scedule while they are in peak buying mode.</p>
                            <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className="card w-80 bg-[#FFFFFF] shadow-md shadow-[#333535] mx-5 lg:mb-6">
                        <div className="card-body">
                            <RiUserSearchLine className="text-[#048F8F] text-3xl font-semibold mb-5" />
                            <h2 className="card-title text-[#048F8F] text-2xl font-bold mb-4">Recruiting</h2>
                            <p className="mb-5 pr-5 text-[#6D6D6D] ">Simplify recruitment by smoothing every aspects of the interview sceduling process, including automated follow-ups.</p>
                            <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className="card w-80 bg-[#FFFFFF] shadow-md shadow-[#333535] mx-5 lg:mb-6">
                        <div className="card-body">
                            <GiTeacher className="text-[#048F8F] text-3xl mb-5 font-semibold" />
                            <h2 className="card-title text-[#048F8F] text-2xl font-bold mb-4">Education</h2>
                            <p className="mb-5 pr-5 text-[#6D6D6D] ">Control your office hours, empower students and parents to schedule appointments easily.</p>
                            <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                        </div>
                    </div>
                    {/* card 4 */}
                    <div className="card w-80 bg-[#FFFFFF] shadow-md shadow-[#333535] mx-5 ">
                        <div className="card-body">
                            <IoBarChartOutline className="text-[#048F8F] text-3xl mb-5 font-semibold" />
                            <h2 className="card-title text-[#048F8F] text-2xl font-bold mb-4">Revenue Operations</h2>
                            <p className="mb-5 pr-5 text-[#6D6D6D] ">Sreaming meeting and activity data. Calendly's native interogations with Salesforce and Hubspot ensure up-to-date reporting.</p>
                            <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className="card w-80 bg-[#FFFFFF] shadow-md shadow-[#333535] mx-5 ">
                        <div className="card-body">
                            <RiFlashlightLine className="text-[#048F8F] text-3xl mb-5 font-semibold" />
                            <h2 className="card-title text-[#048F8F] text-2xl font-bold mb-5">Marketing</h2>
                            <p className="mb-5 pr-5 text-[#6D6D6D] ">Convert interested propspects into scheduled meetings and demos faster. Skip steps that cause customer friction.</p>
                            <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                        </div>
                    </div>
                    {/* card 6 */}
                    <div className="card w-80 bg-[#FFFFFF] shadow-md shadow-[#333535] mx-5 ">
                        <div className="card-body">
                            <FaRegGrinStars className="text-[#048F8F] text-3xl mb-5 font-semibold" />
                            <h2 className="card-title text-[#048F8F] text-2xl font-bold mb-4">Customer Success</h2>
                            <p className="mb-5 pr-5 text-[#6D6D6D] ">Offer exceptional support : Your clients will be delighted with one-click scheduling and increased  responsiveness.</p>
                            <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;