import SideBar from "./subcomponents/SideBar"
import SideContent from "./subcomponents/SideContent"

function AdminDashboard() {
  return (
    <div className="flex">
       <SideBar header1={"Admin"} header2={"dashboard"} header3={"student"}/> 
       <SideContent whoisThis={"Admin"}/>
    </div>
  )
}

export default AdminDashboard