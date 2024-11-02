import { FC } from 'react';
import { Row } from '../../types/types';
import TableRowItem from '../TableRowItem/TableRowItem';

interface TableBodyProps {
    rows: Row[];
}

const TableBody: FC<TableBodyProps> = ({rows}) => {
    return (
        <tbody>
            {rows.map( row =>
                <TableRowItem key={row.id} row={row} />
            )}
        </tbody>
    );
};

export default TableBody;