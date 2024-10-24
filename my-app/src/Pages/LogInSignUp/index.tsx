import { Routes, Route, Navigate } from "react-router";
import { Link } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

export default function LogInSignUp() {
    return (
        <div id="d-log-in-sign-up">
            <h1>LogInSignUp</h1>
            <Link to= "login">Log In</Link> <br/>
            <Link to= "signup">Sign Up</Link>
            <Routes>
                <Route path = "/" element = {<Navigate to = "login" />} />
                <Route path = "login" element = {<LogIn/>} />
                <Route path = "signup" element = {<SignUp/>} />
            </Routes>
            
        </div>
    );
}