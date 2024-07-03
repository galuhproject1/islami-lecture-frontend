import { Modal } from "@mui/material";

type Props = {
  open: boolean;
  onClose: () => void;
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "auto",
  bgcolor: "transparent",
  boxShadow: 24,
  p: 4,
};

const ModalAction = ({ open, onClose }: Props) => {
  return (
    <Modal open={open} onClose={onClose} sx={{ style }}>
      <div className="w-1/3 text-center p-4 rounded-md bg-white">delete</div>
    </Modal>
  );
};

export default ModalAction;
