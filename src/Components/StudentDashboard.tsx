import SideBar from "./subcomponents/SideBar"
import SideContent from "./subcomponents/SideContent"

function StudentDashboard() {
  return (
    <div className="flex">
       <SideContent whoisThis={"student"} />
    </div>
  )
}

export default StudentDashboard