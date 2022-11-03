import React from "react";

export default function Motorselect() {
  const [motorState, setMotorState] = React.useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setMotorState((prevMotorState) => {
      return {
        ...prevMotorState,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <form>
        <div class="Selection-section">
          <label class="mount-option" htmlFor="mountOption">
            Select your motor
          </label>
          <div>
            <select
              class="select 1"
              id="mountOption"
              value={motorState.mountOption}
              onChange={handleChange}
              name="mountOption"
            >
              <option value="AC">AKM23C </option>
              <option value="AN">AKM23D </option>
            </select>
          </div>
          <div>
            <select
              id="mountOption"
              value={motorState.connectorOption}
              onChange={handleChange}
              name="connectorOption"
            >
              <option value="AC">AC </option>
              <option value="AN">AN </option>
              <option value="CC">CC </option>
            </select>
          </div>

          <div>
            <select
              id="connectorOption"
              value={motorState.brakeOption}
              onChange={handleChange}
              name="brakeOption"
            >
              <option value="C">CC hyperface</option>
              <option value="D">G for resolver</option>
            </select>
          </div>
          <div>
            <select
              id="connectorOption"
              value={motorState.feedbackOption}
              onChange={handleChange}
              name="feedbackOption"
            >
              <option value="C">CC hyperface</option>
              <option value="D">G for resolver</option>
            </select>
          </div>
          <div>
            <select
              id="connectorOption"
              value={motorState.shaftSealOption}
              onChange={handleChange}
              name="shaftSealOption"
            >
              <option value="C">CC hyperface</option>
              <option value="D">G for resolver</option>
            </select>
          </div>
        </div>
      </form>
      { <div> {motorState.connectorOption} {motorState.mountOption} {motorState.brakeOption}</div> }
      <div>
         
      </div>
    </div>
  );
}
