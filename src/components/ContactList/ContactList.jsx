import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectFilters } from "../../redux/filtersSlice";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const filterData = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={s.contactList}>
        {filterData.map((contact) => (
          <li key={contact.id} className={s.listItem}>
            <Contact {...contact} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList;
