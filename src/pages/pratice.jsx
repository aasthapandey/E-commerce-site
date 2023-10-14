export const Practice = ({ textboxConfig }) => {
  return (
    <form>
      <div style={{ display: "flex", margin: "10px" }}>
        <label>Email</label>
        <div style={{ marginLeft: "20px" }}>
          <input type="text" />
        </div>
      </div>
      <div style={{ display: "flex", margin: "10px" }}>
        <label>Password</label>
        <div style={{ marginLeft: "20px" }}>
          <input type="text" />
        </div>
      </div>
      <div style={{ display: "flex", margin: "10px" }}>
        <label for="countryDropdown">Country</label>
        <div style={{ marginLeft: "20px" }}>
          <select id="countryDropdown" name="country">
            <option value="">Select country</option>
            <option value="IN">India</option>
            <option value="USA">United States of America</option>
          </select>
        </div>
      </div>
      <div style={{ display: "flex", margin: "10px" }}>
        <div>
          <label>Radios</label>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <div>
            <input type="radio" id="forRadioButton1" />
            <label for="forRadioButton1" style={{ marginLeft: "10px" }}>
              First radio
            </label>
          </div>
          <div>
            <input type="radio" id="forRadioButton2" />
            <label for="forRadioButton2" style={{ marginLeft: "10px" }}>
              Second radio
            </label>
          </div>
          <div>
            <input type="radio" id="forRadioButton3" />
            <label for="forRadioButton3" style={{ marginLeft: "10px" }}>
              Third disabled radio
            </label>
          </div>
          <div>
            <input type="checkbox" id="forCheckBox1" />
            <label for="forCheckBox1" style={{ marginLeft: "10px" }}>
              Example checkbox
            </label>
          </div>
        </div>
      </div>
      <button type="submit">Sign in</button>
    </form>
  );
};
