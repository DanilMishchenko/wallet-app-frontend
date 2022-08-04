import { Rings } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Rings
      height="180"
      width="180"
      color="#4a56e2"
      radius="6"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      visible={true}
      ariaLabel="rings-loading"
    />
  );
};
