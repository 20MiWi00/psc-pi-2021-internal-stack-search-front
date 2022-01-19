import { Route, Routes } from "react-router-dom";
import { Employee } from "./pages/employee";
import {Project} from "./pages/project"
import { SearchCore } from "./pages/search";

export const App = () => {

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            <Routes>
                <Route path="/employee/:id" element={<Employee/>}/>
                <Route path="/project/:projectName" element={<Project/>}/>
                <Route path="/" element={<SearchCore/>}/>
            </Routes>
        </div>
    );
}