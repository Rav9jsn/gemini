import "./sidebar.css";
import { assets } from "../../assets/assets";
import { useContext, useState } from "react";
import { context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(true);
  const { onsent, prevprompt, setRecentprompt, newChat } = useContext(context);
  const loadprompt = async (prompt) => {
    setRecentprompt(prompt);
    await onsent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="menu"
          onClick={() => setExtended(!extended)}
          src={assets.menu_icon}
          alt=""
        />
        <div onClick={() => newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevprompt.map((item, i) => {
              return (
                <div
                  key={i}
                  onClick={() => loadprompt(item)}
                  className="recent-entry"
                >
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 10)}...</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
