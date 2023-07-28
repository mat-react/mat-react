export const Heading = ({type, className, children}) => {

    const Tag = type ?? "p"

    return(
        <Tag className={['font-heading text-sm font-semibold leading-tight text-muted-800 dark:text-white', className].join(" ")}>
            {children}
        </Tag>
    )
}