import { Button, CircularProgress } from "@mui/material";

type Props = {
  text: string;
  variant: "text" | "outlined" | "contained";
  type?: "button" | "submit" | "reset" | undefined;
  backroundColor: string;
  isLoading?: boolean;
  onClick?: (_param?: string) => void;
};
const CustomButtom = ({ text, variant, type, backroundColor, isLoading, onClick }: Props) => {
  //function switch case backroundColor
  const changeBgColor = (backroundColor: string) => {
    switch (backroundColor) {
      case "redpink":
        return "#FF4363";
      case "royalblue":
        return "#3D60DE";
      case "#CFCFDB":
        return "#CFCFDB";
      case "#1F2F54":
        return "#1F2F54";
      default:
        return "prmary";
    }
  };

  // function switch case color
  const changeColor = (backroundColor: string) => {
    switch (backroundColor) {
      case "redpink":
        return "#FFFFFF";
      case "royalblue":
        return "#FFFFFF";
      case "#CFCFDB":
        return "#0B0B2C";
      default:
        return "prmary";
    }
  };

  return (
    <Button
      variant={variant}
      type={type}
      sx={{
        width: "100%",
        padding: "12px 16px",
        backgroundColor: changeBgColor(backroundColor),
        borderRadius: "8px",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 700,
        fontFamily: "Inter",
        lineHeight: "32px",
        color: variant === "text" ? "#FF4363" : changeColor(backroundColor),
        "&:hover": {
          backgroundColor: changeBgColor(backroundColor),
        },
      }}
      onClick={onClick ? () => onClick() : undefined}
    >
      {isLoading ? <CircularProgress size={24} sx={{ color: "#FFFFFF" }} /> : text}
    </Button>
  );
};

export default CustomButtom;
