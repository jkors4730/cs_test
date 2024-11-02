type ColType = 'Строка' | 'Процент';

export interface Col {
    id: number;
    title: string;
    type: ColType;
}

export interface Row {
    id: number;
    cells: Cell[];
}

export interface Cell {
    id: number;
    title: string;
}