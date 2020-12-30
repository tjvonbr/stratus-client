import * as React from "react"
import { FaUser } from "react-icons/fa"


const User = () => {
  return (
    <div className="user-container">
      <FaUser color="#0ac3d5" size={20} />
      <div className="user">
        Trevor Von Bruenchenhein
      </div>
    </div>
  )
}

export default User
