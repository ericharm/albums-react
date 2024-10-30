import styled from 'styled-components';
import { Label } from '../ui/Input';
import { Pill } from '../ui/Pill';
import { GenrePillsProps, GenresFormProps } from './models';
import { BorderRadius, Color, FontSize, FontWeight, TextSpacing } from '../../Theme';
import { Button } from '../ui/Button';
import CreatableSelect from 'react-select/creatable';

const Block = styled.div`
    display: block;
`;

const Flex = styled.div`
    display: flex;

    #genre {
        border-radius: ${BorderRadius.light} 0 0 ${BorderRadius.light};
        flex-grow: 1;
    }
`;

const AddGenreToAlbumButton = styled(Button)`
    border-radius: 0 ${TextSpacing.small} ${TextSpacing.small} 0;
    border-left: none;
    font-size: ${FontSize.medium};
    font-weight: ${FontWeight.bold};
    padding: 0 ${FontSize.small};
`;

const GenreSelect = styled(CreatableSelect)`
  .genre-select__control {
    border: 1px solid ${Color.black};
    border-radius: ${BorderRadius.light} 0 0 ${BorderRadius.light};

    &:hover {
      border-color: ${Color.black};
    }
  }

  .genre-select__dropdown-indicator {
    padding: 0 ${TextSpacing.small};
  }

  .genre-select__option--is-focused {
    background-color: ${Color.blue};
    color: ${Color.white};
  }

  .genre-select__option--is-selected {
    background-color: ${Color.lightBlue};
  }
`;

const GenrePills: React.FC<GenrePillsProps> = ({ albumGenres, onRemoveGenreFromAlbum }) => (
  <Block>
    {albumGenres.map((albumGenre) => (
      <Pill
        key={albumGenre.id}
        text={albumGenre.genre_name}
        onClickX={() => {
          onRemoveGenreFromAlbum(albumGenre.id);
        }}
      />
    ))}
  </Block>
);


export const GenresForm: React.FC<GenresFormProps> = ({
  options,
  albumGenres,
  selectedGenre,
  onAddGenreOption,
  onChangeSelectedGenre,
  onRemoveGenreFromAlbum,
  onAddGenreToAlbum,
}) => (
  <>
    <Label>Genres</Label>
    {albumGenres && albumGenres.length ? (
      <GenrePills albumGenres={albumGenres} onRemoveGenreFromAlbum={onRemoveGenreFromAlbum} />
    ) : undefined}
    {options && (
      <Flex>
        <GenreSelect
          id="genre"
          name="genre"
          value={selectedGenre ? selectedGenre : null}
          options={options}
          // @ts-ignore
          onChange={onChangeSelectedGenre}
          onCreate={onAddGenreOption}
          placeholder="Add a new genre"
          classNamePrefix="genre-select"
        />
        <AddGenreToAlbumButton
          type="button"
          onClick={onAddGenreToAlbum}
          disabled={!selectedGenre}
        >
          +
        </AddGenreToAlbumButton>
      </Flex>
    )}
  </>
);
