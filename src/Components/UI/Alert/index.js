import React, { useState } from 'react';
// import PropTypes from 'prop-types';

import { RoundedButton } from '../Button';
import { Cancel, CloseOutlined, InfoOutlined, Warning } from '@mui/icons-material';



export const AlertTitle = ({children}) => {
    return <h2 className='font-semibold'>{children}</h2>
}


function Alert({children, className, type, Icon = false, showIcon = true, closable, onClose, action, title, rounded=true, ...props}) {


    const [open, setClose] = useState(true)
    

    let class_type = "yellow-500"
    let wrapper_class = "text-yellow-800 bg-yellow-100 dark:bg-yellow-800/16 dark:text-yellow-300"

    let IconEl = <Warning className={`w-5 h-5 text-${class_type}`} />
    if(type === "info"){
        class_type = "blue-500"
        wrapper_class = "text-blue-600 bg-blue-100 dark:bg-blue-950/50 dark:text-blue-400"
        IconEl = <InfoOutlined className={`w-5 h-5 text-${class_type}`} />
    }else if(type ===  "success"){
        class_type = "green-500"
        wrapper_class = "text-green-600 bg-green-100 dark:bg-green-950/60 dark:text-green-400"
        IconEl = <svg className={`w-5 h-5 text-${class_type}`} viewBox="0 0 24 24">
            <path className='fill-current' d="M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"></path>
        </svg>
    }else if(type ===  "danger"){
        class_type = "red-500"
        wrapper_class = "text-red-600 bg-red-100 dark:bg-red-800/50 dark:text-red-400"
        IconEl = <Cancel className={`w-5 h-5 text-${class_type}`} />
    }

    if(Icon){
        IconEl = <Icon className={`w-5 h-5 text-${class_type}`} />
    }


    const closeAlert = () => {
        setClose(false)
        if(typeof onClose === "function"){
            onClose()
        }
    }

    if(rounded){
        wrapper_class += " rounded-lg"
    }


    return (
        <>
            { open ?
            <div className={`p-4 relative flex text ` + wrapper_class + " " + className}>
                <div className='flex items-center justify-between w-full'>
                    
                    <div className='flex items-center gap-2 flex-wrap '>
                        {showIcon ? <span> {IconEl} </span> : "" } 
                        {title ? <AlertTitle>{title}</AlertTitle> : null }
                        <div className={title ? "w-full ml-8 tex-sm" : ""}>{children}</div>
                    </div>

                    {closable ? 
                        <div> 
                            {action ? 
                                action : 
                                <RoundedButton onClick={() => closeAlert()}>
                                    <CloseOutlined  className={`w-5 h-5 text-${class_type}`} /> 
                                </RoundedButton>
                            }
                        </div>: ""}
                </div>
                
            </div> : null }
        </>
    );
}

// Alert.PropTypes = {
//     title: PropTypes.string
// }

export default Alert;