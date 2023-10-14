import { useState } from "react";
export const Checkbox = ({ checkboxConfig, onchange }) => {
  const [isChecked, setChecked] = useState();
  return (
    <div class="row mb-3">
      <div class="col-sm-10 offset-sm-2">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            name={checkboxConfig.name}
            id={checkboxConfig.id}
            checked={isChecked}
            onChange={(e) => {
              onchange(e.target);
              setChecked(e.target.value);
            }}
          />
          <label class="form-check-label" for={checkboxConfig.id}>
            {checkboxConfig.label}
          </label>
        </div>
      </div>
    </div>
  );
};
