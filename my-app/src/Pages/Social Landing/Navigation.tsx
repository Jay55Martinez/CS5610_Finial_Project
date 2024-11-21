import { Link } from "react-router-dom";

export default function SocialNavigation() {
    return (
        <div id="d-account-page-navigation">
            &nbsp; <Link to = "editor">Drawing page</Link> &nbsp;
            &nbsp; <Link to = "friends">Friends</Link> &nbsp;
            &nbsp; <Link to = "profile">Profile</Link> &nbsp;
            &nbsp; <Link to = "story">Story</Link> &nbsp;
        </div>
    );
}