import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { style } from './style';

const ModalWindow = ({handleClose, open, children}) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}

export default ModalWindow;

