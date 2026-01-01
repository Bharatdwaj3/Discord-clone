import React from "react";
import {Header, Content, Footer} from "../layout/index.js";
const Home = () => {
  return (
    <>
       <div className="relative h-[2600px] p-0 m-0 w-[1523px] bg-primary-light flex flex-col">
            <Header/>
            <Content/>
            <Footer/>
      </div>
    </>
  );
};

export default Home;
