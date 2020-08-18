import React from "react";
import "../css/Why.css";
import CheckIcon from "@material-ui/icons/Check";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import WifiIcon from "@material-ui/icons/Wifi";
import CancelIcon from "@material-ui/icons/Cancel";
import FormatColorResetIcon from "@material-ui/icons/FormatColorReset";
import BrushIcon from "@material-ui/icons/Brush";

function Why() {
  return (
    <section className="info">
      <div className="info__title">
        <span>Why Use Gravity LEDs?</span>
      </div>
      <div className="info__divMain">
        <div className="info__divLeft">
          <ul>
            <li>
              <div className="info__reason">
                <div className="info__reasonLeft">
                  <span>Easy to use</span>
                </div>
              </div>
            </li>

            <li>
              <div className="info__reason">
                <div className="info__reasonLeft">
                  <span>WiFi Enabled</span>
                </div>
              </div>
            </li>

            <li>
              <div className="info__reason">
                <div className="info__reasonLeft">
                  <span>No Controller</span>
                </div>
              </div>
            </li>
            <li>
              <div className="info__reason">
                <div className="info__reasonLeft">
                  <span>Waterproof</span>
                </div>
              </div>
            </li>
            <li>
              <div className="info__reason">
                <div className="info__reasonLeft">
                  <span>16 Million+ Colors</span>
                </div>
              </div>
            </li>

            <li>
              <div className="info__reason">
                <div className="info__reasonLeft">
                  <span>Custom patterns</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="info__divRight">
          <div className="info__reasonRight">
            <InsertEmoticonIcon className="info__icon" />
          </div>

          <div className="info__reasonRight">
            <WifiIcon className="info__icon" />
          </div>
          <div className="info__reasonRight">
            <CancelIcon className="info__icon" />
          </div>
          <div className="info__reasonRight">
            <FormatColorResetIcon className="info__icon" />
          </div>
          <div className="info__reasonRight">
            <CheckIcon className="info__icon" />
          </div>
          <div className="info__reasonRight">
            <BrushIcon className="info__icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
