import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dropdown(props) {

    const [open, setOpen] = useState(false)

    const open_drop = () => {
        setOpen(!open)
    }

    return (
        <div className='relative text-left'>
            
            <div>
                <button onClick={() => open_drop()} className='button rounded button-default !pe-3 !ps-4'>
                    <span>Dropdown</span>
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" class={`icon text-muted-400 h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m6 9l6 6l6-6"></path>
                    </svg>
                </button>
            </div>

            {
                open ? 

                <div className='absolute bg-white border border-muted-200 dark:bg-muted-800 transition-width duration-300 dark:border-muted-700 focus:outline-none mt-2 origin-top-left rounded-md shadow-lg start-0 w-72 z-10'>
                    <div className='p-2'>
                        <div>
                            <Link to={"#"} className='router-link-active router-link-exact-active group/nui-dropdown-item flex w-full items-center justify-start rounded-md px-3 py-2 text-left text-sm transition-colors duration-300 text-muted-500'>
                                <div className="grow">
                                    <div className="font-heading text-muted-800 text-xs font-semibold leading-tight dark:text-white">
                                        Profile
                                    </div>
                                    <p className="text-muted-400 font-sans text-xs">View your profile</p></div>
                            </Link>
                        </div>
                    </div>
                </div>

                : null 
            }

        </div>
    );
}

export default Dropdown;