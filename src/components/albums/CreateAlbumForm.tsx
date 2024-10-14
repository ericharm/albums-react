import { FormikValues } from "formik";
import styled from "styled-components";
import { Spacing } from "../../Theme";
import { SelectField, TextField } from "../ui/Input";
import { Button } from "../ui/Button";
import { SelectFieldOption } from "../../models/ui";

// TODO: abstract this reusable component
const Grid = styled.form`
  display: grid;
  grid-gap: ${Spacing.small};
`;

const formatOptions: SelectFieldOption[] = [
  { value: "LP", label: "LP" },
  { value: '12" Single', label: '12" Single' },
  { value: "45", label: "45" },
];

export const CreateAlbumForm: React.FC<FormikValues> = ({ formik }) => (
  <Grid onSubmit={formik.handleSubmit}>
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
    <Button color="primary" type="submit">
      Submit
    </Button>
  </Grid>
);


