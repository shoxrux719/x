import React from "react";
import SubscriptionCard from "../components/CoursePrices";
import CountOfStudents from "../components/CountOfStudents";
import WorkingStudents from "../components/WorkingStudents";

import NumberOfSubscribers from "../components/NumberOfSubscribers";
import ACopy from "../components/A";
import CoursePrices from "../components/CoursePrices";

const Commpany = () => {
  return (
    <div className="p-8 mt-[85px] mb-[223px]">
      <h1 className="text-center text-3xl font-bold text-black dark:text-white mb-10">
        Аналитика
      </h1>
      <CoursePrices />
      <CountOfStudents />
      <WorkingStudents />
      <CountOfStudents />
    </div>

  );
};

export default Commpany;
