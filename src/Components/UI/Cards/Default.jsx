import React from 'react';

export const DefaultCard = (props) => {
    return (
        <div className="border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl p-4">
            {props.children}
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

export const DefaultCardText = (props) => {
    return (
        <div className={props.className}>
            {
                props.title ? <h3 className="font-heading text-base font-medium leading-tight text-muted-800 mb-1 dark:text-white">
                    <span>{props.title}</span>
                </h3> : ""
            }
            <p className={"font-alt text-xs font-normal leading-normal"}>
                <span className={`text-${props.color ?? "muted-400"}`}>
                    {props.text}
                </span>
            </p>
        </div>
    );
}