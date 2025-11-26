"use client";
import Mission from "./Components/Mission";
import Link from "next/link";
import Button from "../shared-components/Button";

const About = () =>{
    return (
        <div>
            <h1>This is the about page</h1>
            <Mission/>
            <Link href={"/"} className=" text-red-400"> Go back to Home</Link>
            <Button
            buttonText="Click Me!"
            Variant="secondary"
            onclickHandler={() => alert("Button Clicked successfully!!")}/>
        </div>
    )
}
export default About;