import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import ServiceContact from './ServiceContact'

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('services.json')
      .then((res) => res.json())
      .then((data) => {
        setServices(data)
      })
  }, [])

  return (
    <div className="mt-4">
      <div className="text-center space-y-3">
        <h3 className="text-2xl text-[#FF3811] font-bold">Service</h3>
        <h3 className="text-5xl font-semibold">Our Services</h3>
        <p className="text-black text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem hic
          asperiores consequuntur aliquam, <br /> aut cum excepturi, eos enim
          quaerat sunt aperiam ipsum atque animi molestias!
        </p>
      </div>
      {/* <div>
        <h3 className="text-3xl">Service</h3>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center mt-5 mb-12">
        <button className="px-2 py-1 btn text-white bg-[#FF3811]">
          More services
        </button>
      </div>
      <ServiceContact />
    </div>
  )
}

export default Services
