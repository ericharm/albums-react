import styled from 'styled-components';
import { DataGridProps } from '../../models/props.ts';
import { TextSpacing } from '../../Theme.ts';

const Table = styled.table`
  & th {
    text-align: left;
    padding: ${TextSpacing.medium}
  }

  & td {
    padding: ${TextSpacing.medium};
  }
`;

export const DataGrid = <T,>({ columns, data }: DataGridProps<T>): JSX.Element => {
  return (
    <Table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key}>{column.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.key}>{(row as any)[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

