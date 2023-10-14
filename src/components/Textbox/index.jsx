import { useState } from "react";

export const TextBox = ({ textboxConfig, onchange }) => {
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
            onchange(e.target); //here we get name & value from target
            setData(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
