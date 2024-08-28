import { Box, Button, IconButton, Typography } from "@mui/material";
import SettingPage from "..";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { useEffect, useState } from "react";
import { getNotification } from "../../../../api/notification/getNotification";
import { NotificationType } from "../../../../libs/Types/notifications";
import { FaRegCheckSquare } from "react-icons/fa";
import NothingNotif from "../../../../components/reusable/EmptyState/NothingNotif";
import { formatDistanceToNowStrict, isToday, isYesterday } from "date-fns";
import { IoIosArrowRoundBack } from "react-icons/io";
import api from "../../../../libs/api";

const NotificationSetting = () => {
  const [dataNotifications, setDataNotifications] = useState<
    NotificationType[]
  >([]);
  const [detailNotif, setDetailNotif] = useState<boolean>(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      const { data } = await getNotification();

      setDataNotifications(data.data);
    };
    fetchNotifications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailNotif]);

  function formatNotificationDate(createdAt: string): string {
    const date = new Date(createdAt);

    if (isToday(date)) {
      const hoursDifference = formatDistanceToNowStrict(date, { unit: "hour" });
      return `${hoursDifference} ago`;
    }

    if (isYesterday(date)) {
      return "1 day ago";
    }

    return formatDistanceToNowStrict(date);
  }

  const updateNotifications = async (id: string) => {
    const data = {
      notification_ids: id,
    };
    try {
      const response = await api.post("/user/notifications/read", data);
      if (response.status === 200) {
        setDetailNotif(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SettingPage>
      <Box
        sx={{
          display: detailNotif ? "none" : "flex",
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
          <Button
            disabled
            variant="text"
            sx={{
              gap: 1,
              display: dataNotifications.length > 0 ? "flex" : "none",
            }}
          >
            <FaRegCheckSquare size={24} className="text-[#FFBB54] font-bold" />
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
        {dataNotifications.length === 0 && <NothingNotif />}
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
            onClick={() => updateNotifications(notification.id)}
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
                {notification?.created_at &&
                  formatNotificationDate(notification?.created_at)}
              </Typography>
              <Box
                sx={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#DB5962",
                  display: notification?.read_at === null ? "block" : "none",
                }}
              ></Box>
            </Box>
          </Box>
        ))}
      </Box>
      {detailNotif && (
        <Box sx={{ gap: 2, p: 4 }}>
          <IconButton onClick={() => setDetailNotif(false)}>
            <IoIosArrowRoundBack className="text-primary" size={24} />
          </IconButton>
          <Typography>Detail Notification</Typography>
        </Box>
      )}
    </SettingPage>
  );
};

export default NotificationSetting;
