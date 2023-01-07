'use client'

import { useEffect } from "react";
import Footer from "../components/Footer";

export default function About() {
    useEffect(() => {
        document.title = "About | GitHub Users"
    }, [])

    return (
        <div className={'page-content'}>
            <div className={'about'}>
                <div className={"section"}>
                    <h3>About the project</h3>
                    <span>&emsp;&emsp;{"This project was built within the scope of the curricular unit Technologies and Web Development of the master's degree in Communication and Web Technologies at the University of Aveiro."}</span>
                    <span>&emsp;&emsp;The main objective of this project is to test the knowledge acquired, not only in class, but also throughout our academic and/or professional experience.</span>
                    <span>&emsp;&emsp;As a core technology, I used Next.js, due to its scalability and the ease of distinguishing between client-side and server-side components.</span>
                    <span>&emsp;&emsp;I also used Redux.js to manage the global state of the app and, consequently, be able to access it without much effort.</span>
                    <span>&emsp;&emsp;In order for the app to be visually beautiful and appealing,
                        I ended up using SCSS to style it, making use of its nesting and content definition properties (mixins, functions, etc.).</span>
                </div>
                <div className={"section"}>
                    <h3>Most relevant topcis</h3>
                    <span>&emsp;&emsp;Among all the aspects and functionalities implemented, it is possible to state that the most important were:</span>
                    <ul>
                        <li>the use of Next.js folder routing;</li>
                        <li>the implementation of a semi-cache using Redux.js, which stores all fetched data in its store;</li>
                        <li>the use of Axios.js to request data to the API, facilitating the requests implementation;</li>
                        <li>the configuration of a GitLab pipeline, allowing the existence of two live environments (dev and main);</li>
                        <li>the implementation of an error page (404);</li>
                        <li>the use of uncontrolled input in user research.</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}
