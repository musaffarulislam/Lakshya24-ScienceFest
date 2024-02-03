import React from 'react';
import LeftForm from '../components/RegisterForm/LeftForm';
import RightForm from '../components/RegisterForm/RightForm';


const RegisterForm: React.FC = () => {
    return (
        <>
            <section className=" h-screen w-screen flex items-center justify-center">
                <div className=" flex max-h-max max-w-max rounded-xl shadow-2xl p-5 items-center">

                    <LeftForm />
                    <RightForm />
                </div>

            </section>
        </>
    );
};

export default RegisterForm;
