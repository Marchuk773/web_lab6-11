import { Formik, Form, useField, ErrorMessage } from 'formik';
import {
    FormContainer, FieldsContainer, BottomMessage,
    Label, Input, Field, Button, Error
} from './RegisterPageStyle';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logged } from '../store/actions/actions.js';
import * as Yup from 'yup';

function FieldInput({ label, ...props }) {

    const [field, meta] = useField(props);

    return (
        <Field>
            <Label htmlFor={props.name}>{label}</Label>
            <Input {...field} {...props} />
            <ErrorMessage name={field.name}>{error => <Error>{error}</Error>}</ErrorMessage>
        </Field>
    );
}

function RegisterPage() {

    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
            validationSchema={Yup.object({
                username: Yup.string()
                    .min(3, 'Your username couldn`t be that short')
                    .matches('^[A-Z]+', 'Your name should start with uppercase letter')
                    .required('This field is required'),
                email: Yup.string()
                    .email('You should write correct email adress')
                    .required('This field is required'),
                password: Yup.string()
                    .min(7, 'Your password should be at least 7 characsters long')
                    .matches('^[^\\s]+$', 'Your cant have whitespaces in your password')
                    .matches('\\d', 'Your password should contain at least 1 digit')
                    .matches('[a-z]', 'Your password should contain at least 1 lowercase letter')
                    .matches('[A-Z]', 'Your password should contain at least 1 uppercase letter')
                    .required('This field is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password')], 'Passwords must match')
                    .required('This field is required')
            })}
            onSubmit={({ email, password }) => {
                dispatch(logged());
                localStorage.setItem(email, password);
                history.push('/');
            }}
        >
            {props => (
                <Form>
                    <FormContainer>
                        <h1>Register New Account</h1>
                        <FieldsContainer>
                            <FieldInput label='Username' name='username' type='text' placeholder='Username' />
                            <FieldInput label='Email' name='email' type='email' placeholder='E-mail' />
                            <FieldInput label='Password' name='password' type='password' placeholder='Password' />
                            <FieldInput label='Confirm Password' name='confirmPassword'
                                type='password' placeholder='Confirm your password' />
                        </FieldsContainer>
                        <BottomMessage>
                            <h2>Already a member?</h2>
                            <Link to='login'>Log in</Link>
                        </BottomMessage>
                        <Button type='submit'>Submit</Button>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    );
}

export default RegisterPage;