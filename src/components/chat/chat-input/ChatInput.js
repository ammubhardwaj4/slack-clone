import React, { useState } from "react";
import "./ChatInput.css";
import db from "../../../firebase";
import firebase from "firebase/compat/app";

import { useStateValue } from "../../../store/StateProvider";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    const payload = {
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user.displayName,
      userImage: user.photoURL,
    };
    console.log("hiii working here", channelId, input);
    if (channelId) {
      console.log(channelId);
      db.collection("rooms").doc(channelId).collection("messages").add(payload);
    }
  };

  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
