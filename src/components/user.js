import * as React from "react"

const User = () => {
  return (
    <div className="user-container">
      <svg height="30" width="80">
        <polygon points="0,0 0,15 80,80 80,0" fill="#0ac3d5" />
        <text x="50%" y="50%" color="black">User</text>
      </svg>
      <div className="user">
        Trevor Von Bruenchenhein
      </div>
    </div>
  )
}

export default User
