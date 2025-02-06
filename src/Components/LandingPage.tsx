import React from 'react'

function LandingPage() {
  return (
    <div className="min-h-[90vh] w-full bg-[#eb3939e3] rounded-3xl border-2 border-solid border-yellow-500" style={{ boxShadow: "-10px 30px 20px , 10px -30px 20px" }}>
         <div className="navbar h-[10vh] w-full rounded-tl-3xl rounded-tr-3xl flex justify-between px-5 py-2 text-[4vw] font-[Kajiro] font-thin">
             <div className="">
                <h1>College Admission System</h1>
             </div>
             <div className="flex gap-x-5">
                 <h1>Admission Borchure</h1>
                 <h1>Student Login</h1>
                 <h1>Admin Login</h1>
             </div>
         </div>
         <div className="centralpart h-[80vh] w-full overflow-hidden">
                <div className="h-[80%] w-full text-[6vw] font-[Header] flex items-center justify-center">
                   <h1>The Entire Admission Process.</h1>
                </div>
                <div className="h-[20%] w-full flex items-center justify-evenly font-[Kajiro] text-[8vw]">
                {Array.from({ length: 5 }, (_, index) => {
                      const [isHovered, setIsHovered] = React.useState(false);

                      return (
                          <div 
                              className="relative" 
                              key={index} 
                              onMouseEnter={() => setIsHovered(true)} 
                              onMouseLeave={() => setIsHovered(false)}
                          >
                              <h1 className="cursor-pointer">{index + 1}</h1>
                              <div 
                                  className={`card h-50 w-50 absolute top-[150%] left-[50%] -translate-x-[50%] -translate-y-[50%] rotate-[20deg] ${isHovered ? 'top-[10%] rotate-0' : ''} transition-all duration-300`}
                              >
                                  <img className="h-full w-full object-cover rounded-xl" src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                              </div>
                          </div>
                      );
                  })}
                </div>
         </div>
    </div>
  )
}

export default LandingPage