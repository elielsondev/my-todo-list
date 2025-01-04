export default function AddList() {
  return (
    <form>
      <input
        type="text"
        name="text"
        placeholder="Inserir nova tarefa"
      />
      <input
        type="button"
        value="Adicionar"
      />
      <p>
        caracteres restantes: {180}
      </p>
    </form>
  );
}
