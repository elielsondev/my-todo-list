import { PropTypes } from 'prop-types';
export default function List({ itemCreate, setItemCreate }) {

  const handleClick = (i, arr, num) => {
    arr.splice(i, num);
    setItemCreate([...arr]);
  };

  return (
    <section className="flex justify-around flex-wrap p-4 m-2">
      { itemCreate.map(({id, description, data}, i, arr) => (
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