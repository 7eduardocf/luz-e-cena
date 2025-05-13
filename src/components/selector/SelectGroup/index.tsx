import styles from "./SelectorGroup.module.css"

interface SelectGroupProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    icon?: React.ReactNode
}

function SelectGroup({icon,children, ...rest}: SelectGroupProps) {
  return (
    <div className={styles.container}>
        {icon &&
            <div className={styles.icone}>
                {icon}
            </div>
        }
        <select className={styles.selector} {...rest}>
            {children}
        </select>
    </div>
  )
}

export default SelectGroup
