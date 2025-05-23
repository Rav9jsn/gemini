import "./main.css";
import { assets } from "../../assets/assets";
import { useContext, useState, useEffect } from "react";
import { context } from "../../context/Context";

const Main = () => {
  // To get exaxt time for greet user
  var date = new Date();
  const hour = date.getHours();
  const [greetings, setGreetings] = useState("Hello, Dev.");
  useEffect(() => {
    const greetingsWord = () => {
      if (hour >= 4 && hour < 12) return setGreetings("Good Morning");
      else if (hour >= 12 && hour < 17) {
        setGreetings("	Good Afternoon");
      } else if (hour >= 17 && hour < 20) {
        setGreetings("Good Evening");
      } else {
        setGreetings("Hey there, night owl! What brings you here?");
      }
    };
    greetingsWord();
  }, [hour]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onsent();
    }
  };

  const givenPrompt = (e) => {
    onsent(e.target.textContent);
  };

  const {
    setDarkmode,
    darkmode,
    onsent,
    recentprompt,
    showResult,
    loading,
    resultdata,
    input,
    setInput,
    setExtended,
    extended,
  } = useContext(context);

  return (
    <div
      className="main"
      style={{ backgroundColor: darkmode ? "#1E201E" : "#FEF9F2" }}
    >
      <div className="nav">
        <img
          className="menu"
          onClick={() => setExtended(!extended)}
          src={darkmode ? assets.white_nav : assets.menu_icon}
          alt=""
        />
        <p style={{ color: darkmode ? "#F2FFFF" : "#585858" }}>Gemini</p>
        <img
          onClick={() => setDarkmode(!darkmode)}
          className="dark"
          src={assets.dark}
          style={{ backgroundColor: "white" }}
          alt=""
        />
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>{greetings}</span>
              </p>
              <p>How Can I help you today?</p>
            </div>
            <div className="cards">
              {" "}
              <div
                style={{ backgroundColor: darkmode ? "#343634" : "#f0f4f9" }}
                className="card"
              >
                <p
                  style={{
                    color: darkmode ? "#FEF9F2" : "#1E201E",
                  }}
                  onClick={givenPrompt}
                >
                  Suggest beautiful places to see on ab upcoming road trip
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                style={{ backgroundColor: darkmode ? "#343634" : "#f0f4f9" }}
                className="card"
              >
                <p
                  style={{
                    color: darkmode ? "#FEF9F2" : "#1E201E",
                  }}
                  onClick={givenPrompt}
                >
                  Briefly summarize this concept: urban planning
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                style={{ backgroundColor: darkmode ? "#343634" : "#f0f4f9" }}
                className="card"
              >
                <p
                  style={{
                    color: darkmode ? "#FEF9F2" : "#1E201E",
                  }}
                  onClick={givenPrompt}
                >
                  Brainstorm team bonding activities for our work retreat
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                style={{ backgroundColor: darkmode ? "#343634" : "#f0f4f9" }}
                className="card"
              >
                <p
                  style={{
                    color: darkmode ? "#FEF9F2" : "#1E201E",
                  }}
                  onClick={givenPrompt}
                >
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
              <p style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}>
                {recentprompt}
              </p>
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
                <p
                  style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}
                  dangerouslySetInnerHTML={{ __html: resultdata }}
                ></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div
            style={{
              backgroundColor: darkmode ? "#1E201E" : "#FEF9F2",
              border: "3px",
              borderColor: darkmode ? "#1E201E" : "#FEF9F2",
            }}
            className="search-box"
          >
            <input
              style={{
                color: darkmode ? "#FEF9F2" : "#1E201E",
                backgroundColor: darkmode ? "#1E201E" : "#FEF9F2",
              }}
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              onKeyDown={handleKeyDown}
              placeholder="Enter a Prompt here"
            />
            <div>
              <img
                style={{ backgroundColor: "white" }}
                src={assets.gallery_icon}
                alt=""
              />
              <img src={darkmode ? assets.send_mic : assets.mic_icon} alt="" />
              {input && (
                <img onClick={() => onsent()} src={assets.send_white} alt="" />
              )}
            </div>
          </div>
          <p
            style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}
            className="bottom-info"
          >
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
