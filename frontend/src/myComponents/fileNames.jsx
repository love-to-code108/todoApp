import React from 'react'
import PropTypes from 'prop-types'

// IMAGES
import fileImage from "../assets/png/document.png"

export const FileNames = (props) => {
    return (
        <div className=' text-xl font-inter w-[80%] p-1 flex mb-1 items-center'>
            
            {/* THE FILES ICON */}
            <div className=' mr-3'>
                <img className=' md:w-[1.5rem] md:h-[1.5rem]' src={fileImage} alt="" />
            </div>

            {/* THE NAME OF THE FILE */}
            <p>{props.value}</p>

        </div>
    )
}


// VALIDATING PROPS
FileNames.propTypes = {
    value: PropTypes.any,
    key: PropTypes.any,
}
