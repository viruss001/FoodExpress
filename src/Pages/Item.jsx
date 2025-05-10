import React from 'react';
import Star from '../Components/Star';
import { useNavigate } from 'react-router-dom'

function Item({ data }) {
  let navi = useNavigate()
  function capitalizeFirstLetter(str) {
    if (!str) return str; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const handleclick =(id)=>{
navi(`product/${id}`)
  }
  return (
    <div className="card bg-base-100 shadow-sm m-0.5" key={data.id}>
      <figure className="px-10 pt-10">
        <img
          src={data.img}
          alt={data.res_name}
          className="rounded-xl w-full h-48 object-fill " // Fixed dimensions + aspect ratio control
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{capitalizeFirstLetter(data.res_name)}</h2>
        <p><Star /><b>{data.Rating}*-*{data.time}</b></p>
        <p className='text-xl text-decoration-line: underline'>At just ₹{data.price}</p>
        <p>{data.res_Place}</p>
        <div className="card-actions">
          <button className="btn btn-primary"onClick={()=>handleclick(data.id)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Item;