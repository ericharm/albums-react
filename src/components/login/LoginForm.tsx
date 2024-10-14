import { FormikValues } from "formik";
import styled from "styled-components";
import { Spacing } from "../../Theme";
import { PasswordField, TextField } from "../ui/Input";
import { Button } from "../ui/Button";

const Grid = styled.form`
  display: grid;
  grid-gap: ${Spacing.small};
`;

export const LoginForm: React.FC<FormikValues> = ({ formik }) => (
  <Grid onSubmit={formik.handleSubmit}>
    <TextField
      id="email"
      label="Email"
      name="email"
      value={formik.values.email}
      onChange={formik.handleChange}
    />
    <PasswordField
      id="password"
      label="Password"
      name="password"
      value={formik.values.password}
      onChange={formik.handleChange}
    />
    <Button color="primary" type="submit">
      Submit
    </Button>
  </Grid>
);

