export type NotificationDataDetail = {
  url: string;
  message: string;
}

export type NotificationType = {
  id: string;
  type: string;
  notifiable_type: string;
  notifiable_id: number;
  data: NotificationDataDetail;
  read_at: string | null; // Bisa null jika belum dibaca
  created_at: string;
  updated_at: string;
}
