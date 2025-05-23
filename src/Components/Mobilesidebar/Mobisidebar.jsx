import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { context } from "../../context/Context";
import "./mobile.css";

const Sidebar = () => {
  const {
    onsent,
    prevprompt,
    setRecentprompt,
    newChat,
    darkmode,
    setDarkmode,
    extended,
    setExtended,
  } = useContext(context);
  const loadprompt = async (prompt) => {
    setRecentprompt(prompt);
    await onsent(prompt);
  };

  return (
    <>
      {extended && (
        <div
          className={`sidebarmob ${extended ? "open" : "close"}`}
          style={{
            backgroundColor: darkmode ? "#1E201E" : "#bfc9cac9",
          }}
        >
          <div className="top">
            <img
              onClick={() => setExtended(!extended)}
              className="menu"
              src={darkmode ? assets.menu_rem_whi : assets.menu_rem}
              alt=""
            />
            <div onClick={() => newChat()} className="new-chat">
              <img src={assets.plus_icon} alt="" />
              <p onClick={() => setExtended(!extended)}>New Chat</p>
            </div>
            <div className="recent">
              <p
                className="recent-title"
                style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}
              >
                Recent
              </p>
              {prevprompt.map((item, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => loadprompt(item)}
                    className="recent-entry"
                  >
                    <img src={assets.message_icon} alt="" />
                    <p
                      onClick={() => setExtended(!extended)}
                      style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}
                    >
                      {item.slice(0, 10)}...
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bottom">
            {extended && (
              <div className="bottom-item recent-entry">
                <img
                  src={darkmode ? assets.white_help : assets.question_icon}
                  style={{ backgroundColor: "white" }}
                  alt=""
                />
                <p style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}>Help</p>
              </div>
            )}

            {extended && (
              <div className="bottom-item recent-entry">
                <img
                  style={{ backgroundColor: "white" }}
                  src={assets.history_icon}
                  alt=""
                />
                <p style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}>
                  Activity
                </p>
              </div>
            )}
            {extended && (
              <div className="bottom-item recent-entry">
                <img
                  src={darkmode ? assets.white_set : assets.setting_icon}
                  alt=""
                />

                <p style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}>
                  Setting
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
