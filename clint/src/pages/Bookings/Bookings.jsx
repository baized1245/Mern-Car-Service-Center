import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import BookingsRow from './BookingsRow'

const Bookings = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])

  const url = `http://localhost:5000/bookings?email=${user?.email}`
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data)
      })
  }, [])

  return (
    <div>
      <h1>Bookings</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking, index) => (
              <BookingsRow booking={booking} serial={index} key={booking._id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bookings
