import { Col, Row } from "../types/types";

//#region Hat Data 
export const hatTitle = '%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5';
export const hatFioEncoded = '%D0%94%D0%BE%D1%80%D0%BE%D1%85%D0%BE%D0%B2%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9%20%D0%9E%D0%BB%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D1%87';
//#endregion

//#region Table Data
export const tableCols: Col[] = [
    {id: 1, title: 'Столбец', type: 'Строка'},
    {id: 2, title: 'Столбец', type: 'Процент'}
];

export const tableRows: Row[] = [
    {id: 1, cells: [ { id: 1, title: 'Данные' }, { id: 2, title: 'Данные'} ] },
    {id: 2, cells: [ { id: 1, title: 'Данные' }, { id: 2, title: 'Данные'} ] },
    {id: 3, cells: [ { id: 1, title: 'Данные' }, { id: 2, title: 'Данные'} ] },
    {id: 4, cells: [ { id: 1, title: 'Данные' }, { id: 2, title: 'Данные'} ] },
];
//#endregion