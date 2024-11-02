import { FC } from 'react';
import { Col } from '../../types/types';
import TableHeadItem from '../TableHeadItem/TableHeadItem';

interface TableHeadProps {
    cols: Col[];
}

const TableHead: FC<TableHeadProps> = ({cols}) => {
    return (
        <thead>
            <tr>
                {cols.map( col =>
                    <TableHeadItem key={col.id} col={col} />
                )}
            </tr>
        </thead>
    );
};

export default TableHead;