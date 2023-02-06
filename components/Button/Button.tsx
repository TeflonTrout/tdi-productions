import styles from './Button.module.css'

interface ButtonProps {
    text: string;
    color: "primary" | "secondary" | "tertiary" | "disabled";
    width: "xl" | "lg" | "md" | "sm" | "auto"
    external?: boolean;
}

const Button = (props:ButtonProps) => {
    const buttonType = props.color;
    const buttonWidth = props.width;

    return (
        <div className={`${styles[buttonType]} ${styles[buttonWidth]}`}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default Button