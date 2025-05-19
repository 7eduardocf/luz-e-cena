import styles from "./InputText.module.css"

function InputText({...props}:React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input type="text" className={styles.input} {...props}/>
    )
}

export default InputText
