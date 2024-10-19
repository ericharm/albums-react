import { SelectFieldOption, Column } from './ui';
import { FormikValues } from 'formik';

export interface PaginationProps {
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    onSetPage: (page: number) => void;
}

export interface ModalProps {
    onClose?: () => void;
    children: React.ReactNode;
}

export interface AlbumFormProps extends FormikValues {
    showDeleteButton: boolean;
    submitButtonText: string;
    onClickDeleteButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface DataGridProps<T> {
    columns: Column[];
    data: T[];
    onClickRow?: (event: T) => void;
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
