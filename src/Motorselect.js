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
              value={motorState.windingOption}
              onChange={handleChange}
              name="mountOption"
            >
              <option value="AKM23C">AKM23C </option>
              <option value="AKM23D">AKM23D </option>
            </select>
          </div>
          <div>
            <select
              class="select 1"
              id="mountOption"
              value={motorState.mountOption}
              onChange={handleChange}
              name="mountOption"
            >
              <option value="AC">AC </option>
              <option value="AN">AN </option>
            </select>
          </div>
          <div>
            <select
              id="mountOption"
              value={motorState.connectorOption}
              onChange={handleChange}
              name="connectorOption"
            >
              <option value="C">C dual connector </option>
              <option value="9">9 single connector</option>
          
            </select>
          </div>

          <div>
            <select
              id="connectorOption"
              value={motorState.brakeOption}
              onChange={handleChange}
              name="brakeOption"
            >
              <option value="N">N for no brake</option>
              <option value="2">2 for brake</option>
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
              <option value="R">R for resolver</option>
            </select>
          </div>
          <div>
            <select
              id="connectorOption"
              value={motorState.shaftSealOption}
              onChange={handleChange}
              name="shaftSealOption"
            >
              <option value="00">00 for no shaft seal</option>
              <option value="01">01 for shaft seal</option>
            </select>
          </div>
        </div>
      </form>
      { <div> {motorState.windingOption}{motorState.connectorOption} {motorState.mountOption} {motorState.brakeOption} {motorState.shaftSealOption}</div> }
      <div>
         
      </div>
    </div>
  );
}
