import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  const location = useLocation()
  // const navigate = useNavigate()
  // const form = location.state.pathName

  if (loading) {
    return <progress className="bg-[#FF3811] progress w-56"></progress>
  }

  if (user?.email) {
    return children
  }

  return <Navigate state={location.pathname} to="/login" replace></Navigate>
}

export default PrivateRoute
