import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

const CheckOut = () => {
  const service = useLoaderData()
  const { title, _id, price } = service

  const { user } = useContext(AuthContext)

  const handleBookService = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const date = form.date.value
    const email = user?.email
    const due = form.due.value
    const order = {
      customerName: name,
      email,
      date,
      service: _id,
      price: due,
    }
    console.log(order)
  }

  return (
    <div className="my-16">
      <h2 className="text-3xl text-center text-[#FF3811] font-bold">
        Book Service :{' '}
        <span className="text-black text-opacity-85">{title}</span>
      </h2>

      <form onSubmit={handleBookService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
              name="due"
              defaultValue={price}
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
