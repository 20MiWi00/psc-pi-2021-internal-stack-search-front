import {Typography } from "@mui/material"

export const ProjectInfo = ({data:{projectName,department,client,budget,startDate,endDate,projectTechnologies}}) =>{

    return(
        <div>
            <div style = {{display:"flex",alignItems:"left",marginTop: "auto"}}>
                <div>
                    <Typography  variant="h5">Dział : {department} </Typography>
                    <Typography  variant="h5">Budżet : {budget}zł </Typography>
                    <Typography  variant="h5">Data rozpoczęcia : </Typography>
                    <Typography  variant="h5">{new Date(startDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })} </Typography>
                    <Typography  variant="h5">Data zakończenia : </Typography>
                    <Typography  variant="h5">{new Date(endDate).toLocaleDateString('en-GB', { timeZone: 'UTC' })} </Typography>
                    <Typography  variant="h5">Użyte technologie:</Typography> 
                    {projectTechnologies.map(x => {
                        return(
                            <div style = {{paddingLeft : 10}}>
                                <Typography variant = "h5">-{x}</Typography>
                            </div>
                        ) 
                    })}
                </div>
            </div>
        </div>
    )
}