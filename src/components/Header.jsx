import AddList from "./AddList";
import PropTypes from "prop-types";

export default function Header({ text, setText, itemCreate, setItemCreate }) {
  return (
    <header className="flex justify-evenly items-center bg-sky-500 p-2 w-full shadow-lg	">
      <h1 className="text-4xl font-sans text-sky-50 font-black">
        My Todo List
      </h1>
      <AddList
        text={text}
        setText={setText}
        itemCreate={itemCreate}
        setItemCreate={setItemCreate}
      />
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.function,
  itemCreate: PropTypes.array,
  setItemCreate: PropTypes.function,
};