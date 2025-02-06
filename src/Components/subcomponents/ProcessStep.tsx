import { motion } from "motion/react";
import React from 'react';

interface ProcessStepProps {
    index: number;
}

function ProcessStep({ index }: ProcessStepProps) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <div
            className="relative"
            key={index}
        >
            <h1 className="cursor-pointer">{index + 1}</h1>
            <motion.div
                animate={{ y: isHovered ? "-30%" : "70%", rotate: isHovered ? -20 : 20 }}
                transition={{ type: "spring", bounce: 0.4 }}
                className={`card h-50 w-50 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] rotate-[20deg]`}
            >
                <img className="h-full w-full object-cover rounded-xl" src='https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            </motion.div>
            <div className="overlay absolute h-20 w-40 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></div>
        </div>
    );
}

export default ProcessStep;