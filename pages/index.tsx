import { createContext, useContext } from "react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";

const ParamContext=createContext({apiName:"user"});

const Home: NextPage = () => {
  const param = useContext(ParamContext);

  return (
    <ParamContext.Provider value={param}>
      <Header />
      <MainContent />
    </ParamContext.Provider>
  );
};

const MainContent = () => {
  const param = useContext(ParamContext);
  return (
    <>
      <h1>Hello World</h1>
      <p>{param.apiName}</p>
    </>
  );
};

export default Home;
