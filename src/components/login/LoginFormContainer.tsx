import React, { useCallback, useContext, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { DispatchContext, StateContext } from '../../Store';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
    const dispatch = useContext(DispatchContext);
    const state = useContext(StateContext);
    const { user } = state;

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

    useEffect(() => {
        if (user?.id) navigate('/');
    }, [user, navigate]);

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
