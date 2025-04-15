import { useStudentDataStore } from "../GlobalStore/FormStore";
import { useStudentDashboardStore } from "../GlobalStore/StudentDashboardStore";
import SideContent from "./subcomponents/SideContent"

function StudentDashboard() {
  
  const { StudentData } = useStudentDataStore();
  const {userEmail} = useStudentDashboardStore()
  console.log(userEmail);
  return (
    <div className="flex">
       <SideContent whoisThis={"student"} />
    </div>
  )
}

export default StudentDashboard