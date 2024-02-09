import React from 'react'
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img
            src={person}
            className="w-3/4 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in"
          />
          <img
            src={parts}
            className="w-1/2 absolute right-5 top-1/2 rounded-lg ring-8 ring-rose-700 shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in"
          />
        </div>
        <div className="lg:w-1/2 space-y-5">
          <h3 className="text-3xl text-rose-700 font-bold">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="text-black text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut
            assumenda excepturi exercitationem quasi. In deleniti eaque aut
            repudiandae et a id nisi.
          </p>
          <p className="text-black text-base">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn bg-rose-700 text-white text-base">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default About
