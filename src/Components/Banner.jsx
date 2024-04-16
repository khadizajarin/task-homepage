

const Banner = () => {
    return (
        <div className="hero bg-white flex justify-center relative" style ={{height: '90vh'}}  >
            <div className="hero-overlay bg-[#048F8F] w-1/2 absolute " style={{opacity:0.05}}></div>
            <div className="hero-content text-center lg:py-28">
                <div className="">
                    <h4 className="font-bold text-[#048F8F] lg:mb-8 mb-4 lg:text-2xl text-lg">SOLUTIONS</h4>
                    <h1 className="mb-10 lg:text-6xl text-5xl font-extrabold text-[#333535] "><span className=" text-[#048F8F]">Calendly</span> For The Work You Do</h1>
                    <p className="mb-10 text-[#6D6D6D] font-medium lg:text-2xl text-xl leading-relaxed tracking-wider">Across arange of uses, Calendly helps people and teams build efficiency, <br />
                    professionalism, and results into the work they do.</p>
                    <div className="flex justify-center">
                        <button className="lg:h-12 h-10 text-center flex justify-center items-center font-bold rounded-full px-6 py-4 text-white lg:text-lg bg-[#048F8F]">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;