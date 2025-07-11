import { useState } from "react";
import { RemoveIconBtn, AddIconBtn, AddIconBtnCustom, RemoveIconBtnCustom } from "./Buttons";
import { SvgEdit, SvgSave } from "./SVGIcons";

let styles = {
  inputSM: "border border-slate-500 px-1 rounded-sm text-sm",
  listItem: "text-xs text-slate-500 list-disc ml-4",
  listItemEditing:
    "relative text-slate-500 flex justify-center gap-0.5 pl-4 before:content-['•'] before:text-lg before:absolute before:-left-[1px] before:text-slate-500",
  inputListItem: "border border-slate-500 px-1 rounded-sm text-xs w-full",
  label: "block w-full",
};

export function Experience() {
  let [isEditing, setEditing] = useState(true);
  let [rows, setRows] = useState([
    { id: crypto.randomUUID(), fromYear: "", toYear: "", city: "", country: "", role: "", company: "" },
  ]);

  function addRow() {
    setRows([
      ...rows,
      { id: crypto.randomUUID(), fromYear: "", toYear: "", city: "", country: "", role: "", company: "" },
    ]);
  }

  function removeExperience(id) {
    let filter = rows.filter((row) => row.id !== id);
    setRows(filter);
  }

  return (
    <div className="relative">
      <div className="flex justify-end px-0.5 absolute -top-9 right-0 bg-slate-100">
        <button
          className="cursor-pointer bg-slate-500 p-1 rounded-sm stroke-slate-200 active:bg-slate-600"
          onClick={() => {
            setEditing(!isEditing);
          }}
        >
          {isEditing ? <SvgSave className="stroke-slate-200" /> : <SvgEdit className="stroke-slate-200" />}
        </button>
      </div>
      {rows.map((row) => (
        <Row key={row.id} isEditing={isEditing} onRemove={removeExperience} rowData={row} />
      ))}
      {/* Editing Actions */}
      {isEditing && (
        <div className="flex justify-center mt-0.5">
          <AddIconBtn onClick={addRow} text="Add experience" />
        </div>
      )}
    </div>
  );
}

function Row({ isEditing, rowData, onRemove }) {
  const [fromYear, setFromYear] = useState(rowData.fromYear);
  const [toYear, setToYear] = useState(rowData.toYear);
  const [city, setCity] = useState(rowData.city);
  const [country, setCountry] = useState(rowData.country);
  const [role, setRole] = useState(rowData.role);
  const [company, setCompany] = useState(rowData.company);

  return (
    <>
      {isEditing ? (
        <article className="mb-5 relative">
          <p className="text-slate-400 text-sm flex items-center gap-0.5">
            <input
              className={styles.inputSM}
              type="text"
              placeholder="Worked from year"
              value={fromYear}
              onChange={(e) => {
                setFromYear(e.target.value);
              }}
            />
            <input
              className={styles.inputSM}
              type="text"
              placeholder="Worked to year"
              value={toYear}
              onChange={(e) => {
                setToYear(e.target.value);
              }}
            />

            <input
              className={styles.inputSM}
              type="text"
              placeholder="Work City"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
            <input
              className={styles.inputSM}
              type="text"
              placeholder="Work Country"
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
          </p>
          <h2 className="text-indigo-500 font-semibold text-sm my-0.5">
            <span className="space-x-0.5 mr-0.5">
              <input
                className={styles.inputSM}
                type="text"
                placeholder="Your role"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              />
            </span>
            <span className="space-x-0.5 mr-0.5">
              <input
                className={styles.inputSM}
                type="text"
                placeholder="Company name"
                value={company}
                onChange={(e) => {
                  setCompany(e.target.value);
                }}
              />
            </span>
          </h2>
          <List isEditing={isEditing} />
          <RemoveIconBtnCustom
            onClick={() => onRemove(rowData.id)}
            text="remove"
            style="text-xs bg-red-500 active:bg-red-600 text-slate-100 flex gap-0.5 px-1 py-0.5 absolute top-0 right-0"
          />
        </article>
      ) : (
        <article className="mb-5">
          <p className="text-slate-400 text-sm">
            {fromYear} - {toYear}, {city}, {country}
          </p>
          <h2 className="text-indigo-500 font-semibold text-sm">
            {role}, {company}
          </h2>
          <List isEditing={isEditing} />
        </article>
      )}
    </>
  );
}

function List({ isEditing }) {
  let [list, setList] = useState([{ id: crypto.randomUUID(), text: "" }]);

  function addItem() {
    setList([...list, { id: crypto.randomUUID(), text: "" }]);
  }

  function remove(id) {
    const filtered = list.filter((item) => item.id !== id);
    setList(filtered);
  }

  return (
    <div>
      <ul className="space-y-0.5">
        {list.map((item) => (
          <ListItem key={item.id} isEditing={isEditing} data={item} onClick={remove} />
        ))}
      </ul>
      {isEditing && (
        <div className="w-full flex justify-center">
          <AddIconBtnCustom
            text="Add work item"
            style="bg-indigo-400 active:bg-indigo-500 flex gap-1 text-slate-100"
            onClick={addItem}
          />
        </div>
      )}
    </div>
  );
}

function ListItem({ isEditing, data, onClick }) {
  const [item, setItem] = useState(data.text);

  return (
    <>
      {isEditing ? (
        <li className={styles.listItemEditing}>
          <input
            className={styles.inputListItem}
            type="text"
            placeholder="Add what you did"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <RemoveIconBtn onClick={() => onClick(data.id)} />
        </li>
      ) : (
        <li className={styles.listItem}>{item}</li>
      )}
    </>
  );
}
