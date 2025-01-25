import s from "./SeachBox.module.css";
function SeachBox({ value, onFilter }) {
  return (
    <div className={s.seachBoxContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}

export default SeachBox;
