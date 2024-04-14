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
        <div>
            <div className="">
                <h4 className="font-bold text-[#048F8F] mb-8 text-lg text-center pt-16">SOLUTIONS</h4>
                <h1 className="mb-20 text-4xl font-extrabold text-[#333535]  text-center pt-8">Calendly Can Solve Your Specific Pain Points</h1>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 px-28">
                {/* the 6 cards */}
                {/* card 1 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <TbTargetArrow className="text-[#048F8F] text-2xl" />
                        <h2 className="card-title text-[#048F8F] font-bold">Sales</h2>
                        <p >Spend more time in selling, and less time on admin. Shorten your scales cycle by letting prospects scedule while they are in peak buying mode.</p>
                        <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                    </div>
                </div>
                {/* card 2 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <RiUserSearchLine className="text-[#048F8F] text-2xl font-semibold" />
                        <h2 className="card-title text-[#048F8F] font-bold">Recruiting</h2>
                        <p>Simplify recruitment by smoothing every aspects of the interview sceduling process, including automated follow-ups.</p>
                        <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                    </div>
                </div>
                {/* card 3 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <GiTeacher className="text-[#048F8F] text-2xl" />
                        <h2 className="card-title text-[#048F8F] font-bold">Education</h2>
                        <p >Control your office hours, empower students and parents to schedule appointments easily</p>
                        <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                    </div>
                </div>
                {/* card 4 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <IoBarChartOutline className="text-[#048F8F] text-2xl" />
                        <h2 className="card-title text-[#048F8F] font-bold">Revenue Operations</h2>
                        <p >Sreaming meeting and activity data. Calendly's native interogations with Salesforce and Hubspot ensure up-to-date reporting</p>
                        <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                    </div>
                </div>
                {/* card 5 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <RiFlashlightLine className="text-[#048F8F] text-2xl" />
                        <h2 className="card-title text-[#048F8F] font-bold">Marketing</h2>
                        <p >Convert interested propspects into scheduled meetings and demos faster. Skip steps that cause customer friction.</p>
                        <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                    </div>
                </div>
                {/* card 6 */}
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <FaRegGrinStars className="text-[#048F8F] text-2xl" />
                        <h2 className="card-title text-[#048F8F] font-bold">Customer Success</h2>
                        <p >Offer exceptional support : Your clients will be delighted with one-click scheduling and increased  responsiveness.</p>
                        <p className="text-[#048F8F] flex items-center font-semibold">Learn More <FaAngleRight className="" /></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;