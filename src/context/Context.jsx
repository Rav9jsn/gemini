import { createContext, useState } from "react";
import main from "../config/gemini";
// import { useState } from "react";

export const context = createContext();

const Contextprovider = (props) => {
  const [input, setInput] = useState("");
  const [recentprompt, setRecentprompt] = useState("");
  const [prevprompt, setPrevprompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultdata, setResultdata] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(function () {
      setResultdata((prev) => prev + nextWord);
    }, 40 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };

  const onsent = async (prompt) => {
    setResultdata("");
    setLoading(true);
    setShowResult(true);

    let response;

    if (prompt !== undefined) {
      response = await main(prompt);
      setRecentprompt(prompt);
    } else {
      setPrevprompt((prev) => [...prev, input]);
      setRecentprompt(input);
      response = await main(input);
    }
    let responeArray = response.split("**");
    let newResponse = "";
    for (let i = 0; i < responeArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responeArray[i];
      } else {
        newResponse += `<b> ${responeArray[i]} </b>`;
      }
    }

    let newResponse2 = newResponse.split("*").join("</br>");

    let newResponseAraay = newResponse2.split(" ");

    for (let i = 0; i < newResponseAraay.length; i++) {
      const nextWord = newResponseAraay[i];
      delayPara(i, nextWord + " ");
    }
    setLoading(false);
    setInput("");
  };
  const contextvalue = {
    prevprompt,
    setPrevprompt,
    onsent,
    setRecentprompt,
    recentprompt,
    showResult,
    loading,
    resultdata,
    input,
    setInput,
    newChat,
  };

  return (
    <context.Provider value={contextvalue}>{props.children}</context.Provider>
  );
};

export default Contextprovider;
