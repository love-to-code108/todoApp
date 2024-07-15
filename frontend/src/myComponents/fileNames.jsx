import React, { useState } from 'react'
import PropTypes from 'prop-types'

// IMAGES
import fileImageImg from "../assets/png/document.png"
import fileImageSelect from "../assets/png/right-arrow.png"


export const FileNames = (props) => {
    
    // FILE IMAGE STATE DECLARATION
    const [fileImage , setFileImage] = useState(fileImageImg);

    const changeFileImageSelected = () => {
        

        setFileImage(fileImageSelect);
        console.log("working");
    }





    return (
        <div onClick={changeFileImageSelected}
         className=' text-xl font-inter w-[80%] p-1 flex mb-1 items-center fileNamesComponent'>
            
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
