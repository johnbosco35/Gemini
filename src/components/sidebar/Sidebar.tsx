import "./Sidebar.css"
import {assets} from "../../assets/assets"
const Sidebar = () => {
  return (
    <div className="Sidebar">
        <div className="top">
            <img className="menu" src={assets.menu_icon} alt="" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="" />
                <p>New chat</p>
            </div>
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" />
                    <p>What is react ...</p>
                </div>
            </div>
        </div>

        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.Quetions_icon} alt="" />
                <p>Help</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history} alt="" />
                <p>Activity</p>
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting} alt="" />
                <p>settings</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar