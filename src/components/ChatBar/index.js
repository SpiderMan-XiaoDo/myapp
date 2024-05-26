import { FaArrowRightFromBracket } from "react-icons/fa6";
import "./ChatBar.css"

function ChatBar(){
    return (
        <div className="chatbar-container">
                <input className="chatbar-input" placeholder="Enter your message"></input>
                <FaArrowRightFromBracket className="chatbar-icon" />
        </div>
    )
}
export default ChatBar