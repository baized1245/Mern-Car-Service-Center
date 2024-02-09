import React, { useContext } from 'react'
import loginImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

const Login = () => {
  const { signIn } = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value

    // login or sign in user
    // Craete User
    signIn(email, password)
      .then((result) => {
        const user = result.user
        console.log(user)
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
            <h1 className="text-3xl text-center font-bold">Login now!</h1>
            <form onSubmit={handleLogin}>
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
                {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary btn-outline"
                  type="submit"
                  value="Login"
                  name=""
                  id=""
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Don't have any account? Please{' '}
              <Link className="underline text-rose-800 text-lg" to="/signup">
                signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
