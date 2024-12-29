import React from "react";
import SubscriptionCard from "../components/SubscriptionCard";
import CountOfStudents from "../components/CountOfStudents";
import WorkingStudents from "../components/WorkingStudents";


const Commpany = () => {
  return (
    <div className="p-8 mt-[85px] mb-[223px]">
      <h1 className="text-center text-3xl font-bold text-black dark:text-white mb-10">
        Аналитика
      </h1>
      <SubscriptionCard />
      <CountOfStudents />
      <WorkingStudents />
      <CountOfStudents />
    </div>
  );
};

export default Commpany;
