import { Button, Paper, Popper } from "@mui/material";
import { useNavigate } from "react-router-dom";

type Props = {
  openPopper: boolean;
  anchorEl: null | HTMLElement;
  id: string | undefined;
};

const PopperProfile = ({ id, openPopper, anchorEl }: Props) => {
  const navigate = useNavigate();

  return (
    <Popper
      id={id}
      open={openPopper}
      anchorEl={anchorEl}
      sx={{ boxShadow: "none", border: "none" }}
      placement="bottom-end"
    >
      <Paper sx={{ p: 1, borderRadius: "8px", width: "300px" }}>
        <Button
          variant="text"
          sx={{
            width: "100%",
            color: "#FF4363",
            fontWeight: 700,
            textTransform: "none",
            fontSize: "16px",
          }}
          onClick={() => {
            navigate("/dashboard/setting/logout");
            anchorEl?.click();
          }}
        >
          Logout
        </Button>
      </Paper>
    </Popper>
  );
};

export default PopperProfile;
