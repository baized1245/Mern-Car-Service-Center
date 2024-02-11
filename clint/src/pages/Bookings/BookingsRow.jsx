import React from 'react'

const BookingsRow = ({ booking, index }) => {
  const { img, date, price, service } = booking
  return (
    <tr>
      <th>{index}</th>
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
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  )
}

export default BookingsRow
