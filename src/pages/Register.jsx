import { TextBox } from "../components/Textbox";
import { Dropdown } from "../components/Dropdown";
import { Radio } from "../components/Radio.js";
import { Checkbox } from "../components/Checkbox";
import { RegisterConfig } from "../utils/config";
import { useState } from "react";

export const Register = () => {
  const [register, setRegister] = useState({});
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
    } else {
      state[target.name] = target.value;
    }
    setRegister({ ...state }); //here spread is used to state all the properties of state
  };
  return (
    <form className="container mt-4">
      <TextBox
        textboxConfig={RegisterConfig.FirstName}
        onchange={handleChange}
      />
      <TextBox
        textboxConfig={RegisterConfig.LastName}
        onchange={handleChange}
      />
      <TextBox textboxConfig={RegisterConfig.Email} onchange={handleChange} />
      <Dropdown
        dropdownConfig={RegisterConfig.Country}
        list={countryList}
        onchange={handleChange}
      />
      <TextBox
        textboxConfig={RegisterConfig.Password}
        onchange={handleChange}
      />
      <TextBox
        textboxConfig={RegisterConfig.ConfirmPassword}
        onchange={handleChange}
      />
      <Radio radioConfig={RegisterConfig.Gender} onchange={handleChange} />
      <Checkbox
        checkboxConfig={RegisterConfig.AgreeTerms}
        onchange={handleChange}
      />
      <button type="submit" class="btn btn-primary">
        Sign in
      </button>
    </form>
  );
};
