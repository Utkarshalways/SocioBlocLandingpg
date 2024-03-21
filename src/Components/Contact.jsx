import React from "react";
import "../Style/Contact.scss";
import Buttons from "./MiniComponents/Buttons";

const Contact = () => {
  return (
    <div className="contactmain">
      <form action="https://docs.google.com/forms/d/e/1FAIpQLScyK8kpaGMuRTd1jxvMn5HibZtwsZ0lFL36FE5yEovUkPjZdA/formResponse" target="_blank">
        <label htmlFor="name">
          Name :-
          <input
            type="text"
            name="entry.959977989"
            id="name"
            placeholder="ABC"
          />
        </label>

        <label htmlFor="email">
          Email :-
          <input
            type="email"
            name="entry.1303996041"
            id="email"
            placeholder="abc@xyz.com"
          />
        </label>

        <label htmlFor="msg">
          Message :-
          <input
            type="text"
            name="entry.1935913453"
            id="msg"
            placeholder="Enter Your Queries"
          />
        </label>

        <Buttons Name="Submit"  cls="cbtn"/>
      </form>
    </div>
  );
};

export default Contact;
