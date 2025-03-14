import styled from 'styled-components';
import { BorderRadius, Color, FontSize, FontWeight, TextSpacing } from '../../Theme';
import { SelectFieldProps, TextFieldProps } from './models';

export const TextInput = styled.input`
    border: 1px solid ${Color.black};
    border-radius: ${TextSpacing.small};
    font-size: ${FontSize.medium};
    padding: ${TextSpacing.medium};
    width: 100%;
    font-family: monospace;
`;

export const Label = styled.label`
    font-weight: ${FontWeight.bold};
`;

const Select = styled.select`
    border: 1px solid ${Color.black};
    border-radius: ${BorderRadius.light};
    padding: ${TextSpacing.medium};
    width: 100%;
    background: ${Color.white};
    font-family: monospace;
`;

export const TextField: React.FC<TextFieldProps> = ({ id, label, name, value, onChange }) => (
    <>
        <Label>{label}</Label>
        <TextInput type="text" id={id} name={name} value={value} onChange={onChange} />
    </>
);

export const PasswordField: React.FC<TextFieldProps> = ({ id, label, name, value, onChange }) => (
    <>
        <Label>{label}</Label>
        <TextInput type="password" id={id} name={name} value={value} onChange={onChange} />
    </>
);

export const SelectField: React.FC<SelectFieldProps> = ({
    id,
    label,
    name,
    value,
    options,
    onChange,
}) => (
    <>
        {label &&<Label>{label}</Label>}
        <Select id={id} name={name} value={value} onChange={onChange}>
            {options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </Select>
    </>
);
