import { Box, Typography } from "@mui/material";
import SettingPage from "..";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

type Notification = {
  id: number;
  name: string;
  status: string;
  icon: JSX.Element;
  description: string;
  time: string;
};

const NotificationSetting = () => {
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
          size={24}
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
          size={24}
          className="text-[#FFBB54] font-bold"
        />
      ),
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      time: "10:00",
    },
  ];
  return (
    <SettingPage>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          fontFamily: "Inter",
          px: 4,
          py: 8,
          gap: 4,
        }}
      >
        {notifications.map((notification) => (
          <Box
            key={notification.id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 1,
              alignItems: "center",
              p: 1,
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#E8E8E8",
              },
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFBB5426",
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                justifyContent: "center",
              }}
            >
              {notification.icon}
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#1F2F54",
                  fontFamily: "Mulish",
                }}
              >
                {notification.name}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#84818A",
                  fontFamily: "Mulish",
                }}
              >
                {notification.description}
              </Typography>
            </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "end", gap: 2 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#84818A",
                  fontFamily: "Mulish",
                }}
              >
                {notification.time}
              </Typography>
              <Box sx={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#DB5962" }}></Box>
            </Box>
          </Box>
        ))}
      </Box>
    </SettingPage>
  );
};

export default NotificationSetting;
