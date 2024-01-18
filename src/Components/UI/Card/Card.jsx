import React from 'react';

const Card = ({children}) => {
    return (
        <div className='border-muted-200 dark:border-muted-700 dark:bg-muted-800 relative w-full border bg-white transition-all duration-300 rounded-xl flex items-center gap-2 p-3'>
            {children}
        </div>
    );
}

export default Card;
