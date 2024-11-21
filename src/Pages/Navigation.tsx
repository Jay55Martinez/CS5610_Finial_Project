import { Link } from "react-router-dom";

export default function PageNavigation() {
    return (
        <div id="d-page-navigation">
            <a id="d-home-page-link"> 
                {/* Image could go here */}
                Home
            </a>
            &nbsp; <Link to = "/">Home</Link> &nbsp;
            &nbsp; <Link to = "/loginsignup">Log In/Sign Up</Link> &nbsp;
            &nbsp; <Link to = "/account">Account</Link> &nbsp;
            &nbsp; <Link to = "/search">Search</Link> &nbsp;
        </div>
    );
}