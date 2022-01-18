import { Route, Routes } from "react-router-dom";
import {Project} from "./pages/project"
export const App = () => {


    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Routes>
                <Route path="/project/:projectName" element={<Project/>}/>
            </Routes>
        </div>
    );
}