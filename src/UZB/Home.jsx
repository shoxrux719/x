import React from "react";
import ChooseDirection from "./ChooseDirection";
import ONlineCourses from "./ONlineCourses";
import Sales from "./Sales";
import Commpany from "./Commpany";
import AboutUs from "./AboutUs";
import ONlineCoursesUz from "./ONlineCourses";
import RegistrationFormUz from "./AboutUs";

const HomeUZ = () => {
    return (
        <div>
            <section id="choose-direction" className="ml-[85px]">
                <ChooseDirection />
            </section>
            <section className="h-[400px]"></section>
            <section id="online-courses" className="mt-10">
                <ONlineCoursesUz />
            </section>
            <section id="sales" className="ml-[140px]">
                <Sales />
            </section>
            <section id="company">
                <Commpany />
            </section>
        <RegistrationFormUz />
        </div>
    );
};

export default HomeUZ;
