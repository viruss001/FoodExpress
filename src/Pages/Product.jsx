import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import response from '../data/tempdata'
import Count from '../Components/Count';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [counter, setCounter] = useState(1);
  const [Clicked, setClicked] = useState(false);


  useEffect(() => {
    const foundProduct = response.find(data => data.id == id);//fetch 
    if (foundProduct) {
      setProduct(foundProduct);
      // Reset image states when product changes
      setImageLoaded(false);
      setImageError(false);
    }
  }, [id]);

  const HandleCart=()=>{
    // console.log(Clicked)
    if(!Clicked){
      
      const obj={
        productId : id,
        Quntity:counter
      }
      console.log(obj)
    }
    setClicked(true)
    

  }


  if (!product) {
    return <div className="p-4">Loading product or product not found...</div>;
  }


  return (
    <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl mx-auto my-8">
      {/* Image section with conditional rendering */}
      {product.img && !imageError ? (
        <figure className="lg:w-1/2 relative">
          <img
            src={product.img}
            alt={product.res_name}
            className={`w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
        </figure>
      ) : (
        <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center">
          <div className="text-center p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mt-2 text-gray-500">Image not available</p>
          </div>
        </div>
      )}

      {/* Product details section */}
      <div className="card-body lg:w-1/2">
        <h2 className="card-title text-2xl font-bold">{product.res_name}</h2>
        <div className="space-y-2">
          <p className="text-lg">
            <span className="font-semibold">Price:</span> ₹{product.price}
          </p>
          <p className="text-lg">
            <span className="font-semibold">Rating:</span> {product.Rating} ★
          </p>
          <p className="text-lg">
            <span className="font-semibold">Location:</span> {product.res_Place}
          </p>
          
        </div>
        <div className="card-actions justify-end mt-4">
          <Count counter={counter} setCounter={setCounter}/>
          <button className="btn btn-primary px-8" onClick={HandleCart }>{!Clicked?"Add To Cart":"Added "}</button>
        </div>
      </div>
    </div>
  );
}

export default Product;