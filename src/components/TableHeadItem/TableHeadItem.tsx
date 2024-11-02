import { FC, useContext, useState } from 'react';
import { Col } from '../../types/types';
import styles from './styles.module.scss';
import add_img from '../../assets/img/add.png';
import del_img from '../../assets/img/cross.png';
import { TableContext } from '../Table/Table';

interface TableHeadItemProps {
    col: Col;
}

const TableHeadItem: FC<TableHeadItemProps> = ({col}) => {
    const [value, setValue] = useState<string>(col.title);
    const [type, setType] = useState<string>(col.type);
    const [hover, setHover] = useState<boolean>(false);
    const {cols, setCols, rows, setRows, size, setSize} = useContext(TableContext);

    const mouseEnter = () => { setHover(true); };
    const mouseLeave = () => { setHover(false); };

    const addCol = () => {
        setCols([...cols, {id: size[0] + 1, title: 'Столбец', type: 'Строка'} ]);

        let rowsCopy = structuredClone(rows);
        rowsCopy.map( ( row:any ) => 
            row.cells = [...row.cells, { id: size[0] + 1, title: 'Данные'}]
        );
        setRows(rowsCopy);

        setSize([ size[0] + 1, size[1] ]);
    };

    const delCol = () => {
        let colsCopy = structuredClone(cols);

        for ( let i = 0; i < colsCopy.length; i++ ) {
            if ( colsCopy[i].id === col.id ) {
                colsCopy.splice(i, 1);
                break;
            }
        }

        setCols(colsCopy);

        let size1 = size[0] - 1;
        let size2 = size[1];
        if (size1 < 0) { size1 = 0; }
        if (size1 === 0) { size2 = 0; }

        setSize([ size1, size2 ]);

        let rowsCopy = structuredClone(rows);
        rowsCopy.map( ( row:any ) => 
            row.cells = row.cells.slice(0, size1)
        );
        setRows(rowsCopy);
    };

    const updateValue = ( val : string ) => {
        setValue(val);

        let colsCopy = structuredClone(cols);
        for ( let i = 0; i < colsCopy.length; i++ ) {
            if ( colsCopy[i].id === col.id ) {
                colsCopy[i].title = val;
            }
        }
        setCols(colsCopy);
    };

    const updateType = ( val : string ) => {
        setType(val);

        let colsCopy = structuredClone(cols);
        for ( let i = 0; i < colsCopy.length; i++ ) {
            if ( colsCopy[i].id === col.id ) {
                colsCopy[i].type = val;
            }
        }
        setCols(colsCopy);
    };

    const addBtn = hover ?
        <button
            onClick={addCol}
            className={styles.btn_add}
            title="Добавить колонку"
        >
            <img src={add_img} />
        </button>
        : null;

    const delBtn = hover ?
        <button
            onClick={delCol}
            className={styles.btn_del}
            title="Удалить колонку"
        >
            <img src={del_img} />
        </button>
        : null;

    const headType = 
    <select value={type} onChange={(e) => { updateType(e.target.value) }}>
        <option value={'Строка'}>Строка</option>
        <option value={'Процент'}>Процент</option>
    </select>;

    return (
        <th
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className={styles.head}
            scope="col"
        ><input className={styles.text} type="text" value={value} onChange={(e) => { updateValue(e.target.value) }}></input>{headType}{addBtn}{delBtn}</th>
    );
};

export default TableHeadItem;