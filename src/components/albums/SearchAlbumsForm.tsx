import { FormikValues } from "formik";
import styled from "styled-components";
import { TextInput } from "../ui/Input";
import { Button } from "../ui/Button";
import { TextSpacing } from "../../Theme";

const Flex = styled.form`
  display: flex;
`;

const SearchTextInput = styled(TextInput)`
    border-radius: ${TextSpacing.small} 0 0 ${TextSpacing.small};
`

const SearchButton = styled(Button)`
    border-radius: 0 ${TextSpacing.small}  ${TextSpacing.small} 0;
`

export const SearchAlbumsForm: React.FC<FormikValues> = ({ formik }) => (
  <Flex onSubmit={formik.handleSubmit}>
    <SearchTextInput
      type="text"
      id="query"
      name="query"
      value={formik.values.query}
      onChange={formik.handleChange}
    />
    <SearchButton color="primary" type="submit">
      🔍
    </SearchButton>
  </Flex>
);


