import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Password validation
        if (password.length < 8) {
            alert("Password must be at least 8 characters long");
            return;
        }

        // Determine where to navigate
        if (location.pathname.includes("student-login")) {
            navigate("/student");
        } else {
            navigate("/admin");
        }
    };

    return (
        <div className="min-h-screen w-full flex">
            <div className="min-h-screen w-1/2 bg-[#F9F2E0]">
                <img src="/student-login.svg" className="h-screen w-full" alt="Login Illustration" />
            </div>
            <div className="min-h-screen w-1/2 flex flex-col items-center justify-evenly bg-white">
                <div className="w-full text-center">
                    <h1 className="text-[10vw] font-[Kajiro]">Welcome Back!</h1>
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
                    <button 
                        className="bg-black text-lg p-2 text-white rounded-2xl w-1/2 font-[Header] tracking-widest mt-6"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;