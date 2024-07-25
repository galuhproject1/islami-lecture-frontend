import { Box, Button, Modal, Typography } from "@mui/material";
import { AiFillInfoCircle } from "react-icons/ai";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  desc: string;
  onSubmit?: () => void;
};

const style = {
  position: "absolute",
  top: "30%",
  left: "40%",
  width: "375px",
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  outline: "none",
};

const ModalAction = ({ open, onClose, title, desc, onSubmit }: Props) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "#DB5962",
            }}
          >
            <AiFillInfoCircle
              size={48}
              color="white"
              className="p-1 transform scale-y-[-1]"
            />
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "18px",
              color: "primary",
              fontFamily: "Inter",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: "text.secondary",
              fontFamily: "Inter",
              width: "80%",
              textAlign: "center",
            }}
          >
            {desc}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "16px",
                px: 4,
                py: 1,
                borderRadius: "8px",
              }}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#3D60DE",
                textTransform: "none",
                fontFamily: "Inter",
                fontWeight: 700,
                fontSize: "16px",
                px: 4,
                py: 1,
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "#3D60DE",
                },
              }}
              onClick={onSubmit}
            >
              {title.includes("Delete") ? "Delete" : title.includes("Logout") ? "Logout" : "Oke"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalAction;
