import React, { useCallback, useContext } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { DispatchContext } from '../../Store';
import { LoginUserRequest } from '../../service/models/users';
import { LoginForm } from './LoginForm';
import { loginUser } from '../../service/UsersService';
import { setLoginModalOpen, setUser } from '../../store/Action';
import { toast } from 'react-toastify';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),

  password: yup.string().required('Password is required'),
});

export const LoginFormContainer: React.FC<React.PropsWithChildren> = () => {
  const dispatch = useContext(DispatchContext);

  const submitLoginForm = useCallback(
    async (request: LoginUserRequest) => {
      try {
        const response = await loginUser(request);
        dispatch(setUser(response.data));
        dispatch(setLoginModalOpen(false));
      } catch (error) {
        toast.error('Invalid email or password');
      }
    },
    [dispatch]
  );

  const formik = useFormik({
    initialValues: {
      email: String(),
      password: String(),
    },
    validationSchema: validationSchema,
    onSubmit: (request: LoginUserRequest) => {
      submitLoginForm(request);
    },
  });

  return <LoginForm formik={formik} />;
};
