import React from 'react';
import LeftForm from '../components/RegisterForm/LeftForm';
import RightForm from '../components/RegisterForm/RightForm';

const RegisterForm: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center max-w-[1440px] p-4">
        <LeftForm />
        <RightForm />
      </div>
    </div>
  );
};

export default RegisterForm;

