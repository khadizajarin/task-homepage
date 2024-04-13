

const Banner = () => {
    return (
        <div className="hero bg-white flex justify-center relative"  >
            <div className="hero-overlay bg-[#048F8F] w-1/3 absolute" style={{opacity:0.05}}></div>
            <div className="hero-content text-center text-neutral-content  py-28">
                <div className="">
                    <h4 className="font-bold text-[#048F8F] mb-8 text-lg">SOLUTIONS</h4>
                    <h1 className="mb-10 text-5xl font-extrabold text-[#333535] tracking-wide"><span className="tracking-wide text-[#048F8F]">Calendly</span> For The Work You Do</h1>
                    <p className="mb-10 text-[#6D6D6D] font-medium text-xl leading-relaxed tracking-wide">Across arange of uses, Calendly helps people and teams build efficiency, <br />
                    professionalism, and results into the work they do.</p>
                    <div className="flex justify-center">
                        <button className="h-10 text-center flex justify-center items-center font-bold rounded-2xl px-6 py-4 text-white bg-[#048F8F]">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;