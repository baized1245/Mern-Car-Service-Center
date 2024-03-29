import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import BookingsRow from './BookingsRow'

const Bookings = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])

  const url = `https://mern-car-service-center.vercel.app/bookings?email=${user?.email}`
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data)
      })
  }, [url])

  const handleDelete = (id) => {
    const proceed = confirm('Are Your Sure?')
    if (proceed) {
      fetch(`https://mern-car-service-center.vercel.app/bookings/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.deletedCount > 0) {
            alert('Deleted successfully')
            const remaining = bookings.filter((booking) => booking._id !== id)
            setBookings(remaining)
          }
        })
    }
  }

  const handleBookingConfirm = (id) => {
    fetch(`https://mern-car-service-center.vercel.app/bookings/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ status: 'confirm' }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          // update state
          const remaining = bookings.filter((booking) => booking._id !== id)
          const updated = bookings.find((booking) => booking._id === id)
          updated.status = 'confirm'
          const newBookings = [updated, ...remaining]
          setBookings(newBookings)
        }
      })
  }

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
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {bookings.map((booking) => (
              <BookingsRow
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
                key={booking._id}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Bookings
