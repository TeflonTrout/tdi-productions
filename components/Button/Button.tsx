import Link from 'next/link';
import styles from './Button.module.css'

interface ButtonProps {
    text: string;
    color: "primary" | "secondary" | "tertiary" | "disabled";
    width: "xl" | "lg" | "md" | "sm" | "auto"
    external?: boolean;
    url?: string;
}

const Button = (props:ButtonProps) => {
    const buttonType = props.color;
    const buttonWidth = props.width;

    return (
        <div className={`${styles[buttonType]} ${styles[buttonWidth]}`}>
            {props.external && props.url 
            ? <Link href={props.url} target="_blank" rel='noreferrer'><h1 className={styles.text}>{props.text}</h1></Link>
            : <h1 className={styles.text}>{props.text}</h1>
            }
        </div>
    )
}

export default Button