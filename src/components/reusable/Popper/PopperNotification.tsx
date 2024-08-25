import { Box, Button, Paper, Popper, Typography } from "@mui/material";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { NotificationType } from "../../../libs/Types/notifications";
import { useEffect, useState } from "react";
import { getNotification } from "../../../api/notification/getNotification";
import { format } from "date-fns";
import NothingNotif from "../EmptyState/NothingNotif";

type Props = {
  openPopper: boolean;
  anchorEl: null | HTMLElement;
  id: string | undefined;
};
const PopperNotification = ({ id, openPopper, anchorEl }: Props) => {
  const navigate = useNavigate();
  const [dataNotifications, setDataNotifications] = useState<
    NotificationType[]
  >([]);
  useEffect(() => {
    const fetchNotifications = async () => {
      const { data } = await getNotification();

      setDataNotifications(data.data);
    };
    fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Popper
      id={id}
      open={openPopper}
      anchorEl={anchorEl}
      sx={{ boxShadow: "none", border: "none" }}
      placement="bottom-end"
    >
      <Paper sx={{ p: 2, borderRadius: "8px", width: "400px" }}>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "18px",
            color: "primary",
          }}
        >
          Notification
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
          {dataNotifications.length === 0 && (
            <NothingNotif />
          )}
          {dataNotifications.slice(0, 3).map((notification) => (
            <Box
              key={notification.id}
              sx={{ display: "flex", gap: 2, alignItems: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  p: 2,
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#E8E8E8",
                }}
              >
                <MdOutlineMarkEmailUnread
                  size={24}
                  className="text-[#FFBB54] font-bold"
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: "18px",
                    color: "primary",
                  }}
                >
                  {notification?.data?.message}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "primary",
                  }}
                >
                  {notification
                    ? format(new Date(notification?.created_at), "dd MMM yyyy")
                    : "N/A"}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Button
          variant="text"
          sx={{
            mt: 2,
            color: "#FF4363",
            fontWeight: 700,
            textTransform: "none",
            fontSize: "16px",
            display: dataNotifications.length === 0 ? "none" : "block",
          }}
          onClick={() => {
            navigate("/dashboard/setting/notification");
            anchorEl?.click();
          }}
        >
          See All
        </Button>
      </Paper>
    </Popper>
  );
};

export default PopperNotification;
