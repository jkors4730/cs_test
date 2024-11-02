import { FC } from "react";
import styles from './styles.module.scss';

interface JsonGenProps {
    json: string;
}

const JsonGen: FC<JsonGenProps> = ({json}) => {
    return (
        <div>
            <h3>JSON данные таблицы</h3>
            <textarea className={styles.json} cols={10} rows={10}>{json}</textarea>
        </div>
    );
};

export default JsonGen;