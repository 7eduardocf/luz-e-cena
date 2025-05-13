import styles from "./button.module.css"
import classNames from "classnames"

interface BotaoProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant: "default" | "icon"
    children: React.ReactNode
}

function Botao({children, variant="default", ...rest}: BotaoProps){

    const classMap = {
        default : styles.default,
        botao: styles.botao,
        icon: styles.icon
    }

    return(
        <button className={classNames(styles.botao, classMap[variant])} {...rest}>
            {children}
        </button>
    )
}
export default Botao