import "./main.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { context } from "../../context/Context";

const Main = () => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onsent();
    }
  };

  const givenPrompt = (e) => {
    onsent(e.target.textContent);
  };

  const {
    onsent,
    recentprompt,
    showResult,
    loading,
    resultdata,
    input,
    setInput,
  } = useContext(context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How Can I help you today?</p>
            </div>
            <div className="cards">
              {" "}
              <div className="card">
                <p onClick={givenPrompt}>
                  Suggest beautiful places to see on ab upcoming road trip
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p onClick={givenPrompt}>
                  Briefly summarize this concept: urban planning
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p onClick={givenPrompt}>
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p onClick={givenPrompt}>
                  Tell me about React js and React native
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentprompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              onKeyDown={handleKeyDown}
              placeholder="Enter a Prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input && (
                <img onClick={() => onsent()} src={assets.send_icon} alt="" />
              )}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
