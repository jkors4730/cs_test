import { FC, useState } from 'react';
import styles from './styles.module.scss'
import black from '../../assets/img/csoft.png'
import red from '../../assets/img/csoft_red.png'

const CsLogo: FC = () => {
    const [hover, setHover] = useState<boolean>(false);

    const mouseEnter = () => {
        setHover(true);
    };

    const mouseLeave = () => {
        setHover(false);
    };

    return (
        <a href="https://www.csoft.ru/" target='_blank'>
            <img onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} src={ hover ? red : black } alt={'CSoft Logo'} className={styles.logo} />
        </a>
    );
};

export default CsLogo;