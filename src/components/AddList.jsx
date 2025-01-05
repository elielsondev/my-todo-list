import { PropTypes } from "prop-types";

export default function AddList({ text, setText, itemCreate, setItemCreate }) {
  
    // A tarefa não pode ser salva com menos de 10 ou mais de 180 caracteres;
  const activeButton =
    text.length <= 10 || text.length >= 181
      ? { backgroundColor: "gray" }
      : null;

  text.length >= 180 ? alert("Limite de caracteres atingido") : null;

  const handleClick = (e) => {
    e.preventDefault();
    setItemCreate([
      ...itemCreate,
      {
        id: itemCreate.length + 1,
        description: text[0].toUpperCase() + text.substring(1),
        data: new Date().toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      }
    ]);
        
    setText('');
  };

  return (
    <form onKeyPress={handleClick}>
      <input
        className="outline-gray-400 p-2 m-1 border-2 border-solid rounded shadow-md"
        type="text"
        name="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Inserir nova tarefa"
      />
      
      <input
        className="bg-green-600 active:bg-green-500 text-sky-50 p-2 m-0 shadow-md font-black rounded"
        type="button"
        style={activeButton}
        disabled={text.length < 10 || text.length >= 181}
        onClick={handleClick}
        value="Adicionar"
      />
      
      <p className="font-mono	text-sky-50">
        caracteres restantes: {180 - text.length}
      </p>
    </form>
  );
}

AddList.propTypes = {
  text: PropTypes.string,
  setText: PropTypes.function,
  itemCreate: PropTypes.array,
  setItemCreate: PropTypes.function
};
