import { useState } from "react";
import { RemoveIconBtn, AddIconBtn } from "./Buttons";
import { SvgEdit, SvgSettings, SvgSave } from "./SVGIcons";

let styles = {
  th: "uppercase text-left px-2 bg-slate-700 text-slate-300 font-semibold text-sm rounded-sm py-0.5 tracking-wide",
  td: "px-2 py-0.5 bg-slate-200 rounded-sm text-sm",
  tdInput: "bg-slate-200 rounded-sm text-sm",
  input: "block w-full px-2 py-0.5",
  label: "block w-full",
};

export function Table() {
  let [isEditing, setEditing] = useState(true);
  let [rows, setRows] = useState([{ id: crypto.randomUUID(), course: "", uni: "", grade: "", year: "" }]);

  function addRow() {
    setRows([...rows, { id: crypto.randomUUID(), course: "", uni: "", grade: "", year: "" }]);
  }

  function removeRow(id) {
    let filter = rows.filter((row) => row.id !== id);
    setRows(filter);
  }

  return (
    <div className="relative">
      <div className="flex justify-end px-0.5 absolute -top-9 right-0 bg-slate-100">
        <button
          className="cursor-pointer bg-slate-500 p-1 rounded-sm stroke-slate-200 active:bg-slate-600 print:hidden hide-on-print"
          onClick={() => {
            setEditing(!isEditing);
          }}
        >
          {isEditing ? <SvgSave className="stroke-slate-200" /> : <SvgEdit className="stroke-slate-200" />}
        </button>
      </div>
      <table className="w-full border-separate">
        <thead>
          <tr>
            <th className={styles.th}>Course</th>
            <th className={styles.th}>University / Board</th>
            <th className={styles.th}>Grade (%)</th>
            <th className={styles.th}>Year</th>
            {isEditing && (
              <th className={styles.th}>
                <SvgSettings className="stroke-slate-200 block mx-auto" />
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <Row key={row.id} isEditing={isEditing} rowData={row} onRemove={removeRow} />
          ))}
        </tbody>
      </table>
      {isEditing && (
        <div className="flex justify-center mt-0.5">
          <AddIconBtn onClick={addRow} text="Add row" />
        </div>
      )}
    </div>
  );
}

function Row({ isEditing, rowData, onRemove }) {
  const [course, setCourse] = useState(rowData.course);
  const [uni, setUni] = useState(rowData.uni);
  const [grade, setGrade] = useState(rowData.grade);
  const [year, setYear] = useState(rowData.year);

  return (
    <>
      {isEditing ? (
        <tr>
          <td className={styles.tdInput}>
            <label className={styles.label} htmlFor="" aria-label="Course Input">
              <input
                className={styles.input}
                type="text"
                aria-label="Course Input Field"
                placeholder="Your course"
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              />
            </label>
          </td>
          <td className={styles.tdInput}>
            <label className={styles.label} htmlFor="" aria-label="University / Board Input">
              <input
                className={styles.input}
                type="text"
                aria-label="University / Board Input Field"
                placeholder="Course University / Board"
                value={uni}
                onChange={(e) => {
                  setUni(e.target.value);
                }}
              />
            </label>
          </td>
          <td className={styles.tdInput}>
            <label className={styles.label} htmlFor="" aria-label="Grade Input">
              <input
                className={styles.input}
                type="text"
                aria-label="Grade Input Field"
                placeholder="Your grade in %"
                value={grade}
                onChange={(e) => {
                  setGrade(e.target.value);
                }}
              />
            </label>
          </td>
          <td className={styles.tdInput}>
            <label className={styles.label} htmlFor="" aria-label="Year Input">
              <input
                className={styles.input}
                type="text"
                aria-label="Year Input Field"
                placeholder="Year completed"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
            </label>
          </td>
          <td className={styles.td}>
            <RemoveIconBtn onClick={() => onRemove(rowData.id)} />
          </td>
        </tr>
      ) : (
        <tr>
          <td className={styles.td}>{course}</td>
          <td className={styles.td}>{uni}</td>
          <td className={styles.td}>{grade}</td>
          <td className={styles.td}>{year}</td>
        </tr>
      )}
    </>
  );
}
