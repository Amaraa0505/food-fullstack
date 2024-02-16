import { Button as MuiButton, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

interface IButtonProps {
  label: string;
  disabled?: boolean;
  loading?: boolean;
  btnType?: "contained" | "outlined" | "text";
  onClick?: () => void;
  href?: string;
}

export const Button = ({
  label,
  disabled = false,
  loading = false,
  btnType = "contained",
  onClick,
  href,
}: IButtonProps) => {
  return (
    <Stack>
      <MuiButton
        href={href}
        onClick={onClick}
        color="primary"
        variant={btnType}
        sx={{
          p: 3,
          fontSize: "1rem",
          width: 400,
          color:
            btnType === "outlined" || btnType === "text" ? "#00c853" : "white",
          border: btnType === "outlined" ? 1 : 0,
          borderColor: btnType === "outlined" ? "#00c853" : "",
        }}
        disabled={disabled}
        size="medium"
      >
        {label}
      </MuiButton>
    </Stack>
  );
};
