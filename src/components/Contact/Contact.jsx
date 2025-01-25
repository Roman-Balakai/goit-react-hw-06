import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
function Contact({ name, number, id, onDelete }) {
  return (
    <>
      <div className={s.userContainer}>
        <p>
          <span className={s.userIcon}>
            <FaUser />
          </span>
          {name}
        </p>
        <p>
          <span className={s.userIcon}>
            <BsFillTelephoneFill />
          </span>
          {number}
        </p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}

export default Contact;
