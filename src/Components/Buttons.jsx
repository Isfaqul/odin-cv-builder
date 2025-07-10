import { SvgAdd, SvgEdit, SvgRemove, SvgSave } from "./SVGIcons";

const styles = {
  button: "cursor-pointer bg-slate-500 p-1 rounded-sm stroke-slate-200 active:bg-slate-600",
  addButton:
    "text-xs uppercase flex items-center text-slate-200 gap-1 text-bold cursor-pointer bg-slate-500 px-2 py-0.5 rounded-sm stroke-slate-200 active:bg-slate-600",
};

export function RemoveIconBtn({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <SvgRemove />
    </button>
  );
}

export function EditIconBtn({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <SvgEdit />
    </button>
  );
}

export function SaveIconBtn({ onClick }) {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <SvgSave />
    </button>
  );
}

export function AddIconBtn({ onClick, text = "" }) {
  return (
    <button type="button" className={styles.addButton} onClick={onClick}>
      {text && <span>{text}</span>}
      <SvgAdd />
    </button>
  );
}
