export default function List () {
  return (
    <section className="flex justify-around flex-wrap p-4 m-2">
      <div className="flex bg-white flex-col shadow-lg rounded-lg content-between justify-between hover:bg-gray-50 p-3 m-6 w-60 h-60">
        <p className='text-wrap truncate'>Exemplo de anotação!</p>
        <div className='flex justify-between items-center'>
          <p>04/01/2025 - 21:00h</p>
          <button className="bg-red-500 text-gray-50 p-1 rounded shadow-sm hover:bg-red-700 ">Excluir</button>
        </div>
      </div>
    </section>
  );
};