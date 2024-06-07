import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <span>Peter Miller</span>
          <p>Can I see it ?</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>Gwen Clark</span>
          <p>Is there any shopping mall?</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>John Turner</span>
          <p>Okay then see you later... </p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1906157/pexels-photo-1906157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>Mac Moore</span>
          <p>Thank-you So much.</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>David Hardy</span>
          <p>Great News!</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/2881003/pexels-photo-2881003.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
          <span>Johnson Walker</span>
          <p>Any updates regarding that ?</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/2340978/pexels-photo-2340978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              Jack Head
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Hi there.</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Hi Sir!</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Can i come to see it today ?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>I would be pleased , sir</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>So can I?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Ummm.... Can you come after 2 days?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Anything left ?</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>yes sir , I am finalizing things for you...</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Okay then..</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Thank you for co-operating with us sir</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
