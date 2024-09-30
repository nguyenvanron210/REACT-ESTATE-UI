import { useState } from "react";
import "./Chat.scss";

function Chat() {
    const[chat, setChat] = useState(true)
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/9590733/pexels-photo-9590733.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Van Ron</span>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/9590733/pexels-photo-9590733.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Van Ron</span>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/9590733/pexels-photo-9590733.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Van Ron</span>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/9590733/pexels-photo-9590733.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Van Ron</span>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/9590733/pexels-photo-9590733.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Van Ron</span>
          <p>Lorem ipsum dolor sit amet ...</p>
        </div>
      </div>
      {chat && <div className="chat-box">
        <div className="top">
          <div className="user">
            <img
              src="https://images.pexels.com/photos/9590733/pexels-photo-9590733.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            Van Ron
          </div>
          <span className="close"onClick={() => setChat(null)}>x</span>
        </div>
        <div className="center">
          <div className="chat-message own">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing ...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chat-message">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing ...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chat-message own">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing ...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chat-message">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing ...</p>
            <span>1 hour ago</span>
          </div>
          <div className="chat-message own">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing ...</p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="bottom">
            <textarea name="" id=""></textarea>
            <button>Send</button>
        </div>
      </div>}
    </div>
  );
}

export default Chat;
