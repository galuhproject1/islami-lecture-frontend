import { Box, Typography } from "@mui/material";
import EmptyStateNotification from "../../../assets/images/ilustration/bell-empty-state.png";
const NothingNotif = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <img src={EmptyStateNotification} alt="empty state" className="w-1/4" />
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "18px",
          color: "primary",
        }}
      >
        Belum ada notifikasi
      </Typography>
    </Box>
  );
};

export default NothingNotif;
