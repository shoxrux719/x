import React from "react";
import ChooseDirection from "./ChooseDirection";
import ONlineCourses from "./ONlineCourses";
import Sales from "./Sales";
import Commpany from "./Commpany";
import AboutUs from "./AboutUs";
import RegistrationForm from "./AboutUs";
import Discounts from "../components/Discounts";
import DiscountsRu from "../components/Discounts copy";
import Navbar from "../components/Navbar";
import Snowfall from "react-snowfall";
import PhoneNumberInput from "../components/Phone";

const Home = () => {
    return (
        <div>
                   <Snowfall classname="z-50" colors={["#ffffff", "#ff9999", "#66ccff"]} snowflakeCount={150} />

            <section id="choose-direction" className="ml-[85px]">
                <ChooseDirection />
            </section>
            <section className="h-[400px]"></section>
            <section id="online-courses" className="mt-10">
                <ONlineCourses />
            </section>
            <section id="sales" className="ml-[140px]">
                <DiscountsRu />
            </section>
            <section id="company">
                <Commpany />
            </section>

            <section id="RegistrationForm">
                <RegistrationForm />
            </section>

           
        </div>
    );
};

export default Home;
