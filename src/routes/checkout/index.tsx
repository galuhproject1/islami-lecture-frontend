import { Box, Button, Typography } from "@mui/material";
import VideoCourse from "../../components/section/Course/VideoCourse";
import { FaCheck } from "react-icons/fa6";
import CustomInput from "../../components/reusable/CustomInput";
import { priceFormat } from "../../utils/priceFormat";
import useProductStore from "../../store/productDetailSrore";

type Price = {
  classPrice: number;
  promo: number;
  serviceFee: number;
  totalPayment: number;
};

const CheckoutPage = () => {
  const benefits: string[] = [
    "Grup Diskusi Belajar",
    "Sertifikat Kelulusan",
    "File pendukung belajar",
  ];

  const price: Price = {
    classPrice: 320000,
    promo: 1500,
    serviceFee: 15000,
    totalPayment: 0,
  };

  price.totalPayment = price.classPrice - price.promo + price.serviceFee;

  const productDetail = useProductStore((state) => state.productDetail);

  if (!productDetail) return null;
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "between",
        alignItems: "start",
        gap: 4,
        marginY: "10px",
      }}
    >
      <Box
        sx={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <VideoCourse dataDetail={productDetail} />
      </Box>

      <Box
        sx={{
          width: "30%",
          padding: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography
          sx={{ fontWeight: 700, fontSize: "24px", color: "primary", px: 2 }}
        >
          Benefit yang di dapat
        </Typography>
        {benefits.map((data) => (
          <Typography
            key={data}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              fontSize: "16px",
              fontWeight: 400,
              color: "primary",
              px: 2,
            }}
          >
            <FaCheck
              className="text-primary p-1 rounded-full bg-amber-400"
              size={20}
            />{" "}
            {data}
          </Typography>
        ))}
        <Box
          sx={{
            backgroundColor: "white",
            padding: 2,
            borderRadius: "8px",
            mt: 2,
          }}
        >
          <Typography
            sx={{ fontWeight: 700, fontSize: "24px", color: "primary", mb: 2 }}
          >
            Pilih Metode pembayaran
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              color: "primary",
            }}
          >
            Pakai Kode Promo lebih hemat
          </Typography>
          <CustomInput placeholder="masukkan KODE PROMO" type="" />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 2 }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: "primary",
              }}
            >
              Payments Details
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                Harga Kelas
              </Typography>
              <Typography>Rp. {priceFormat(price.classPrice)}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                Potong kode promo
              </Typography>
              <Typography>Rp. {priceFormat(price.promo)}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                Service fee per murid
              </Typography>
              <Typography>Rp. {priceFormat(price.serviceFee)}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                Total Transfer
              </Typography>
              <Typography>Rp. {priceFormat(price.totalPayment)}</Typography>
            </Box>
          </Box>
          <Button
            disabled
            sx={{
              width: "100%",
              height: "52px",
              backgroundColor: "#3D60DE",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "Inter",
              color: "white",
              "&:hover": {
                backgroundColor: "#3D60DE",
              },
            }}
            onClick={() => {}}
          >
            Bayar Kelas
          </Button>
        </Box>
        <Box
          sx={{
            backgroundColor: "white",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 600,
              color: "primary",
            }}
          >
            Pakai Kode Promo lebih hemat
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: 400, color: "primary" }}
          >
            Proses konfirmasi pembayaran kelas akan membutuhkan waktu sekitar 20
            menit (melalui whatssapp) jika menggunakan metode pembayaran manual.
            mohon menunggu dan terima kasih
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: "primary",
              }}
            >
              Butuh bantuan? hubungi kami
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                Admin
              </Typography>
              <Typography>Admin</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
            >
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                No. Whatsapp
              </Typography>
              <Typography sx={{ fontWeight: 600, fontSize: "14px" }}>+6282334239987</Typography>
            </Box>
          </Box>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              height: "52px",
              borderRadius: "8px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 700,
              fontFamily: "Inter",
              backgroundColor: "#00C366",
              color: "white",
              "&:hover": {
                backgroundColor: "#00C366",
                border: "none",
              },
              border: "none",
            }}
          >
            Whatsapp ke Admin
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default CheckoutPage;
