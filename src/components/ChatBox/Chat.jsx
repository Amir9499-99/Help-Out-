import React, { useState, useEffect } from "react";
import queryString from "query-string";
import InfoBar from "./InfoBar";
import Input from "./Input";
import Messages from "./Messages";
import "./Chat.css";
import io from "socket.io-client";

const localhost = "http://localhost:3001";
const heroku = "https://support-this.herokuapp.com/";
const socket = io.connect(heroku);

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.search);
    setName(name);
    setRoom(room);
    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [localhost, window.location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
export default Chat;
