import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
function ContactList({ contacts, onDelete }) {
  return (
    <>
      <ul className={s.contactList}>
        {contacts.map((contact) => (
          <li key={contact.id} className={s.listItem}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
