import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = {
  placeholder: string;
  type?: string;
};

const CustomInput = ({ placeholder, type }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      variant="outlined"
      sx={{ width: "100%" }}
      placeholder={placeholder}
      type={type === "password" && showPassword ? "text" : type}
      name={"new-" + type}
      autoComplete="off"
      InputProps={{
        endAdornment: type === "password" && (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomInput;
