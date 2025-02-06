
import ProcessStep from './subcomponents/ProcessStep';

function LandingPage() {

    return (
        <div className="min-h-[90vh] w-full bg-[#eb3939e3] rounded-3xl border-2 border-solid border-yellow-500" style={{ boxShadow: "-10px 30px 20px , 10px -30px 20px" }}>
            <div className="navbar h-[10vh] w-full rounded-tl-3xl rounded-tr-3xl flex justify-between px-5 py-2 text-[4vw] font-[Kajiro] font-thin">
                <div className="">
                    <h1>College Admission System</h1>
                </div>
                <div className="flex gap-x-5">
                    <h1>Admission Brochure</h1>
                    <h1>Student Login</h1>
                    <h1>Admin Login</h1>
                </div>
            </div>
            <div className="centralpart h-[80vh] w-full overflow-hidden">
                <div className="h-[80%] w-full text-[6vw] font-[Header] flex items-center justify-center">
                    <h1>The Entire Admission Process.</h1>
                </div>
                <div className="h-[20%] w-full flex items-center justify-evenly font-[Kajiro] text-[8vw]">
                    {Array.from({ length: 5 }, (_, index) => (
                        <ProcessStep key={index} index={index}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LandingPage