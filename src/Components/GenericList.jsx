import { useState } from "react";
import { AddIconBtn, RemoveIconBtn } from "./Buttons.jsx";
import { SvgEdit, SvgSave } from "./SVGIcons.jsx";

let styles = {
  inputSM: "border border-slate-500 px-1 rounded-sm text-sm",
  listItem: "text-xs text-slate-500 list-disc ml-4",
  listItemEditing:
    "relative text-slate-500 flex justify-center gap-0.5 pl-4 before:content-['•'] before:text-lg before:absolute before:-left-[1px] before:text-slate-500",
  inputListItem: "border border-slate-500 px-1 rounded-sm text-xs w-full",
};

export function GenericList() {
  let [isEditing, setEditing] = useState(true);
  let [list, setList] = useState([{ id: crypto.randomUUID(), text: "" }]);

  function addItem() {
    setList([...list, { id: crypto.randomUUID(), text: "" }]);
  }

  function remove(id) {
    const filtered = list.filter((item) => item.id !== id);
    setList(filtered);
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
      <ul className="space-y-0.5">
        {list.map((item) => (
          <Certificate key={item.id} isEditing={isEditing} data={item} onClick={remove} />
        ))}
      </ul>
      {/* Editing Actions */}
      {isEditing && (
        <div className="flex justify-center mt-0.5">
          <AddIconBtn onClick={addItem} text="Add item" />
        </div>
      )}
    </div>
  );
}

function Certificate({ isEditing, data, onClick }) {
  const [text, setText] = useState(data.text);

  return (
    <>
      {isEditing ? (
        <li className={styles.listItemEditing}>
          <input
            className={styles.inputListItem}
            type="text"
            placeholder="Description of item"
            value={text.toString()}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <RemoveIconBtn onClick={() => onClick(data.id)} />
        </li>
      ) : (
        <li className={styles.listItem}>{text}</li>
      )}
    </>
  );
}
