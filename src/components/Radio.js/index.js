import { useState } from "react";
export const Radio = ({ radioConfig, onchange }) => {
  const [choice, setChoice] = useState();

  const buildChoice = () => {
    return radioConfig.options.map((option) => {
      return (
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            id={option.id}
            name={radioConfig.name}
            value={option.value}
            checked={option.value == choice}
            onChange={(e) => {
              onchange(e.target);
              setChoice(e.target.value);
            }}
          />
          <label class="form-check-label" for={option.id}>
            {option.label}
          </label>
        </div>
      );
    });
  };
  return (
    <fieldset class="row mb-3">
      <legend class="col-form-label col-sm-2 pt-0">{radioConfig.label}</legend>
      <div class="col-sm-10">{buildChoice()}</div>
    </fieldset>
  );
};
