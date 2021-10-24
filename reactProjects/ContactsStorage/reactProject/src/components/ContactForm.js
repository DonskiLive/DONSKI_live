import styled from 'styled-components'
import Field from './Field'
import { useParams, useHistory } from 'react-router-dom'
import { useForm, set } from 'react-cool-form'
import * as yup from 'yup'
import { Button, ButtonRow } from './ContactView'
import { useSelector, useDispatch } from 'react-redux'
import { addContactAction, contactByIdSelector, updateContactAction } from '../store/contacts'


const ContactForm = () => {
    const { id } = useParams()
    console.log(id)
    const dispatch = useDispatch()
    const history = useHistory()
    const contact = useSelector(state => contactByIdSelector(state, parseInt(id))); // state - global state of all Selectors in Application



    const yupSchema = yup.object().shape({
        firstName: yup.string().min(2).required(),
        lastName: yup.string().min(2).required(),
        email: yup.string().email().required(),
        phone: yup.number().min(7).required(),
        address: yup.string().min(5).required(),
        description: yup.string().min(5).required()
    })

    const validateWithYup = (schema) => async (values) => {
        let errors = {};
        try {
            await schema.validate(values, { abortEarly: false })
        } catch (yupError) {
            yupError.inner.forEach(({ path, message }) => set(errors, path, message))
        }
        return errors
    }

    const { form, use } = useForm({
        defaultValues: contact ? { firstName: `${contact.firstName}`, lastName: `${contact.lastName}`, email: `${contact.email}`, phone: `${contact.phone}`, address: `${contact.address}`, description: `${contact.description}` } :
            { firstName: '', lastName: '', email: '', phone: '', address: '', description: '' },
        validate: validateWithYup(yupSchema),
        onSubmit: (values, { reset }) => {
            if (contact) {
                dispatch(updateContactAction({ ...values, id: contact.id }))
                history.push(`/contacts/${contact.id}`)
            } else {
                dispatch(addContactAction(values))
                console.log(values)
            }
            reset()
        }
    })

    const errors = use('errors', { errorWithTouched: true });
    return (
        <Wrapper>
            {contact ? <h2>Edit Contact</h2> :  <h2>Edd new contact</h2>}
           
            <form ref={form} noValidate>
                <Field name='firstName'
                    placeholder='type your firstName'
                    error={errors.firstName} />
                <Field name='lastName'
                    placeholder='type your lastName'
                    error={errors.lastName} />
                <Field name='email'
                    placeholder='type your email'
                    error={errors.email} />
                <Field name='phone'
                    placeholder='type your phone'
                    error={errors.phone} />
                <Field name='address'
                    placeholder='type your address'
                    error={errors.address} />
                <Field name='description'
                    placeholder='type your description'
                    error={errors.description} />
                <ButtonRow>
                    <Button>{contact ? 'save' : 'add contact'}</Button>
                </ButtonRow>
            </form>
        </Wrapper>
    )
}

export default ContactForm

const Wrapper = styled.div`
width: 48%;
padding: 15px 30px;
border: 1px solid black;
background-color: rgb(32,161,142, 0.1);
border-radius: 5px;
margin-left: auto;
text-align:right;
& h2{
    text-align:center !important;
    margin: 0px;
}
`