import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss'
import CsLogo from '../CsLogo/CsLogo';

interface HatProps {
    title: string;
    fio: string;
    logo: boolean;
}

const Hat: FC<HatProps> = ({title, fio, logo}) => {
    const [t, setT] = useState<string>('');
    const [f, setF] = useState<string>('');
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect( () => {
        setT( decodeURIComponent(title) );
        setF( decodeURIComponent(fio) );
        setLoading(false);
    }, [] );

    return (
        <div className={styles.hat}>
            <div>
                <h1>{ isLoading ? 'загрузка...' : t }</h1>
                <h2>Frontend-разработчик: { isLoading ? 'загрузка...' : f }</h2>
            </div>
            <div>
                { logo && <CsLogo /> }
            </div>
        </div>
    );
};

export default Hat;