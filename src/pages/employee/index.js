import { useParams } from "react-router-dom"
import { EmployeeProjectTable } from "./components/EmployeeProjectTable"
import { GanttProjects } from "./components/GanttProjects"
import { ProfileInfo } from "./components/ProfileInfo"
import { RatingInfo } from "./components/RatingInfo"
import { employee_data } from "../../data/Employee"

export const Employee = () => {

    const data = employee_data

    const params = useParams()

    return (
        <div style={{
            display:"flex",
            flexDirection:"column",
            minWidth:1024,
            height:"100vh",
            padding:" 0px 4rem",
            paddingTop:"2rem"
        }}>
            <div style={{
                display:"flex",
                flexDirection:"row",
                width:"100%",
                height:"20%",
            }}>
                <ProfileInfo data={data}/>
                <RatingInfo data={data.rating}/>
            </div>
            <div style={{
                width:"100%",
                marginTop:"2rem"
            }}>
                <EmployeeProjectTable data={data.projects}/>
            </div>
            <div style={{
                width:"100%",
                height:"100%",
                marginTop:"4rem",
            }}>
                <GanttProjects data={data.projects}/>
            </div>
        </div>
    )
}