import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);
  const {
    onsent,
    prevprompt,
    setRecentprompt,
    newChat,
    darkmode,
    setDarkmode,
  } = useContext(context);
  const loadprompt = async (prompt) => {
    setRecentprompt(prompt);
    await onsent(prompt);
  };

  return (
    <div
      className="sidebar"
      style={{ backgroundColor: darkmode ? "#1E201E" : "#FEF9F2" }}
    >
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended(!extended)}
          src={darkmode ? assets.white_nav : assets.menu_icon}
          alt=""
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
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
                <p style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}>
                  {item.slice(0, 10)}...
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img
            src={darkmode ? assets.white_help : assets.question_icon}
            style={{ backgroundColor: "white" }}
            alt=""
          />
          {extended ? (
            <p style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}>Help</p>
          ) : null}
        </div>
        <div className="bottom-item recent-entry">
          <img
            style={{ backgroundColor: "white" }}
            src={assets.history_icon}
            alt=""
          />
          {extended ? (
            <p style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}>Activity</p>
          ) : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={darkmode ? assets.white_set : assets.setting_icon} alt="" />
          {extended ? (
            <p style={{ color: darkmode ? "#FEF9F2" : "#1E201E" }}>Setting</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
