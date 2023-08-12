import React from 'react';

function Avatar({src, alt="Avatar", rounded="full", size="sm", mask=false, badgeSrc}) {

    let conatiner_class = `relative inline-flex shrink-0 items-center justify-center outline-none`
    let avatar_class = `flex h-full w-full items-center justify-center overflow-hidden text-center transition-all duration-300`

    let size_class = "h-10 w-10"
    let wh = "5"
    if(size === "xs"){
        size_class = "h-8 w-8"
        wh = "4"
    }else if (size === "md"){
        size_class = "h-12 w-12"
        wh = "5"
    }else if (size === "lg"){
        size_class = "h-16 w-16"
        wh = "6"
    }else if (size === "xl"){
        size_class = "h-20 w-20"
        wh = "8"
    }else if (size === "2xl"){
        size_class = "h-24 w-24"
        wh = "10"
    }else if (size === "3xl"){
        size_class = "h-28 w-28"
        wh = "10"
    }else if (size === "4xl"){
        size_class = "h-32 w-32"
        wh = "12"
    }
    conatiner_class += " " + size_class

    let rounded_class = "full"
    if(rounded === "curved"){
        rounded_class = size === "xs" ? "lg" : size === "sm" ? "xl" : size === "md" || size === "lg" ? "2xl" : "3xl"
    }

    if(mask){
        conatiner_class += " avt-mask avt-mask-"+mask
        rounded_class = ""
    }

    conatiner_class += " rounded-"+rounded_class
    avatar_class += " rounded-"+rounded_class

    let badge_el = null 
    if(badgeSrc){
        badge_el = <div 
            className={`dark:bg-muted-800 absolute z-10 block overflow-hidden rounded-full bg-white h-${wh} w-${wh} ${rounded === "full" ? 'bottom-0 end-0' : '-bottom-2 -end-2'}`}>
        <img src={badgeSrc} className="relative h-full w-full scale-90 rounded-full object-cover" alt="Badge"
        />
    </div>
    }

    return (
        <div className={conatiner_class}>
            <div className={avatar_class}>
                <img src={src} alt={alt} />
            </div>
            {badge_el}
        </div>
    );
}

export default Avatar;