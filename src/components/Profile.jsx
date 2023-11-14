import React, {useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
    if (!user) return <div>Not found</div>
    else return <div>welocome : { user.userName }</div>
}

export default Profile
