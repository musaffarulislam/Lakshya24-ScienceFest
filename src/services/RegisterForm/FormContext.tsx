import { createContext, useContext, FC, ReactNode, useState } from 'react';

interface FormContextProps {
  event: string;
  subevent: string;
  setFormValues: (newEvent: string, newSubevent: string) => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

interface FormProviderProps {
  children: ReactNode;
}

export const FormProvider: FC<FormProviderProps> = ({ children }) => {
  const [event, setEvent] = useState<string>('');
  const [subevent, setSubevent] = useState<string>('');

  const setFormValues = (newEvent: string, newSubevent: string) => {
    setEvent(newEvent);
    setSubevent(newSubevent);
  };

  const contextValue: FormContextProps = { event, subevent, setFormValues };

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};
