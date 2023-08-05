import { IconButton } from "@mui/material"

export const RoundedButton = ({children, className, color = "muted-400", ...props}) => {

    const baseClasses = `!text-${color} dark:!text-white hover:!bg-primary-500/20 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-300 hover:!text-primary`;
    const classes = `${baseClasses} ${className || ''}`.trim();

    return (
        <IconButton {...props} className={classes}>
            {children}
        </IconButton>
    )
}