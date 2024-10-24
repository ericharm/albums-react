import styled from 'styled-components';
import { BorderRadius, Color, FontSize, FontWeight, Spacing, TextSpacing } from '../../Theme';
import { SelectField, TextField, Label } from '../ui/Input';
import { Button, DeleteButton } from '../ui/Button';
import { SelectFieldOption } from '../ui/models';
import { AlbumFormProps } from './models';
import { AlbumGenre } from '../../models/AlbumGenre';
import { ChangeEvent } from 'react';

const Form = styled.form`
    display: grid;
    grid-gap: ${Spacing.small};
`;

const Grid = styled.div<{ columns?: string }>`
    display: grid;
    grid-gap: ${Spacing.small};
    ${props => (props.columns ? `grid-template-columns: ${props.columns}` : '')};
`;

const Block = styled.div`
    display: block;
`;

const Pill = styled.div`
  display: inline-block;
  background: ${Color.blue};
  color: ${Color.white};
  padding: ${TextSpacing.small};
  padding-left: ${FontSize.small};
  border-radius: ${BorderRadius.heavy};

  &:after {
      display: inline-flex;
      content: 'x';
      margin-left: ${TextSpacing.small};
      border-radius: ${BorderRadius.circular};
      font-weight: ${FontWeight.bold};
      width: ${FontSize.medium};
      height: ${FontSize.medium};
      justify-content: center;
  }
  &:hover:after {
      cursor: pointer;
      color: ${Color.blue};
      background: ${Color.white};
      opacity: 50%;
  }
`;

const formatOptions: SelectFieldOption[] = [
    { value: 'LP', label: 'LP' },
    { value: '12" Single', label: '12" Single' },
    { value: '45', label: '45' },
];

const GenresContainer: React.FC<{
    genres?: SelectFieldOption[];
    albumGenres?: AlbumGenre[];
}> = ({ genres, albumGenres }) => (
    <>
        <Label>Genres</Label>
        {albumGenres && (
            <Block>
                {albumGenres.map(albumGenre => (
                    <Pill key={albumGenre.id}>{albumGenre.genre_name}</Pill>
                ))}
            </Block>
        )}
        {genres && (
            <SelectField
                id="genre"
                name="format"
                label={undefined}
                value={undefined}
                options={genres}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => console.log(e.target.value)}
            />
        )}
    </>
);

export const AlbumForm: React.FC<AlbumFormProps> = ({
    formik,
    genres,
    albumGenres,
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
        {(albumGenres || genres) && <GenresContainer genres={genres} albumGenres={albumGenres} />}
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
            {showDeleteButton && (
                <DeleteButton type="button" tabIndex={9} onClick={onClickDeleteButton}>
                    Delete
                </DeleteButton>
            )}
            <Button>{submitButtonText}</Button>
        </Grid>
    </Form>
);
