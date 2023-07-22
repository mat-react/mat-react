import React from "react";

function ToggleSwitch({checked, onChange}) {

  const styles = {
    switch: {
      position: "relative",
      display: "inline-block",
      width: 50,
      height: 20,
    }
  }

  return (
    <label className={styles.switch}>
      <input className="d-none" type="checkbox" checked={checked} onChange={onChange} />
      <span className="switch" />
    </label>
  );
}
export default ToggleSwitch;