import { createContext, FC, useEffect, useState } from 'react';
import { Col, Row } from '../../types/types';
import { tableCols, tableRows } from '../data';
import styles from './styles.module.scss'
import Button from '../Button/Button';
import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';
import JsonGen from '../JsonGen/JsonGen';

export const TableContext = createContext(null as any);

const Table: FC = () => {
    const [cols, setCols] = useState<Col[]>([]);
    const [rows, setRows] = useState<Row[]>([]);
    const [size, setSize] = useState<number[]>([0, 0]);
    const [json, setJson] = useState<string>('');

    useEffect( () => {
        setCols(tableCols);
        setRows(tableRows);
        setSize([tableCols.length, tableRows.length]);
    }, [] );

    const generateJson = () => {
        const table = {
            head: cols,
            body: rows
        };

        setJson( JSON.stringify( table ) );
    };

    return (
        <>
            <table className={styles.table}>
                <TableContext.Provider value={{cols, setCols, rows, setRows, size, setSize}}>
                    <TableHead cols={cols} />
                    <TableBody rows={rows} />
                </TableContext.Provider>
            </table>
            <div className={styles.controls}>
                <Button onClick={generateJson} text="Выгрузить JSON" />
            </div>
            { json && <JsonGen json={json} /> }
        </>
    );
};

export default Table;