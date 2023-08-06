import { IconButton } from "@mui/material"
import AppConfig from "../../../app.config";
import { Link } from "react-router-dom";

export const RoundedButton = ({children, className, color = "muted-400", ...props}) => {

    const baseClasses = `!text-${color} dark:!text-white hover:!bg-primary-500/20 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 hover:!text-primary`;
    const classes = `${baseClasses} ${className || ''}`.trim();

    return (
        <IconButton {...props} className={classes}>
            {children}
        </IconButton>
    ) 
}

const RoundedOptions = {
    NONE: "straight",
    CURVED: "curved",
    FULL: "full"
};

const ColorOptions = {
    PRIMARY: "primary",
    INFO: "info",
    SUCCESS: "success",
    WARNING: "warning",
    DANGER: "danger",
    MUTED: "muted",
};

const SizeOptions = {
    sm: "sm", 
    md: "md", 
    xl: "xl", 
    xxl: "xxl"
}

const TypeOptions = {
    solid: "solid", 
    outline: "outline", 
    pastel: "pastel", 
}


const Button = ({
        children, className, shadow, 
        shape=AppConfig.ui.defaultShape.button ?? "rounded", 
        to, color, size, type, ...props 
    }) => {


    let buttonClasses = "button"

    let roundedClass = "rounded"
    if(shape === RoundedOptions.CURVED){
        roundedClass = "rounded-xl ";
    }else if(shape === RoundedOptions.NONE){
        roundedClass = ""
    }else if(shape === RoundedOptions.FULL){
        roundedClass = "rounded-full"
    }
    buttonClasses += " " + roundedClass


    let colorClasses = "button-default"
    if(color === "primary" || color === "info" || color === "success" || color === "warning" || color === "danger" || color === "muted"){
        if(color === ColorOptions.MUTED){
            colorClasses = "border text-muted-500 bg-muted-200 border-muted-200 dark:text-white dark:bg-muted-700 dark:border-muted-700 dark:hover:enabled:bg-muted-600 dark:focus-visible:bg-muted-600 hover:enabled:bg-muted-100 focus-visible:bg-muted-100 active:enabled:bg-muted-200 dark:active:enabled:bg-muted-700";
        }else {
            colorClasses = `bg-${color}-500 dark:bg-${color}-500 hover:enabled:bg-${color}-400 dark:hover:enabled:bg-${color}-400 text-white focus-visible:outline-${color}-400/70 focus-within:outline-${color}-400/70 focus-visible:bg-${color}-500 active:enabled:bg-${color}-500 dark:focus-visible:outline-${color}-400 dark:focus-within:outline-${color}-400 dark:focus-visible:bg-${color}-500 dark:active:enabled:bg-${color}-500`
        }
    }
    

    switch (type) {
        case TypeOptions.outline:
            // colorClasses = "bg-primary-500 dark:bg-primary-500 hover:enabled:bg-primary-400 dark:hover:enabled:bg-primary-400 text-white focus-visible:outline-primary-400/70 focus-within:outline-primary-400/70 focus-visible:bg-primary-500 active:enabled:bg-primary-500 dark:focus-visible:outline-primary-400 dark:focus-within:outline-primary-400 dark:focus-visible:bg-primary-500 dark:active:enabled:bg-primary-500";
            break;
        case TypeOptions.pastel:
            // colorClasses = "bg-info-500 dark:bg-info-500 text-white hover:enabled:bg-info-400 dark:hover:enabled:bg-info-400 focus-visible:outline-info-400/70 focus-within:outline-info-400/70 focus-visible:bg-info-500 active:enabled:bg-info-500 dark:focus-visible:outline-info-400/70 dark:focus-within:outline-info-400/70 dark:focus-visible:bg-info-500 dark:active:enabled:bg-info-500";
            break;
        default:
    }


    let sizeClasses = ""
    switch(size) {
        case SizeOptions.sm:
            sizeClasses = "button-sm"
            break
        case SizeOptions.xl:
            sizeClasses = "button-xl"
            break
        case SizeOptions.xxl:
            sizeClasses = "button-xxl"
            break
        default:
    }

    buttonClasses += " " + colorClasses + " " + sizeClasses

    return (
        <>
            {to ? <Link className={buttonClasses} to={to} {...props} >{children}</Link> : <button className={buttonClasses} {...props}>{children}</button>}
            
        </>
    )

}


export default Button