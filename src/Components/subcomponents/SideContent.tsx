import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Model from "./Model";
import { useLocation, useNavigate } from "react-router-dom";
import { useStudentDashboardStore } from "../../GlobalStore/StudentDashboardStore";
import { useStudentDataStore } from "../../GlobalStore/FormStore";

interface SideContentProps {
  whoisThis: string;
}

interface StudentData {
  name: string;
  Rollno: string;
  email: string;
  dob: string;
  gender: string;
  address: string;
  phone: string;
  parentName: string;
  parentPhone: string;
  schoolName: string;
  grade: string;
  extracurriculars: string;
  emergencyContact: string;
}

const studentData: StudentData[] = [
  {
    name: "John Doe",
    Rollno: "12345",
    email: "john.doe@example.com",
    dob: "2005-01-15",
    gender: "Male",
    address: "123 Main Street, Springfield",
    phone: "+1 234-567-890",
    parentName: "Jane Doe",
    parentPhone: "+1 234-567-891",
    schoolName: "Springfield High School",
    grade: "10th",
    extracurriculars: "Football, Science Club",
    emergencyContact: "+1 234-567-892",
  },
  {
    name: "Jane Smith",
    Rollno: "12346",
    email: "jane.smith@example.com",
    dob: "2004-07-22",
    gender: "Female",
    address: "456 Elm Street, Rivertown",
    phone: "+1 234-567-893",
    parentName: "Robert Smith",
    parentPhone: "+1 234-567-894",
    schoolName: "Rivertown Academy",
    grade: "11th",
    extracurriculars: "Drama Club, Debate Team",
    emergencyContact: "+1 234-567-895",
  },
  {
    name: "Michael Johnson",
    Rollno: "12347",
    email: "michael.johnson@example.com",
    dob: "2006-03-12",
    gender: "Male",
    address: "789 Oak Avenue, Lakewood",
    phone: "+1 234-567-896",
    parentName: "Sarah Johnson",
    parentPhone: "+1 234-567-897",
    schoolName: "Lakewood Secondary School",
    grade: "9th",
    extracurriculars: "Basketball, Chess Club",
    emergencyContact: "+1 234-567-898",
  },
  {
    name: "Emily Davis",
    Rollno: "12348",
    email: "emily.davis@example.com",
    dob: "2005-11-30",
    gender: "Female",
    address: "101 Pine Road, Greenfield",
    phone: "+1 234-567-899",
    parentName: "William Davis",
    parentPhone: "+1 234-567-900",
    schoolName: "Greenfield High School",
    grade: "10th",
    extracurriculars: "Art Club, Volleyball",
    emergencyContact: "+1 234-567-901",
  },
  {
    name: "David Wilson",
    Rollno: "12349",
    email: "david.wilson@example.com",
    dob: "2004-09-25",
    gender: "Male",
    address: "202 Maple Drive, Brookfield",
    phone: "+1 234-567-902",
    parentName: "Linda Wilson",
    parentPhone: "+1 234-567-903",
    schoolName: "Brookfield College",
    grade: "12th",
    extracurriculars: "Swimming, Robotics Club",
    emergencyContact: "+1 234-567-904",
  },
];

function SideContent({ whoisThis }: SideContentProps) {
  const { showModel, setshowModel } = useStudentDashboardStore();
  const [dataTomodel, setdataTomodel] = useState("");
  const [currentUserData, setcurrentUserData] = useState({});
  const { userEmail } = useStudentDashboardStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

 
  useEffect(() => {
    setIsLoading(false);
  }, [location]);

  const CheckStatus = () => {

  };

  const NavigateToForm = async () => {
    if (!userEmail) {
      console.error("User email not available. Cannot fetch data.");
      alert("User email not available. Please sign in again.");
      return;
    }

    setIsLoading(true);
    try {
      const docRef = doc(db, "Users", userEmail);
      const docSnap = await getDoc(docRef);
       console.log(docSnap.exists());
      if (docSnap.exists()) {
        alert("You have Already Filled up the Form look at the form status")
        setIsLoading(false);
        navigate("/student", { replace: true });
      } else {
       
        setIsLoading(false);
        navigate("/form");
      }
    } catch (error) {
      console.error("Error during form page check:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full max-sm:w-full p-5 max-sm:p-2 relative">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="flex flex-col items-center justify-center">
            <svg
              className="animate-spin h-10 w-10 text-white mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
            <p className="text-white text-xl">Loading...</p>
          </div>
        </div>
      )}

      <div
        className="min-h-[90vh] w-full bg-red-500 border-2 border-amber-300 rounded-3xl px-8 max-sm:px-4 py-0 max-sm:py-2 flex items-center justify-center flex-col"
        style={{ boxShadow: "-10px 25px 20px , 10px -18px 20px" }}
      >
        <div className="w-full font-[Kajiro] text-[8vw] max-sm:text-[16vw] text-white flex justify-between items-center">
          <h1>Welcome satyam</h1>
          <img
            src="https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-20 w-20 rounded-[50%] object-cover object-top max-[320px]:h-16 max-[320px]:w-16"
          />
        </div>

        {whoisThis === "Admin" ? (
          <div className="min-h-[50vh] w-full bg-[#eb3939e3] p-5 mb-5 rounded-3xl shadow-black shadow-2xl">
            <div className="w-full text-center relative">
              <h1 className="font-[Header] text-[4vw] text-center">
                Student Page
              </h1>
              <img
                src="/MenuAction.svg"
                className="h-20 max-sm:h-10 absolute top-0 right-0"
              />
            </div>
            <table className="w-full text-[2vw] font-[Header] border-separate border-spacing-y-[10px]">
              <thead>
                <tr className="bg-black text-white">
                  <th className="rounded-tl-3xl rounded-bl-3xl pt-2 border-r-2">
                    Name
                  </th>
                  <th className="pt-2 border-r-2">Roll-No</th>
                  <th className="pt-2 border-r-2">Date-Of-Birth</th>
                  <th className="pt-2 border-r-2">Email-Address</th>
                  <th className="rounded-tr-3xl rounded-br-3xl pt-2">
                    Gender
                  </th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((curdata, index) => (
                  <tr
                    key={index}
                    className="text-center text-white text-[2vw]"
                    style={{
                      backgroundColor: `rgba(0,0,0,${1 - (index + 1) * 0.1})`,
                      marginBottom: "10px",
                    }}
                  >
                    <td
                      className="rounded-tl-3xl rounded-bl-3xl pt-2"
                      style={{
                        borderRight: `2px solid rgba(255,255,255,${1 -
                          (index + 1) * 0.1})`,
                      }}
                    >
                      {curdata.name}
                    </td>
                    <td
                      className="pt-2"
                      style={{
                        borderRight: `2px solid rgba(255,255,255,${1 -
                          (index + 1) * 0.1})`,
                      }}
                    >
                      {curdata.Rollno}
                    </td>
                    <td
                      className="pt-2"
                      style={{
                        borderRight: `2px solid rgba(255,255,255,${1 -
                          (index + 1) * 0.1})`,
                      }}
                    >
                      {curdata.dob}
                    </td>
                    <td
                      className="pt-2"
                      style={{
                        borderRight: `2px solid rgba(255,255,255,${1 -
                          (index + 1) * 0.1})`,
                      }}
                    >
                      {curdata.email}
                    </td>
                    <td className="rounded-tr-3xl rounded-br-3xl pt-2">
                      {curdata.gender}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="w-full h-[50vh] flex gap-x-5">
            <div
              className="w-1/2 flex items-center cursor-pointer justify-center rounded-3xl border-2 border-amber-500 bg-red-600"
              onClick={NavigateToForm}
            >
              <h1 className="text-[4vw] font-[header]">Fill up the Form</h1>
            </div>
            <div
              className="w-1/2 flex items-center cursor-pointer justify-center rounded-3xl border-2 border-amber-500 bg-red-600"
              onClick={CheckStatus}
            >
              <h1 className="text-[4vw] font-[header]">From Status.</h1>
            </div>
          </div>
        )}

        <AnimatePresence>
          {showModel && <Model dataToshow={dataTomodel} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SideContent;
