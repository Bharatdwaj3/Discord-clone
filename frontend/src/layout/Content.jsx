import React from "react";
import Section from "./Section";
const Content = () => {
  return (
    <>
      <div className="absolute top-190 h-[1500px] p-0 m-0 w-[1523px] bg-orange-700 flex flex-col">
        <Section bgClass="bg-green-400">
            1
        </Section>
        <Section bgClass="bg-green-900">
            2
        </Section>
        <Section bgClass="bg-green-100">
            3
        </Section>
      </div>
    </>
  );
};

export default Content;
