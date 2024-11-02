import { FC, MouseEventHandler } from 'react';
import styles from './styles.module.scss'

interface ButtonProps {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({text, onClick}) => {
    return (
        <button className={styles.btn} onClick={onClick}>{text}</button>
    );
};

export default Button;