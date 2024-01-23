import React from "react";
import TableComp from "../../components/Table/Table";
import { Box, Typography } from "@mui/material";
import { useHomeTable } from "./hooks/useHomeTable";

const Home = () => {
  const { tableData, loading, error } = useHomeTable();

  return (
    <Box>
      <TableComp tableData={tableData} />
      {loading && (
        <Typography color="white" variant="h2">
          Loading...
        </Typography>
      )}
      {error && (
        <Typography color="red" variant="h2">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default Home;
