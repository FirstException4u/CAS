import { motion } from "motion/react";
import { useState } from "react"

interface CardData {
  number: string;
  heading1: string;
  heading2: string;
}

interface HoveredValue {
  rotate: string;
  y: string;
}

interface SideContentProps {
  whoisThis: string; 
}

function SideContent({ whoisThis }: SideContentProps) {
  const data = "satyam";
  const CardDara: CardData[] = [{
    number: "75",
    heading1: "Total No Of Remaining",
    heading2: "Student For the Entry."
  }, {
    number: "100",
    heading1: "Total No Of Student",
    heading2: "For the Entry."
  },
  {
    number: "25",
    heading1: "Last Day No Of Entry",
    heading2: "You Did."
  }];

  const [HoveredValue, setHoveredValue] = useState<HoveredValue[]>([
    { rotate: "-15deg", y: "-25%" },
    { rotate: "-15deg", y: "-25%" },
    { rotate: "-15deg", y: "-25%" }
  ]);

  const ChangeOnEnter = (idx: number) => {
    const currentHoveredValue = [...HoveredValue];
    currentHoveredValue[idx].rotate = "0deg";
    currentHoveredValue[idx].y = "-80%";
    setHoveredValue(currentHoveredValue);
  }

  const ChangeOnLeave = (idx: number) => {
    const currentHoveredValue = [...HoveredValue];
    currentHoveredValue[idx].rotate = "-15deg";
    currentHoveredValue[idx].y = "-25%";
    setHoveredValue(currentHoveredValue);
  }

  return (
    <div className="min-h-screen w-[100%] max-sm:w-full p-5 max-sm:p-2">
      <div className="min-h-[90vh] w-full bg-red-500 border-2 border-amber-300 rounded-3xl px-8 max-sm:px-4 py-0 max-sm:py-2 flex items-center justify-center flex-col" style={{ boxShadow: "-10px 25px 20px , 10px -18px 20px" }}>
        <div className="w-full font-[Kajiro] text-[8vw] max-sm:text-[16vw] text-white flex justify-between items-center">
          <h1>Welcome {data}</h1>
          <img src="https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="h-20 w-20 rounded-[50%] object-cover object-top max-[320px]:h-16 max-[320px]:w-16" />
        </div>
        {
          whoisThis === 'Admin' ? 
          <div className="w-full flex gap-5 py-5 flex-row max-sm:flex-col">
          {CardDara.map((card, index) => (
            <div key={index} className="card w-1/3 max-sm:w-full h-[50vh] bg-red-600 rounded-3xl" onMouseEnter={() => ChangeOnEnter(index)} onMouseLeave={() => ChangeOnLeave(index)}>
              <div className="upperCard w-full h-[20vh] rounded-tr-3xl rounded-tl-3xl text-center py-4">
                <h1 className="font-[Header] text-[2.5vw] text-black">Check the Details</h1>
              </div>
              <div className="bottomCard w-full h-[30vh] relative rounded-br-3xl rounded-bl-3xl flex items-center justify-center">
                <motion.div className="w-[80%] h-full font-[Header] text-[8vw] flex items-center justify-center text-[#EB5939] bg-black rounded-tr-3xl rounded-tl-3xl" animate={{ rotate: HoveredValue[index].rotate, y: HoveredValue[index].y }} >
                  <h1>{card.number}</h1>
                </motion.div>
                <div className="w-full h-full absolute top-0 left-0 rounded-br-3xl rounded-bl-3xl text-[2.5vw] font-[Header] flex items-center justify-center flex-col bg-red-600 ">
                  <h1>{card.heading1}</h1>
                  <h1>{card.heading2}</h1>
                </div>
              </div>
            </div>
          ))}
          </div> 
          : 
          <div className="w-full h-[50vh]  flex gap-x-5">
              <div className="w-1/2 flex items-center justify-center rounded-3xl border-2 border-amber-500 bg-red-600"> 
                <h1 className="text-[4vw] font-[header]">Fill up the Form</h1>
              </div>
              <div className="w-1/2 flex items-center justify-center rounded-3xl border-2 border-amber-500 bg-red-600"> 
                <h1 className="text-[4vw] font-[header]">Fee Payment Date.</h1>
              </div>
          </div>
        }
       
      </div>
    </div>
  )
}

export default SideContent