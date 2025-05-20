import styles from "./fieldSet.module.css"

interface FieldSetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    variante?: "Primary" | "Secondary"
}

function FieldSet({ children, variante = "Primary" }: FieldSetProps) {
    return (
        <fieldset className={`${styles.inputWrapper} ${variante === "Primary" ? styles.primary : styles.secondary}`} >
            {children}
        </fieldset>
    )
}

export default FieldSet
