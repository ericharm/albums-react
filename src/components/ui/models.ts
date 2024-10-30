import React from 'react';

export interface Column {
    key: string;
    label: string;
    formatter?: (value: any) => React.ReactNode;
}

export interface DataGridProps<T> {
    columns: Column[];
    data: T[];
    onClickRow?: (event: T) => void;
}

export interface ModalProps {
    onClose?: () => void;
    children: React.ReactNode;
}

export interface PaginationProps {
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    onSetPage: (page: number) => void;
}

export interface PillProps {
    text: string;
    onClickX?: () => void;
}

export interface SelectFieldOption {
    label: string;
    value: string;
}

export interface SelectFieldProps {
    id: string;
    label?: string;
    name: string;
    value?: string;
    options: SelectFieldOption[];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface TextFieldProps {
    id: string;
    label: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
