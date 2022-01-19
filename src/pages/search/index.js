import {EmployeeProjectTable} from "../employee/components/EmployeeProjectTable"
import {ProjectEmployeesTable} from "../project/components/ProjectEmployeesTable"
import {project_data} from "../../data/Project"
import { employee_data } from "../../data/Employee"
import { red } from "@mui/material/colors"
import { margin, width } from "@mui/system"
import { Typography } from "@mui/material"
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {SearchEmployeeForm} from "./searchEmployeeForm"
import {SearchProjectForm} from "./searchProjectForm"
import {useState} from 'react';
import TextField from '@mui/material/TextField';


export const SearchCore = () =>{

    const employeeData = employee_data;
    const projectData = project_data;

    const [rEmployee, setREmployee] = useState(false);
    const [rProject, setRProject] = useState(false);
    const [showrProject, setshowRProject] = useState(false);

    const onClickSearchEmployee = () =>{
        rEmployee? setREmployee(false) : setREmployee(true);
        setRProject(false);
    }

    const onClickSearchProject = () =>{
        rProject? setRProject(false) : setRProject(true);
        setREmployee(false);
    }

    const onClickShowSearchProject = () =>{
        rProject? setshowRProject(false) : setshowRProject(true);
        // setREmployee(false);
    }


    return(
        <div style={{
            display:"flex",
            flexDirection:"row",
            width:"100%",
            // background:"#FF0000",
            height:"100vh",
            padding:" 0px 4rem",
            paddingTop:"2rem"
        }}>
            <div style={{
                display: "flex",
                flexDirection:"column",
                minWidth:"500px",
                background:"#FFFFFF",
                height:"100%",
                padding:"0px 4rem",
                paddingTop:"2rem",
                textAlign:"center",
            
            }}>

                <Typography variant="h3" sx={{margin:"2rem 0 2rem 0"}}>
                    MENU
                </Typography>

                <Button key="employee" variant="contained" aria-label="outlined primary button"
                onClick={onClickSearchEmployee}>
                    Wyszukaj pracownika
                </Button>
                <br></br>
                <Button key="project" variant="contained" aria-label="outlined primary button"
                onClick={onClickSearchProject}>
                    Wyszukaj projekt
                </Button>
            
                <div style={{
                    display:"flex",
                    flexWrap: "wrap",
                    textAlign: "left",
                    gap:"1rem",
                    flexDirection:"row",
    
                    width:"auto",
                    height:"auto",
                    margin:"4rem 0 0 0"
                }}>
                    {rEmployee ? <SearchEmployeeForm /> : null}
                </div>
                <div style={{
                    display:"flex",
                    flexWrap: "wrap",
                    textAlign: "left",
                    gap:"1rem",
                    flexDirection:"row",
    
                    width:"100%",
                    height:"auto",
                    //margin:"4rem 0 0 0"
                }}>
                    {rProject ? <SearchProjectForm /> : null}
                </div>
                
                
            </div>
            
            {/* <div>
            <TextField id="standard-basic" label="Wpisz po czym chcesz szukać" variant="standard"/>
            </div>           */}

            <div style={{
                display:"flex",
                flexDirection:"column",
                background:"#FFFFFF",
                minWidth:"70%",
                height:"100%",
                margin:"0 0 0 50px",
                padding:"0px 4rem",
                paddingTop:"5rem"
            }}>
            {rEmployee ? <ProjectEmployeesTable data = {projectData.projectMembers}/> : null}
            {rProject ? <EmployeeProjectTable data={employeeData.projects}/> : null}
            </div>
        </div>
    )
}

