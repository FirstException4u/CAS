import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [isClicked, setisClicked] = useState(false);
    const handleSignup = async () => {
      
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }


        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }
        setisClicked(true);
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/")
    };

    return (
        <div className="min-h-screen w-full flex">
            <div className="min-h-screen w-1/2 bg-[#F9F2E0]">
                <img src="/student-login.svg" className="h-screen w-full" alt="Login Illustration" />
            </div>
            <div className="min-h-screen w-1/2 flex flex-col items-center justify-evenly bg-white">
                <div className="w-full text-center">
                    <h1 className="text-[10vw] font-[Kajiro]">Signup!</h1>
                    <h3 className="text-[2vw] font-[Header]">Simplify the Student Management and boost Your Productivity</h3>
                    <h3 className="text-[2vw] font-[Header]">with <strong className="text-orange-500"> CAS </strong>. Get Started For FREE.</h3>
                </div>
                <div className="w-full flex flex-col items-center justify-evenly">
                    <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="rounded-2xl border border-gray-300 p-2 px-4 mb-4 w-1/2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="rounded-2xl border border-gray-300 p-2 px-4 w-1/2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        isClicked ?
                            <button
                                className="bg-[rgba(233,223,223,0.73)] cursor-not-allowed text-lg p-2 text-white rounded-2xl w-1/2 font-[Header] tracking-widest mt-6"
                                disabled
                            >
                                Signup
                            </button>
                            :
                            <button
                                className="bg-black text-lg p-2 text-white rounded-2xl w-1/2 font-[Header] tracking-widest mt-6"
                                onClick={handleSignup}
                            >
                                Signup
                            </button>

                    }

                </div>
            </div>
        </div>
    );
}

export default Signup;