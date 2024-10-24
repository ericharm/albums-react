import { FormikValues } from "formik";
import { AlbumGenre } from "../../models/AlbumGenre";
import { SelectFieldOption } from "../ui/models";

export interface AlbumFormProps extends FormikValues {
  genres?: SelectFieldOption[];
  albumGenres?: AlbumGenre[];
  showDeleteButton: boolean;
  submitButtonText: string;
  onClickDeleteButton: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
