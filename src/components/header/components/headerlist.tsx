import styles from "../header.module.css"

function Headerlist({children}:React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={styles.cabecalho}>
        {children}
    </ul>
  )
}

export default Headerlist
