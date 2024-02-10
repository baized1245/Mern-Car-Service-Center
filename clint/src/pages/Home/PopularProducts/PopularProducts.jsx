import React from 'react'
import product1 from '../../../assets/images/products/1.png'
import product2 from '../../../assets/images/products/2.png'
import product3 from '../../../assets/images/products/3.png'
import product4 from '../../../assets/images/products/4.png'
import product5 from '../../../assets/images/products/5.png'
import product6 from '../../../assets/images/products/6.png'

const PopularProducts = () => {
  return (
    <div className="mt-4">
      <div className="text-center space-y-3 mb-5">
        <h3 className="text-2xl text-[#FF3811] font-bold">Popular Products</h3>
        <h3 className="text-5xl font-semibold">Browse Our Products</h3>
        <p className="text-black text-base">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
      {/* .....products div */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {/* product child */}
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
          <figure className="px-10 pt-10">
            <img src={product1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Car Led Light</h2>
            <p className="text-lg font-semibold text-[#FF3811] ">
              Price : $ 20.00
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
          <figure className="px-10 pt-10">
            <img src={product2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Car Hydrolic break</h2>
            <p className="text-lg font-semibold text-[#FF3811] ">
              Price : $ 20.00
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
          <figure className="px-10 pt-10">
            <img src={product3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Car engine pluge</h2>
            <p className="text-lg font-semibold text-[#FF3811] ">
              Price : $ 20.00
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
          <figure className="px-10 pt-10">
            <img src={product4} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Car engine pluge</h2>
            <p className="text-lg font-semibold text-[#FF3811] ">
              Price : $ 20.00
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
          <figure className="px-10 pt-10">
            <img src={product5} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Car engine pluge</h2>
            <p className="text-lg font-semibold text-[#FF3811] ">
              Price : $ 20.00
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
          <figure className="px-10 pt-10">
            <img src={product6} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Car tayar</h2>
            <p className="text-lg font-semibold text-[#FF3811] ">
              Price : $ 20.00
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        {/* ......... */}
      </div>
      <div className="text-center mt-5 mb-12">
        <button className="px-2 py-1 btn text-white bg-[#FF3811]">
          More Products
        </button>
      </div>
    </div>
  )
}

export default PopularProducts
