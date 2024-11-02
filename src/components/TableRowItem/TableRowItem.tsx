import { FC } from 'react';
import { Row } from '../../types/types';
import TableCellItem from '../TableCellItem/TableCellItem';

interface TableRowItemProps {
    row: Row;
}

const TableRowItem: FC<TableRowItemProps> = ({row}) => {
    return (
        <tr>
            {row.cells.map(cell =>
                <TableCellItem key={cell.id} cell={cell} rowId={row.id} />
            )}
        </tr>
    );
};

export default TableRowItem;