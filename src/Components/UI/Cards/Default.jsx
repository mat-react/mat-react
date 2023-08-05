import React from 'react';

export const DefaultCard = ({children, className = ""}) => {
    return (
        <div className={["border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl p-4", className].join(" ")}>
            {children}
        </div>
    );
}

export const DefaultCardHeader = (props) => {
    return (
        <div>
            <div className='mb-4 flex items-center justify-between'>
                {props.children}
            </div>
        </div>
    );
}

export const DefaultCardFooter = ({children}) => {
    return (
        <div className='px-4 py-2 bg-muted-100 border-t dark:border-muted-900 dark:bg-muted-700'>
            {children}
        </div>
    );
}

export const DefaultCardText = ({className = "", title = false, text = "", color = "muted-400"}) => {
    return (
        <div className={className}>
            {
                title ? <h3 className="font-heading text-base font-medium leading-tight text-muted-800 mb-1 dark:text-white">
                    <span>{title}</span>
                </h3> : ""
            }
            <p className={"font-alt text-xs font-normal leading-normal"}>
                <span className={`text-${color}`}>
                    {text}
                </span>
            </p>
        </div>
    );
}