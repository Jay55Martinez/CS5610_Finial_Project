import { Routes, Route, Navigate } from "react-router";
import SocialNavigation from "./Navigation";
import DrawingEditor from "./Drawing Editor";
import Friends from "./Friends";
import Profile from "./Profile";
import Story from "./Story Viewer";

export default function SocialLanding() {
    return (
        <div id="d-social-landing">
            <h1>Social Landing</h1>
            <SocialNavigation />
            <Routes>
                <Route path = "/" element = {<Navigate to = "profile" />} />
                <Route path = "profile" element = {<Profile/>} />
                <Route path = "editor" element = {<DrawingEditor/>} />
                <Route path = "friends" element = {<Friends/>} />
                <Route path = "story" element = {<Story/>} />
            </Routes>
        </div>
    );
}