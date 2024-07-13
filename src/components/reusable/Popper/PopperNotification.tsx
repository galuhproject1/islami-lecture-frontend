import { Box, Button, Paper, Popper, Typography } from "@mui/material";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useNavigate } from "react-router-dom";

type Props = {
  openPopper: boolean;
  anchorEl: null | HTMLElement;
  id: string | undefined;
};

type Notification = {
  id: number;
  name: string;
  status: string;
  icon: JSX.Element;
  description: string;
  time: string;
};
const PopperNotification = ({ id, openPopper, anchorEl }: Props) => {
  const navigate = useNavigate();
  const notifications: Notification[] = [
    {
      id: 1,
      name: "New Course",
      status: "unread",
      icon: (
        <MdOutlineMarkEmailUnread
          size={24}
          className="text-[#FFBB54] font-bold"
        />
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      time: "10:00",
    },
    {
      id: 2,
      name: "New Course",
      status: "read",
      icon: (
        <MdOutlineMarkEmailUnread
          size={48}
          className="text-[#FFBB54] font-bold"
        />
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      time: "10:00",
    },
    {
      id: 3,
      name: "New Course",
      status: "read",
      icon: (
        <MdOutlineMarkEmailUnread
          size={48}
          className="text-[#FFBB54] font-bold"
        />
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      time: "10:00",
    },
    {
      id: 4,
      name: "New Course",
      status: "read",
      icon: (
        <MdOutlineMarkEmailUnread
          size={48}
          className="text-[#FFBB54] font-bold"
        />
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      time: "10:00",
    },
  ];
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
          {notifications.slice(0, 3).map((notification) => (
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
                {notification.icon}
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
                  {notification.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    lineHeight: "18px",
                    color: "primary",
                  }}
                >
                  {notification.time}
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
