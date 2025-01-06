import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
export default function List({ itemCreate, setItemCreate }) {
  let itensStorage = JSON.parse(localStorage.getItem('todo-list'));
  let setItensStorage = localStorage.setItem('todo-list', JSON.stringify(itemCreate));
  
  useEffect(() => {
    setItensStorage
    
    if (itensStorage) {
      setItemCreate(itensStorage);
    };
  }, [setItemCreate]);

  const handleClick = (i, arr, num) => {
    // Modifica o conteúdo de um array, removendo elementos e adicionando novos
    arr.splice(i, num);
    
    // Modifica o conteúdo de um array, adicionando novos elementos
    setItemCreate([...arr]);
  };

  return (
    <section className="flex justify-around flex-wrap p-4 m-2">
      { itensStorage.map(({id, description, data}, i, arr) => (
        <div key={id} className="flex bg-white flex-col shadow-lg rounded-lg content-evenly justify-between hover:bg-gray-50 p-3 m-6 w-60 h-60">
        <p className='text-wrap truncate' title={description}>{description}</p>
        <div className='flex justify-between items-center'>
          <p>{data}h</p>
          <button onClick={() => handleClick(i, arr, 1)} className="bg-red-500 text-gray-50 p-1 rounded shadow-sm hover:bg-red-700 ">Excluir</button>
        </div>
      </div>
      )) }
    </section>
  );
}

List.propTypes = {
  itemCreate: PropTypes.string,
  setItemCreate: PropTypes.func
};
