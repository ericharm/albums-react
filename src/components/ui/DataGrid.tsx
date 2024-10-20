import styled from 'styled-components';
import { DataGridProps } from '../../models/props.ts';
import { TextSpacing } from '../../Theme.ts';

const Table = styled.table<{ $isClickable?: boolean }>`
    & th {
        text-align: left;
        padding: ${TextSpacing.medium};
    }

    & td {
        padding: ${TextSpacing.medium};
    }

    & tr td {
        cursor: ${props => (props.$isClickable ? 'pointer' : 'default')};
    }
`;

export const DataGrid = <T,>({ columns, data, onClickRow }: DataGridProps<T>): JSX.Element => (
    <Table $isClickable={!!onClickRow}>
        <thead>
            <tr>
                {columns.map(column => (
                    <th key={column.key}>{column.label}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex} onClick={() => (onClickRow ? onClickRow(row) : undefined)}>
                    {columns.map(column => (
                        <td key={column.key}>{(row as any)[column.key]}</td>
                    ))}
                </tr>
            ))}
        </tbody>
    </Table>
);
