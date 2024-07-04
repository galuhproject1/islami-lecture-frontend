import { Box, Button, Paper, Popper } from "@mui/material";
import ModalAction from "./ModalAction";
import { useState } from "react";

type Props = {
  openPopper: boolean;
  anchorEl: null | HTMLElement;
  id: string | undefined;
};

const PopperAction = ({ id, openPopper, anchorEl }: Props) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <Box>
      <Popper
        id={id}
        open={openPopper}
        anchorEl={anchorEl}
        sx={{ boxShadow: "none", border: "none" }}
        placement="bottom-end"
      >
        <Paper sx={{ p: 2, borderRadius: "4px", width: "170px" }}>
          <Box>
            <Button
              sx={{
                width: "100%",
                textTransform: "none",
                color: "primary",
                fontWeight: 700,
              }}
              variant="text"
            >
              View Course
            </Button>
            <Button
              sx={{
                width: "100%",
                textTransform: "none",
                color: "#3D60DE",
                fontWeight: 700,
              }}
              variant="text"
            >
              Download Invoice
            </Button>
            <Button
              sx={{
                width: "100%",
                textTransform: "none",
                color: "error.main",
                fontWeight: 700,
              }}
              variant="text"
              onClick={() => {
                anchorEl?.click();
                setOpenModal(true);
              }}
            >
              Delete Course
            </Button>
          </Box>
        </Paper>
      </Popper>
      <ModalAction open={openModal} onClose={() => setOpenModal(false)} title="Delete Course" desc="Are you sure want Delete course from your transaction list?" />
    </Box>
  );
};

export default PopperAction;
