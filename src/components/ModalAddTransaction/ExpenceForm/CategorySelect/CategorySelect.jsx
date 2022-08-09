import Select from 'react-select';

export const CategorySelect = ({
  options,
  onChange,
  onBlur,
  value,
  touched,
}) => {
  const selectStyles = {
    control: styles => ({
      ...styles,
      fontFamily: 'Circe',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '1.5',
      color: '#BDBDBD',
      outline: 'none',
      border: 'none',
      borderBottom: '1px solid #E0E0E0',
    }),
    options: (styles, state) => ({
      ...styles,
      fontFamily: 'Circe',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '18px',
      lineHeight: '1.5',
      height: '44px',

      color: state.isSelected ? '#FF6596' : 'black',

      '&:hover': {
        backgroundColor: 'white',
        color: '#FF6596',
      },
    }),
    menu: (base, state) => ({
      ...base,
      padding: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      //backdropFilter:' blur(50px)',
      borderRadius: '20px',
    }),

    menuList: (base, state) => ({
      ...base,
      cursor: 'pointer',
    }),
  };

  return (
    <Select
      placeholder="Select a category"
      name="category"
      options={options}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      touched={touched}
      styles={selectStyles}
    />
  );
};
