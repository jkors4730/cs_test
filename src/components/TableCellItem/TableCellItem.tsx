import { FC, useContext, useState } from 'react';
import { Cell } from '../../types/types';
import styles from './styles.module.scss';
import add_img from '../../assets/img/add.png';
import del_img from '../../assets/img/cross.png';
import { TableContext } from '../Table/Table';

interface TableCellItemProps {
    cell: Cell;
    rowId: number;
}

const TableCellItem: FC<TableCellItemProps> = ({cell, rowId}) => {
    const [value, setValue] = useState<string>(cell.title);
    const [hover, setHover] = useState<boolean>(false);
    const {rows, setRows, size, setSize} = useContext(TableContext);

    const mouseEnter = () => { setHover(true); };
    const mouseLeave = () => { setHover(false); };

    const addRow = () => {
        setRows([
            ...rows,
            {
                id: size[1] + 1,
                cells: Array.from(Array(size[0]).keys()).map( x =>
                    { return{ id: x + 1, title: 'Данные' }; }
                )
            }
        ]);
        setSize([ size[0], size[1] + 1 ]);
    };

    const delRow = () => {
        let rowsCopy = structuredClone(rows);

        for ( let i = 0; i < rowsCopy.length; i++ ) {
            if ( rowsCopy[i].id === rowId ) {
                rowsCopy.splice(i, 1);
                break;
            }
        }

        setRows(rowsCopy);

        let newSize = size[1] - 1;
        if (newSize < 0) { newSize = 0; }

        setSize([ size[0], newSize ]);
    };

    const updateValue = ( val : string ) => {
        setValue(val);

        let rowsCopy = structuredClone(rows);
        for ( let i = 0; i < rowsCopy.length; i++ ) {
            if ( rowsCopy[i].id === rowId ) {
                for ( let j = 0; j < rowsCopy[i].cells.length; j++ ) {
                    if ( rowsCopy[i].cells[j].id === cell.id ) {
                        rowsCopy[i].cells[j].title = val;
                    }
                }
            }
        }

        setRows(rowsCopy);
    };

    const addBtn = hover ?
        <button
            onClick={addRow}
            className={styles.btn_add}
            title="Добавить строку"
        >
            <img src={add_img} />
        </button>
        : null;

    const delBtn = hover ?
        <button
            onClick={delRow}
            className={styles.btn_del}
            title="Удалить строку"
        >
            <img src={del_img} />
        </button>
        : null;

    return (
        <td
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className={styles.cell}
        >
            <input className={styles.text} type="text" value={value} onChange={(e) => { updateValue(e.target.value) }}></input>{addBtn}{delBtn}</td>
    );
};

export default TableCellItem;