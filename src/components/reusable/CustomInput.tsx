import { useState } from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { FiEye, FiEyeOff } from "react-icons/fi";

type Props = {
  placeholder: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  helperText?: string;
};

const CustomInput = ({ placeholder, type, onChange, value, helperText }: Props) => {
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
      onChange={onChange}
      value={value}
      name={"new-" + type}
      autoComplete="off"
      helperText={helperText}
      multiline={type == "textarea" ? true : false}
      rows={4}
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
