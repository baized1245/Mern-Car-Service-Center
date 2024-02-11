import React from 'react'
import { FaEraser, FaDeleteLeft } from 'react-icons/fa6'

const BookingsRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, img, date, price, service, status } = booking

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle bg-white"
        >
          <FaDeleteLeft className="text-[#FF3811]" size={20} />
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-12 h-12">
            <img src={img} alt="" />
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>$ : {price}</td>
      <th>
        {status === 'confirm' ? (
          <span className="text-[#FF3811] text-base">Confirm</span>
        ) : (
          <button
            onClick={() => handleBookingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  )
}

export default BookingsRow
