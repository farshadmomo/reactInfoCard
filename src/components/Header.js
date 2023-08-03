import image1 from "../images/React-logo.gif";
import React from "react";

export default function Header() {
    return (
        <header>
            <nav className={"navBar-items"}>
                <img className={"nav-logo"} width={"50px"} src={image1} alt="reactLogo"/>
                <h1>ReactFacts</h1>
                <h1 className={"rightTitle"}>React course - project 1</h1>
                {/*<ul className="nav-items">*/}
                {/*    <li>Pricing</li>*/}
                {/*    <li>About</li>*/}
                {/*    <li>Contacts</li>*/}
                {/*</ul>*/}
            </nav>
        </header>
    )
}
