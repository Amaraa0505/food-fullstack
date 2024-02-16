import { Button, Input } from "@/components";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const StepThree = () => {
  const router = useRouter();
  const savePassword = async () => {
    try {
      await Swal.fire({
        ///
        title: "Таны нууц үг амжилттай солигдлоо",
        text: "та шинэ нууц үгээ ашиглан нэвтэрнэ үү",
        icon: "success",
      });
      router.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          padding: "5rem 0",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Шинэ нууц үг cэргээх
        </Typography>

        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input name="password" label="Нууц үг" showPassword />
          <Input name="password" label="Нууц үг давтах" showPassword />
          <Button label={"Сэргээх"} onClick={savePassword} />
        </Stack>
      </Box>
    </Container>
  );
};

export default StepThree;
