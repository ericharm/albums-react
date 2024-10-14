import { SelectFieldOption, Column } from './ui';

export interface PaginationProps {
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    onSetPage: (page: number) => void;
}

export interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

export interface DataGridProps<T> {
    columns: Column[];
    data: T[];
}

export interface TextFieldProps {
    id: string;
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectFieldProps {
    id: string;
    label: string;
    name: string;
    value: string;
    options: SelectFieldOption[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
