import { useState } from "react";

export const Dropdown = ({ dropdownConfig, list, handleDropdownChange }) => {
  const [data, setData] = useState(dropdownConfig.defaultValue);
  const options = () => {
    if (list && list.length > 0) {
      return list.map((option) => {
        return <option value={option.value}>{option.text}</option>;
      });
    }
  };
  return (
    <div class="row mb-3">
      <label for={dropdownConfig.id} class="col-sm-2 col-form-label">
        {dropdownConfig.label}
      </label>
      <div class="col-sm-4">
        <select
          id={dropdownConfig.id}
          className="form-control"
          name={dropdownConfig.name}
          value={data}
          onChange={(e) => {
            handleDropdownChange(e.target);
            setData(e.target.value);
          }}
        >
          <option value="">{dropdownConfig.placeholder}</option>
          {options()}
        </select>
      </div>
    </div>
  );
};
