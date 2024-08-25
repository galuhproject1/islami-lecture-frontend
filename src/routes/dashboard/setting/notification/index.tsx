import { Box, Button, Typography } from "@mui/material";
import SettingPage from "..";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useEffect, useState } from "react";
import { getNotification } from "../../../../api/notification/getNotification";
import { NotificationType } from "../../../../libs/Types/notifications";
import { FaRegCheckSquare } from "react-icons/fa";

const NotificationSetting = () => {
  const [dataNotifications, setDataNotifications] = useState<NotificationType[]>([]);
  useEffect(() => {
    const fetchNotifications = async () => {
      const { data } = await getNotification();

      setDataNotifications(data.data);
    };
    fetchNotifications();
  }, []);
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
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button variant="text" sx={{ gap: 1 }}>
            <FaRegCheckSquare
              size={24}
              className="text-[#FFBB54] font-bold"
            />
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 400,
              color: "#1F2F54",
              fontFamily: "Mulish",
              textTransform: "capitalize",
            }}
          >
            Tandai telah terbaca
          </Typography>
          </Button>
        </Box>
        {dataNotifications.map((notification) => (
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
                <MdOutlineMarkEmailUnread
                  size={24}
                  className="text-[#FFBB54] font-bold"
                />
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
                  {notification?.data?.message}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#84818A",
                    fontFamily: "Mulish",
                  }}
                >
                  {notification?.data?.url}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#84818A",
                  fontFamily: "Mulish",
                }}
              >
                {notification?.created_at}
              </Typography>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#DB5962",
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>
    </SettingPage>
  );
};

export default NotificationSetting;
