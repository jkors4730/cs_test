import { FC, useContext, useState } from 'react';
import { Cell } from '../../types/types';
import styles from './styles.module.scss';
import img from '../../assets/img/add.png';
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
            className={styles.btn}
            title="Добавить строку"
        >
            <img src={img} />
        </button>
        : null;

    return (
        <td
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className={styles.cell}
        >
            <input className={styles.text} type="text" value={value} onChange={(e) => { updateValue(e.target.value) }}></input>{addBtn}</td>
    );
};

export default TableCellItem;