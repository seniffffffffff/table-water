import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";

const TableComp = ({ tableData }) => {
  const { headerData, rowsData } = tableData;
  return (
    <TableContainer
      component={Paper}
      aria-label="simple table"
      sx={{ boxShadow: "none", display: "flex", justifyContent: "center" }}
    >
      <Table sx={{ maxWidth: 1000 }}>
        <TableHead>
          <TableRow>
            {headerData?.map((item) => {
              return <TableCell key={item}>{item}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData?.map((row) => (
            <TableRow
              key={row.Data}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {headerData?.map((item) => {
                return <TableCell key={item}>{row[item]}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
