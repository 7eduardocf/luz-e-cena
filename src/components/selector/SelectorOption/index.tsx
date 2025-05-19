interface SelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement>{
    label: string
    value: string
}

function SelectOption({label, value, ...rest}: SelectOptionProps) {
    return (
        <option value={value} {...rest}>
            {label}
        </option>
    )
}

export default SelectOption