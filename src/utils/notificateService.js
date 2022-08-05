import { toast } from 'react-toastify';

export const successNotif = (title, closeTime = 5000) =>
  toast.success(title, {
    position: 'top-center',
    autoClose: closeTime,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const errorNotif = (title, { closeTime = 5000, comment }) => {
  const titleStyles = {
    marginBottom: '15px',
    fontSize: '16px',
    color: '#000000',
  };

  const commentStyles = {
    fontSize: '12px',
  };

  const notifContent = (
    <div>
      <h3 style={titleStyles}>{title}</h3>

      {comment && <p style={commentStyles}>{comment}</p>}
    </div>
  );

  return toast.error(notifContent, {
    position: 'top-center',
    autoClose: closeTime,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
