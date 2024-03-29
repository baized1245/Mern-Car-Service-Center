import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import loginImg from '../../assets/images/login/login.svg'
import { AuthContext } from '../../provider/AuthProvider'

const SignUp = () => {
  const { createUser } = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()

  const handleSignUp = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

    // Craete User
    createUser(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
        navigate(location?.state ? location.state : '/', { replace: true })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-12">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Signup now!</h1>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
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
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-[#FF3811] text-white btn-outline"
                  type="submit"
                  value="Signup"
                  name=""
                  id=""
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already have an account? Please{' '}
              <Link className="underline text-[#FF3811] text-lg" to="/login">
                login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
