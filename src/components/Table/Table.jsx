import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import { tableStyles } from "./styles";

const TableComp = ({ tableData }) => {
  const { headerData, rowsData } = tableData;
  return (
    <TableContainer
      component={Paper}
      aria-label="simple table"
      sx={tableStyles.tableContainer}
    >
      <Table>
        <TableHead sx={tableStyles.tableHead}>
          <TableRow>
            {headerData?.map((item) => {
              return (
                <TableCell
                  key={item}
                  sx={tableStyles.tableHeadCell}
                  align="center"
                >
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData?.map((row) => (
            <TableRow key={row.Data}>
              {headerData?.map((item) => {
                return (
                  <TableCell
                    key={item}
                    sx={tableStyles.tableBodyCell}
                    align="center"
                  >
                    {row[item]}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComp;
