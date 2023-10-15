import { useState } from "react";

export const TextBox = ({ textboxConfig, handleTextboxChange }) => {
  const [data, setData] = useState(textboxConfig.defaultValue);
  return (
    <div class="row mb-3">
      <label for={textboxConfig.id} class="col-sm-2 col-form-label">
        {textboxConfig.label}
      </label>
      <div class="col-sm-4">
        <input
          type={textboxConfig.type}
          class="form-control"
          id={textboxConfig.id}
          placeholder={textboxConfig.placeholder}
          name={textboxConfig.name}
          value={data}
          onChange={(e) => {
            handleTextboxChange(e.target); //here we send the value to parent
            setData(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
