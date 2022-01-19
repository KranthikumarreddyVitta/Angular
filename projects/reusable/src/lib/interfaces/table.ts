

export interface Table {
    name: string;
    flag: string;
    area: number;
    population: number;
}

export type SortColumn = keyof Table | '';
export type SortDirection = 'asc' | 'desc' | '';

export interface SortEvent {
    column: SortColumn;
    direction: SortDirection;
}