import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Stores = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Stores" subtitle="Stores details" />
      
    </Box>
  );
};

export default Stores;
