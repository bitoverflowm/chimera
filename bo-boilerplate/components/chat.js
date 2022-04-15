import React, {useState} from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { FaTwitterSquare } from 'react-icons/fa';

const validationSchema = Yup.object().shape({
    name: Yup.string(),
    phone: Yup.string().required('We need a phone number to send the invite witth 10 free deliveries'),
    zipcode: Yup.string().required('We pretty much just launch where usesers want us'),
    address: Yup.string()
});

const Chat = props => {
    const [loading, setLoading ] = useState(false);
    const [submitted, setSubmitted ] = useState(false);
    const [visible, setVisible ] = useState(false);

    const submitHandler = async values => {
        setLoading(true);
        try{
            const res = await fetch('/api/waitlist', {
                body: JSON.stringify({
                    name: values.name,
                    phone: values.phone,
                    zipcode: values.zipcode,
                    address: values.address
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
            const result = await res.json();
            setLoading(false);
            setSubmitted(true);
            return result
        } 
        catch (error) {
            console.log(error);
        }
    }

    const item =() => {
        if( loading ){
            return (
                <div className="animate-pulse">
                    Submitting...
                </div>
            )
        } else if (submitted){
            return (
                <div>
                    Thank you! ❤️
                    We will be in touch shortly.
                </div>
            )
        } else {
            return (
                <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    note: ''
                }}
                validationSchema={ validationSchema }
                onSubmit={values => submitHandler(values)}
                render={({ errors, touched }) => (
                    <Form className='mt-2'>
                        <div className='pb-4'>Whether you want to hire us, work with us, or invest in us shoot us a note:</div>
                        <div className='grid place-items-center'>
                            <a href={'https://twitter.com/BitoverflowLabs'} target="_blank" rel="noopener noreferrer" className='text-5xl hover:text-blue-400 cursor-pointer'>
                                <FaTwitterSquare />
                            </a>
                        </div>                            
                        <div className='text-lg text-center pt-4 pb-8'>
                            customer@bitoverflow.org
                        </div>
                        {
                            visible && 
                            <div>
                                <div className="pl-2">Name</div>
                                <Field name="name" type="text"
                                        className="mt-1 p-2 block w-full rounded-md 
                                                    border-black border-2 focus:border-4 focus:font-bold "/>                        
                                <div className="pl-2">Email</div>
                                <Field name="email" type="text"
                                        className="mt-1 p-2 block w-full rounded-md 
                                                    border-black border-2 focus:border-4 focus:font-bold "/>
        
                                <div className="pl-2">What would you like to talk about?</div>
                                <Field name="note" type="text"
                                        className="mt-1 h-24 p-2 block w-full rounded-md 
                                                    border-black border-2 focus:border-4 focus:font-bold "/>                        
                                <div className='mt-3 pb-4'>
                                    <button type="submit" className="float-center mx-3 px-3 py-2 bg-indigo-300 rounded-md">Submit</button>
                                </div>
                            </div>

                        }
                        
                    </Form>
                )} />

            )
        }

    }

    return(
        <div>{item()}</div>
    )
}

export default Chat;
