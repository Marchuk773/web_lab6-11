import { Formik, Form, useField, ErrorMessage } from 'formik';
import {
    FormContainer, FieldsContainer, BottomMessage,
    Label, Input, Field, Button, Error
} from './LoginPageStyle';
import { useDispatch } from 'react-redux';
import { logged } from '../store/actions/actions.js';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { useState } from 'react';

function FieldInput({ label, setState, ...props }) {

    const [field, meta] = useField(props);

    return (
        <Field>
            <Label htmlFor={props.name}>{label}</Label>
            <Input {...field} {...props} />
            <ErrorMessage name={field.name}>{error => <Error>{error}</Error>}</ErrorMessage>
        </Field>
    );
}

function LoginPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [correctPassword, setCorrectPassword] = useState('');

    return (
        <Formik
            initialValues={{
                password: ''
            }}
            validationSchema={Yup.object({
                password: Yup.string()
                    .oneOf([correctPassword], 'Your email or password is incorrect')
                    .required('This field is required')
            })}
            onSubmit={(values) => {
                dispatch(logged());
                history.push('/');
            }}
        >
            {props => (
                <Form>
                    <FormContainer>
                        <h1>Log in</h1>
                        <FieldsContainer>
                            <Field>
                                <Label htmlFor='userEmail'>Email</Label>
                                <Input type='email' placeholder='E-mail' onChange={
                                    e => setCorrectPassword(localStorage.getItem(e.target.value))} />
                                <ErrorMessage name='userEmail'>{error => <Error>{error}</Error>}</ErrorMessage>
                            </Field>
                            <FieldInput label='Password' name='password' type='password' placeholder='Password' />
                        </FieldsContainer>
                        <BottomMessage>
                            <h2>New to this Site?</h2>
                            <Link to='register'>Register New Account</Link>
                        </BottomMessage>
                        <Button type='submit'>Submit</Button>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    );
}

export default LoginPage;