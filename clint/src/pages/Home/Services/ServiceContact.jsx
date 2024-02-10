import React from 'react'
import { FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'

const ServiceContact = () => {
  return (
    <div className="bg-black bg-opacity-80 h-auto mx-auto rounded-sm my-10">
      <div className="flex items-center justify-evenly">
        <div className="p-1 md:p-8 lg:p-20 flex space-x-5">
          <FaCalendarAlt
            size={30}
            className="bg-white my-auto text-[#FF3811]"
          />
          <div>
            <p className="text-white text-lg font-semibold">
              We are open monday-friday
            </p>
            <h2 className="text-white text-2xl font-bold">7:00 am - 9:00 pm</h2>
          </div>
        </div>
        <div className="p-1 md:p-8 lg:p-20 flex space-x-5">
          <FaPhoneAlt
            size={30}
            className="bg-white my-auto rounded-md text-[#FF3811]"
          />
          <div>
            <p className="text-white text-lg font-semibold">Have a question?</p>
            <h2 className="text-white text-2xl font-bold">+2423435546 </h2>
          </div>
        </div>
        <div className="p-1 md:p-8 lg:p-20 flex space-x-5">
          <IoLocationSharp
            size={30}
            className="bg-white my-auto text-[#FF3811]"
          />
          <div>
            <p className="text-white text-lg font-semibold">
              Need a repair? Our address
            </p>
            <h2 className="text-white text-2xl font-bold">
              Liza Street, New York
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceContact
