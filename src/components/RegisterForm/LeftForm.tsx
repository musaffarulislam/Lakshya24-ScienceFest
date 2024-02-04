import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useFormContext } from '../../services/RegisterForm/FormContext';


interface FormValues {
    fullName: string;
    email: string;
    phone: string;
    event: string;
    subevent: string;
}

const LeftForm: React.FC = () => {
    const { event: contextEvent, subevent: contextSubevent } = useFormContext();
    console.log(contextEvent, contextSubevent);
    console.log(typeof contextEvent, contextSubevent);

    const [temp, setTemp] = useState<string>('');

    useEffect(() => {
        if (contextEvent.trim() !== '') {
            setTemp(contextEvent);
        }
    }, [contextEvent]);

    const items: { [key: string]: string[] } = {
        'A': ['1', '2', '3', '4', '5'],
        'B': ['6', '7', '8', '9', '10'],
        'C': ['11', '12', '13', '14', '15'],
        'D': ['16', '17', '18', '19', '20'],
    };

    const validationSchema = Yup.object().shape({
        fullName: Yup.string().required('Full Name is required'),
        email: Yup.string()
            .matches(/^\w+([-]?\w+)*@\w+([-]?\w+)*\.\w{2,3}$/, 'Invalid Email Format')
            .required('Email is required'),
        phone: Yup.string()
            .matches(/^\d{10}$/, 'Phone Number must be 10 digits')
            .required('Phone Number is required'),
        event: Yup.string().required('Event is required'),
        subevent: Yup.string().required('Subevent is required'),
    });

    const handleSubmit = (values: FormValues) => {
        console.log(values);
    };
    console.log(temp);

    return (
        <div className="w-full mt-4 md:mt-0 md:w-1/2 md:px-8">
            <h2 className="font-title font-bold text-4xl text-neon-green mb-3">Register Here</h2>
            <Formik

                initialValues={{
                    fullName: '',
                    email: '',
                    phone: '',
                    event: '',
                    subevent: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className=" font-title">
                    <div className='w-full my-5'>
                        <Field
                            className="p-3 rounded-xl border bg-white w-full text-gray-400"
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                        />
                        <ErrorMessage
                            name="fullName"
                            component="div"
                            className="text-red-500 text-xs m-1"
                        />
                    </div>
                    <div className='w-full my-5'>
                        <Field
                            className="p-3 rounded-xl border bg-white w-full text-gray-400"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500 text-xs m-1"
                        />
                    </div>

                    <div className='w-full my-5'>
                        <Field
                            className="p-3 rounded-xl border bg-white w-full text-gray-400"
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                        />
                        <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-500 text-xs m-1"
                        />
                    </div>

                    <div className='w-full my-5'>
                        <Field
                            as="select"
                            className="p-3 rounded-xl border bg-white w-full text-gray-400"
                            name="event"
                            onClick={(e: React.ChangeEvent<HTMLSelectElement>) => setTemp((e.target as HTMLSelectElement).value.trim())}
                        >
                            <option value="" disabled hidden>
                                Event
                            </option>
                            {Object.keys(items).map((key) => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage
                            name="event"
                            component="div"
                            className="text-red-500 text-xs m-1"
                        />
                    </div>

                    {temp && <div className='w-full my-5'>
                        <Field
                            as="select"
                            className="p-3 rounded-xl border bg-white w-full text-gray-400"
                            name="subevent"
                        >
                            <option value="" disabled hidden>
                                SubEvent
                            </option>
                            {items[temp].map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </Field>
                        <ErrorMessage
                            name="subevent"
                            component="div"
                            className="text-red-500 text-xs m-1"
                        />
                    </div>}

                    <button
                        className="bg-red-500 rounded-xl text-white py-3 hover:scale-105 duration-300 w-full"
                        type="submit"
                    >
                        Register
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default LeftForm;
