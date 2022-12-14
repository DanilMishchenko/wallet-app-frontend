import { ErrorMessage, useField } from 'formik';

import { Label, Input } from './TextInput.styled';

export const TextInput = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <ErrorMessage
        component="div"
        name={field.name}
        style={{ color: '#FF6596' }}
      />
      <Label htmlFor={field.name} className="label">
        {label}
        <Input {...field} {...props} autoComplete="off" />
      </Label>
    </>
  );
};
