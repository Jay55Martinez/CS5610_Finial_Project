import { Routes, Route, Navigate } from "react-router";
import PageNavigation from "./Navigation";
import Landing from "./Landing";
import LogInSignUp from "./LogInSignUp";
import SocialLanding from "./Social Landing";
import Search from "./Search";

export default function Pages() {
    return (
        <div>
            <PageNavigation />
            <Routes>
                <Route path = "/" element = {<Landing/>} />
                <Route path = "/loginsignup/*" element = {<LogInSignUp/>} />
                <Route path = "/account/*" element = {<SocialLanding/>} />
                <Route path = "/search/*" element = {<Search/>} />
            </Routes>
        </div>
    );
}