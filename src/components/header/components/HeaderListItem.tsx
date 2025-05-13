import styles from "../header.module.css"

function HeaderListItem({children}:React.LiHTMLAttributes<HTMLLIElement>){
  return (
    <li className={styles.menuitem}>
        {children}
    </li>
  )
}

export default HeaderListItem
