import styled from 'styled-components';
import { Spacing } from '../../Theme';
import { SelectField, TextField } from '../ui/Input';
import { Button, DeleteButton } from '../ui/Button';
import { SelectFieldOption } from '../../models/ui';
import { AlbumFormProps } from '../../models/props';

const Form = styled.form`
    display: grid;
    grid-gap: ${Spacing.small};
`;

const Grid = styled.div<{ columns?: string }>`
    display: grid;
    grid-gap: ${Spacing.small};
    ${props => (props.columns ? `grid-template-columns: ${props.columns}` : '')};
`;

const formatOptions: SelectFieldOption[] = [
    { value: 'LP', label: 'LP' },
    { value: '12" Single', label: '12" Single' },
    { value: '45', label: '45' },
];

export const AlbumForm: React.FC<AlbumFormProps> = ({
    formik,
    showDeleteButton,
    submitButtonText,
    onClickDeleteButton,
}) => (
    <Form onSubmit={formik.handleSubmit}>
        <TextField
            id="artist"
            label="Artist"
            name="artist"
            value={formik.values.artist}
            onChange={formik.handleChange}
        />
        <TextField
            id="title"
            label="Title"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
        />
        <TextField
            id="released"
            label="Released"
            name="released"
            value={formik.values.released}
            onChange={formik.handleChange}
        />
        <SelectField
            id="format"
            label="Format"
            name="format"
            value={formik.values.format}
            options={formatOptions}
            onChange={formik.handleChange}
        />
        <TextField
            id="label"
            label="Label"
            name="label"
            value={formik.values.label}
            onChange={formik.handleChange}
        />
        <TextField
            id="notes"
            label="Notes"
            name="notes"
            value={formik.values.notes}
            onChange={formik.handleChange}
        />
        <Grid columns={showDeleteButton ? '1fr 1fr' : undefined}>
            {showDeleteButton && <DeleteButton onClick={onClickDeleteButton}>Delete</DeleteButton>}
            <Button>{submitButtonText}</Button>
        </Grid>
    </Form>
);
