import React, { useEffect } from "react";
import "../stylesheets/Home.css";

function About() {
    useEffect(()=>{document.title="About - Sales Commission Calculator"},[])
    return (
        <div>
            <div class="jumbotron text-center">
                <h2>About</h2>
                <p className="p1"> Welcome! We are passionate about creating tools that make life easier for sales professionals. </p>
                <p className="p2">We have used React, Spring Boot and MySQL to create a powerful and user-friendly app that steamlines the sales commission process. We created this app to make th commission calculation process as simple and efficient as possible. We're committed to providing the best possible user experience and welcome feedback from our users.</p>
                <p>Thank you for choosing Sales Commission Calculator!</p>
            </div>
        </div>
    )
}

export default About;