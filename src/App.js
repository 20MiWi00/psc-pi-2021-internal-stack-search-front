import { blueGrey, indigo } from "@mui/material/colors";
import { Route, Routes } from "react-router-dom";
import { Employee } from "./pages/employee";

export const App = () => {


    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Routes>
                <Route path="/employee/:id" element={<Employee/>}/>

            </Routes>
        </div>
    );
}