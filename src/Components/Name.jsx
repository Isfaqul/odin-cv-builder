import { useState } from "react";

export function Name({ label }) {
  let [val, setVal] = useState("");
  let [isEditing, setEditing] = useState(true);
  let [hover, setHover] = useState(false);

  function handleOnClick(e) {
    if (val) setEditing(false);
  }

  return (
    <>
      {isEditing ? (
        <div className="text-center flex justify-center items-center gap-1">
          <label htmlFor={label}></label>
          <input
            id={label}
            type="text"
            className="input input-3xl"
            onChange={(e) => {
              setVal(e.target.value);
            }}
            placeholder="Your Name"
            value={val}
          />
          <button className="action-btn" type="button" onClick={handleOnClick}>
            <svg
              className="interactive-icon"
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.917 12.25V7.583H4.083v4.667m0-10.5v2.917H8.75m2.333 7.583H2.917a1.167 1.167 0 01-1.167-1.167V2.917A1.167 1.167 0 012.917 1.75h6.416l2.917 2.917v6.416a1.167 1.167 0 01-1.167 1.167z" />
            </svg>
          </button>
        </div>
      ) : (
        <div
          className="flex justify-center gap-1 "
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="relative">
            <p className="text-3xl text-center">{val}</p>
            {hover && (
              <button
                className="action-btn absolute"
                onClick={() => {
                  setEditing(true);
                }}
              >
                <svg
                  className="interactive-icon"
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_6_5)">
                    <path d="M6.417 2.333H2.333A1.167 1.167 0 001.167 3.5v8.167a1.167 1.167 0 001.166 1.166H10.5a1.167 1.167 0 001.167-1.166V7.583m-.875-6.125a1.237 1.237 0 011.75 1.75L7 8.75l-2.333.583L5.25 7l5.542-5.542z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_5">
                      <path fill="#fff" d="M0 0H14V14H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
