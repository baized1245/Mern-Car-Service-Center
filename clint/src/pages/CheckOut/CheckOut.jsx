import React from 'react'
import { useLoaderData } from 'react-router-dom'

const CheckOut = () => {
  const service = useLoaderData()
  const { title, _id } = service
  return (
    <div>
      <h2>Book Service:{title}</h2>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-[#FF3811] text-white btn-outline btn-block"
            type="submit"
            value="Order Confirm"
            name=""
            id=""
          />
        </div>
      </form>
    </div>
  )
}

export default CheckOut