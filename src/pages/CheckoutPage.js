import { Formik, Form, useField, ErrorMessage } from 'formik';
import {
    FormContainer, FieldsContainer,
    Label, Input, Field, Button, Error
} from './CheckoutPageStyle'
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

function TextInput({ label, ...props }) {

    const [field, meta] = useField(props);

    return (
        <Field>
            <Label htmlFor={props.name}>{label}</Label>
            <Input {...field} {...props} />
            <ErrorMessage name={field.name}>{error => <Error>{error}</Error>}</ErrorMessage>
        </Field>
    );
}

function CheckoutPage() {

    const history = useHistory();

    return (
        <Formik
            initialValues={{
                name: '',
                surname: '',
                email: '',
                phone: '',
                address: ''
            }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(3, 'Your name couldn`t be that short')
                    .max(15, 'Your name couldn`t be that long')
                    .matches('^[A-Z]+', 'Your name should start with uppercase letter')
                    .required('This field is required'),
                surname: Yup.string()
                    .min(3, 'Your surname couldn`t be that short')
                    .max(15, 'Your surname couldn`t be that long')
                    .matches('^[A-Z]+', 'Your surname should start with uppercase letter')
                    .required('This field is required'),
                email: Yup.string()
                    .email('You should write correct email adress')
                    .required('This field is required'),
                phone: Yup.string()
                    .matches('^[+\\d]\\d{8,11}', 'You should enter a valid phone number')
                    .required('This field is required'),
                address: Yup.string()
                    .optional()
            })}
            onSubmit={(values) => {
                history.push('/success');
            }}
        >
            {props => (
                <Form>
                    <FormContainer>
                        <h1>Checkout</h1>
                        <FieldsContainer>
                            <TextInput label='Name' name='name' type='text' placeholder='Enter your name' />
                            <TextInput label='Surname' name='surname' type='text' placeholder='Enter your surname' />
                            <TextInput label='Email' name='email' type='email' placeholder='Enter your email' />
                            <TextInput label='Phone' name='phone' type='text' placeholder='Enter your phone number' />
                            <TextInput label='Address' name='address' type='text' placeholder='Enter your address' />
                            <Button type='submit'>Submit</Button>
                        </FieldsContainer>
                    </FormContainer>
                </Form>
            )}
        </Formik>
    );
}

export default CheckoutPage;