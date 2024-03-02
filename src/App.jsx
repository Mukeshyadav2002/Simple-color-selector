import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./App.css";

const App = () => {
  const [color, setColor] = useState("#000000g");
  const [showCheckIcon, setShowCheckIcon] = useState(false);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    console.log(color);
    setShowCheckIcon(true);
    setTimeout(() => {
      setShowCheckIcon(false);
    }, 2000);
  };

  return (
    <div className="Container">
      <h2>QRFY.COM</h2>
      <h3>Color Picker</h3>
      <div>
        <p>Selected Color :</p>
      </div>
      <div className="color_pick" style={{ backgroundColor: color }}>
        {color}
      </div>
      <div className="hier">
        <label>Select a Color :</label>
        <input
          type="color"
          className="hi"
          value={color}
          onChange={handleColorChange}
        />
      </div>
      <div>
        <button onClick={copyToClipboard}>Copy Color to Clipboard <FaCheck className={showCheckIcon ? 'hb' : 'hide-check'} /></button>
      </div>
    </div>
  );
};

export default App;
