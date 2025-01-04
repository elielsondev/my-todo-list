export default function AddList() {
  return (
    <form>
      <input
        className="outline-gray-400 p-2 m-1 border-2 border-solid rounded shadow-md"
        type="text"
        name="text"
        placeholder="Inserir nova tarefa"
      />
      <input
        className="bg-green-600 active:bg-green-500 text-sky-50 p-2 m-0 shadow-md font-black rounded"
        type="button"
        value="Adicionar"
      />
      <p className="font-mono text-sky-50">
        caracteres restantes: {180}
      </p>
    </form>
  );
}
