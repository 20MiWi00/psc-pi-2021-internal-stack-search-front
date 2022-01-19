import { ProjectInfo } from "./components/ProjectInfo"
import { project_data } from "../../data/Project"
import { ProjectEmployeesTable } from "./components/ProjectEmployeesTable"
import {Typography } from "@mui/material"

export const Project = () =>{
    const data = project_data
    return(
        <div>
            <div style={{
                alignItems:"left",
                display:"flex",
                flexDirection:"column",
                padding:" 0px 4rem",
                paddingTop:"2rem",
                marginTop:"auto",
            }}>
                <Typography sx={{ fontWeight: 'bold'}} variant="h3">{data.projectName}</Typography>
                <Typography sx={{ fontWeight: 'bold'}} variant="h4">Klient : {data.client}</Typography>
            </div>
            <div style={{
                display:"flex",
                flexDirection:"row",
                minWidth:1024,
                height:"100vh",
                padding:" 0px 4rem",
                paddingTop:"2rem"
            }}>
                <div style = {{
                    display:"flex",
                    width:"100%",
                    height:"20%",
                    marginTop:"2rem"
                }}>
                    <ProjectInfo data={data}/>
                </div>
                <div style={{
                    width:"100%",
                    marginTop:"2rem"
                }}>
                    <ProjectEmployeesTable data = {data.projectMembers}/>
                </div>
            </div>

        </div>
    )
}