import React from 'react';

function NotifcationHighlighter(props) {

    const color = props.color ?? "primary"

    const element = <>
            {props.children}
            <span className="absolute top-[1px] flex h-3 w-3 ltr:right-[-2px] rtl:left-[-2px]">
                <span className={`absolute top-[-2px] inline-flex h-full w-full animate-ping rounded-full bg-${color} opacity-75 ltr:-left-[3px] rtl:-right-[3px]`}></span>
                <span className={`relative top-[1px] inline-flex h-[8px] w-[8px] rounded-full bg-${color}`}></span>
            </span>
        </>

    return (
        <>
            {
                props.has_el ? element :

                <div className='relative p-1'>
                    {element}
                </div>
            }
        </>
    );
}

export default NotifcationHighlighter;