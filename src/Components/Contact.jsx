import { useState } from "react";

export function Phone({ label, placeHolder }) {
  let [val, setVal] = useState("");
  let [isEditing, setEditing] = useState(true);
  let [hover, setHover] = useState(false);

  function handleOnClick(e) {
    if (val) setEditing(false);
  }

  return (
    <>
      {isEditing ? (
        <div className="text-center flex justify-center">
          <label htmlFor={label} className="flex items-center justify-center">
            <svg
              className="stroke-slate-200 transition duration-100 ease-in-out mr-2"
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_38)">
                <path
                  d="M8.78 2.917a2.916 2.916 0 012.303 2.304M8.78.583a5.25 5.25 0 014.638 4.632m-.584 4.655v1.75a1.165 1.165 0 01-1.271 1.167 11.545 11.545 0 01-5.034-1.791 11.375 11.375 0 01-3.5-3.5 11.544 11.544 0 01-1.791-5.058 1.167 1.167 0 011.16-1.271h1.75A1.167 1.167 0 015.314 2.17c.074.56.211 1.11.409 1.64a1.167 1.167 0 01-.263 1.23l-.74.74a9.333 9.333 0 003.5 3.5l.74-.74a1.167 1.167 0 011.23-.263c.53.198 1.08.335 1.64.409a1.166 1.166 0 011.003 1.184z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_38">
                  <path fill="#fff" d="M0 0H14V14H0z" />
                </clipPath>
              </defs>
            </svg>
            <input
              id={label}
              type="text"
              className="border border-slate-400 rounded-sm text-sm text-center placeholder:text-neutral-500 hover:outline "
              onChange={(e) => {
                setVal(e.target.value);
              }}
              placeholder={placeHolder}
              value={val}
            />
          </label>

          <button className="p-1 rounded-sm cursor-pointer" type="button" onClick={handleOnClick}>
            <svg
              className="stroke-slate-200 transition duration-100 ease-in-out hover:stroke-slate-400 active:stroke-slate-500"
              width={16}
              height={16}
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
          className="flex justify-center gap-1 items-center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <svg
            className="stroke-slate-200 transition duration-100 ease-in-out mr-2"
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_38)">
              <path
                d="M8.78 2.917a2.916 2.916 0 012.303 2.304M8.78.583a5.25 5.25 0 014.638 4.632m-.584 4.655v1.75a1.165 1.165 0 01-1.271 1.167 11.545 11.545 0 01-5.034-1.791 11.375 11.375 0 01-3.5-3.5 11.544 11.544 0 01-1.791-5.058 1.167 1.167 0 011.16-1.271h1.75A1.167 1.167 0 015.314 2.17c.074.56.211 1.11.409 1.64a1.167 1.167 0 01-.263 1.23l-.74.74a9.333 9.333 0 003.5 3.5l.74-.74a1.167 1.167 0 011.23-.263c.53.198 1.08.335 1.64.409a1.166 1.166 0 011.003 1.184z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_38">
                <path fill="#fff" d="M0 0H14V14H0z" />
              </clipPath>
            </defs>
          </svg>
          <div className="relative">
            <p className="text-sm text-center">{val}</p>
            {hover && (
              <button
                className="p-1 rounded-sm cursor-pointer absolute -right-7 top-1/2 -translate-y-1/2"
                onClick={() => {
                  setEditing(true);
                }}
              >
                <svg
                  className="stroke-slate-200 transition duration-100 ease-in-out hover:stroke-slate-400 active:stroke-slate-500"
                  width={16}
                  height={16}
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

export function Email({ label, placeHolder }) {
  let [val, setVal] = useState("");
  let [isEditing, setEditing] = useState(true);
  let [hover, setHover] = useState(false);

  function handleOnClick(e) {
    if (val) setEditing(false);
  }

  return (
    <>
      {isEditing ? (
        <div className="text-center flex justify-center">
          <label htmlFor={label} className="flex items-center justify-center">
            <svg
              className="stroke-slate-200 transition duration-100 ease-in-out mr-2"
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.833 3.5a1.17 1.17 0 00-1.166-1.167H2.333A1.17 1.17 0 001.167 3.5m11.666 0v7a1.17 1.17 0 01-1.166 1.167H2.333A1.17 1.17 0 011.167 10.5v-7m11.666 0L7 7.583 1.167 3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input
              id={label}
              type="text"
              className="border border-slate-400 rounded-sm text-sm text-center placeholder:text-neutral-500 hover:outline "
              onChange={(e) => {
                setVal(e.target.value);
              }}
              placeholder={placeHolder}
              value={val}
            />
          </label>

          <button className="p-1 rounded-sm cursor-pointer" type="button" onClick={handleOnClick}>
            <svg
              className="stroke-slate-200 transition duration-100 ease-in-out hover:stroke-slate-400 active:stroke-slate-500"
              width={16}
              height={16}
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
          className="flex justify-center gap-1 items-center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <svg
            className="stroke-slate-200 transition duration-100 ease-in-out mr-2"
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.833 3.5a1.17 1.17 0 00-1.166-1.167H2.333A1.17 1.17 0 001.167 3.5m11.666 0v7a1.17 1.17 0 01-1.166 1.167H2.333A1.17 1.17 0 011.167 10.5v-7m11.666 0L7 7.583 1.167 3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="relative">
            <p className="text-sm text-center">{val}</p>
            {hover && (
              <button
                className="p-1 rounded-sm cursor-pointer absolute -right-7 top-1/2 -translate-y-1/2"
                onClick={() => {
                  setEditing(true);
                }}
              >
                <svg
                  className="stroke-slate-200 transition duration-100 ease-in-out hover:stroke-slate-400 active:stroke-slate-500"
                  width={16}
                  height={16}
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

export function Github({ label, placeHolder }) {
  let [val, setVal] = useState("");
  let [isEditing, setEditing] = useState(true);
  let [hover, setHover] = useState(false);

  function handleOnClick(e) {
    if (val) setEditing(false);
  }

  return (
    <>
      {isEditing ? (
        <div className="text-center flex justify-center">
          <label htmlFor={label} className="flex items-center justify-center">
            <svg
              className="stroke-slate-200 transition duration-100 ease-in-out mr-2"
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_69)">
                <path
                  d="M5.25 11.083c-2.917.875-2.917-1.458-4.083-1.75m8.166 3.5v-2.257a1.966 1.966 0 00-.548-1.523c1.832-.204 3.757-.898 3.757-4.083 0-.814-.314-1.598-.875-2.187.266-.713.247-1.5-.053-2.2 0 0-.688-.204-2.28.864a7.805 7.805 0 00-4.084 0C3.658.379 2.97.583 2.97.583a2.957 2.957 0 00-.053 2.2 3.173 3.173 0 00-.875 2.204c0 3.162 1.925 3.856 3.756 4.084a1.966 1.966 0 00-.548 1.505v2.257"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_69">
                  <path fill="#fff" d="M0 0H14V14H0z" />
                </clipPath>
              </defs>
            </svg>
            <input
              id={label}
              type="text"
              className="border border-slate-400 rounded-sm text-sm text-center placeholder:text-neutral-500 hover:outline "
              onChange={(e) => {
                setVal(e.target.value);
              }}
              placeholder={placeHolder}
              value={val}
            />
          </label>

          <button className="p-1 rounded-sm cursor-pointer" type="button" onClick={handleOnClick}>
            <svg
              className="stroke-slate-200 transition duration-100 ease-in-out hover:stroke-slate-400 active:stroke-slate-500"
              width={16}
              height={16}
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
          className="flex justify-center gap-1 items-center"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <svg
            className="stroke-slate-200 transition duration-100 ease-in-out mr-2"
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_69)">
              <path
                d="M5.25 11.083c-2.917.875-2.917-1.458-4.083-1.75m8.166 3.5v-2.257a1.966 1.966 0 00-.548-1.523c1.832-.204 3.757-.898 3.757-4.083 0-.814-.314-1.598-.875-2.187.266-.713.247-1.5-.053-2.2 0 0-.688-.204-2.28.864a7.805 7.805 0 00-4.084 0C3.658.379 2.97.583 2.97.583a2.957 2.957 0 00-.053 2.2 3.173 3.173 0 00-.875 2.204c0 3.162 1.925 3.856 3.756 4.084a1.966 1.966 0 00-.548 1.505v2.257"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_69">
                <path fill="#fff" d="M0 0H14V14H0z" />
              </clipPath>
            </defs>
          </svg>
          <div className="relative">
            <a className="text-sm text-center" href={"https://github.com/" + val}>
              @{val}
            </a>
            {hover && (
              <button
                className="p-1 rounded-sm cursor-pointer absolute -right-7 top-1/2 -translate-y-1/2"
                onClick={() => {
                  setEditing(true);
                }}
              >
                <svg
                  className="stroke-slate-200 transition duration-100 ease-in-out hover:stroke-slate-400 active:stroke-slate-500"
                  width={16}
                  height={16}
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
