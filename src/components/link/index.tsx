import styles from "./link.module.css"

function Link({children, ...rest}:React.AnchorHTMLAttributes<HTMLAnchorElement>){
    return(
        <a href="" className={styles.link} {...rest}>
            {children}
        </a>
    )
}
export default Link