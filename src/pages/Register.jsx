import { TextBox } from "../components/Textbox";
import { Dropdown } from "../components/Dropdown";
import { Radio } from "../components/Radio.js";
import { Checkbox } from "../components/Checkbox";
import { RegisterConfig } from "../utils/config";
import { useState } from "react";

export const Register = () => {
  const [register, setRegister] = useState({});
  const [isButtonEnabled, setEnabled] = useState(false);
  const countryList = [
    {
      value: "IN",
      text: "India",
    },
    {
      value: "USA",
      text: "United States Of America",
    },
  ];
  const handleChange = (target) => {
    const state = register;
    if (target.type === "checkbox") {
      state[target.name] = target.checked;
      setEnabled(target.checked);
    } else {
      state[target.name] = target.value;
    }
    setRegister({ ...state }); //here spread is used to state all the properties of state
  };
  return (
    <form className="container mt-4">
      <TextBox
        textboxConfig={RegisterConfig.FirstName}
        handleTextboxChange={handleChange}
      />
      <TextBox
        textboxConfig={RegisterConfig.LastName}
        handleTextboxChange={handleChange}
      />
      <TextBox
        textboxConfig={RegisterConfig.Email}
        handleTextboxChange={handleChange}
      />
      <Dropdown
        dropdownConfig={RegisterConfig.Country}
        list={countryList}
        handleDropdownChange={handleChange}
      />
      <TextBox
        textboxConfig={RegisterConfig.Password}
        handleTextboxChange={handleChange}
      />
      <TextBox
        textboxConfig={RegisterConfig.ConfirmPassword}
        handleTextboxChange={handleChange}
      />
      <Radio
        radioConfig={RegisterConfig.Gender}
        handleRadioChange={handleChange}
      />
      <Checkbox
        checkboxConfig={RegisterConfig.AgreeTerms}
        handleCheckboxChange={handleChange}
      />
      {isButtonEnabled ? (
        <button type="submit" class="btn btn-primary">
          Sign in
        </button>
      ) : null}
    </form>
  );
};
