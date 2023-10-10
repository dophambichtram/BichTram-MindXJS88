import React, { useEffect, useState } from "react";
import InputCheckBox from "./InputCheckBox";
import TitleSetting from "./TitleSetting";
import "./Setting.css";

function Setting() {
  const [checked, setChecked] = useState();
  const Courses = [
    { id: 1, name: "Public" },
    { id: 2, name: "Curated Audience" },
    { id: 3, name: "Community Only" },
  ];
  const ArrayButton = ["Product", "Marketing", "Engineering", "Design"];
  const handleClick = () => {};
  return (
    <div className="cover">
      <div className="setting">Settings</div>
      <div className="checkbox">
        <InputCheckBox
          title="I want to approve attendees"
          inputType="checkbox"
        />
      </div>
      <TitleSetting title="Privacy" />
      <div className="radio">
        {Courses.map((item) => (
          <div key={item.id}>
            <input
              type="radio"
              checked={checked === item.id}
              onChange={() => setChecked(item.id)}
            />
            {item.name}
          </div>
        ))}
      </div>
      <TitleSetting title="Tag your social" />
      <TitleSetting title="Pick tags for our curation engine to work its magin" />
      <div className="handle-setting"></div>
      <div className="button-setting">
        {ArrayButton.map((item, index) => (
          <div key={index}>
            <button onClick={handleClick} className="click-button">
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Setting;
