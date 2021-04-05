import React from 'react'
import {Link} from 'react-router-dom'

const Button = () => {
    return (
        <div className="grid grid-cols-1">
            <Link className="col-start-1 w-32 px-1 py-2 bg-ice ml-auto mr-4 text-center text-lg text-pinkk font-bold italic rounded" to="./UserLookUp">User look Up</Link>
        </div>
    )
}

export default Button;