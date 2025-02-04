import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SeachBox from "./components/SeachBox/SeachBox";

function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SeachBox />
      <ContactList />
    </div>
  );
}

export default App;
