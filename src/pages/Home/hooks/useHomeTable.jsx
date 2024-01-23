import axios from "axios";
import { useEffect, useState } from "react";

export const useHomeTable = () => {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:3000/portal_qry_wq");
      // here need to add cors
      return data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getTableData = async () => {
    const data = await getData();
    const rowsData = [];
    const headerData = [
      "Data",
      "Outfall",
      ...new Set(
        data?.map((item) => {
          return item.parameter_smarts;
        })
      ),
      ,
    ];

    for (let i = 0; i < data?.length; i++) {
      const existingRow = rowsData.find(
        (row) => row.Data === data[i].collectiondate
      );

      if (existingRow) {
        existingRow[data[i].parameter_smarts] = data[i].result_display;
      } else {
        rowsData.push({
          Data: data[i].collectiondate,
          Outfall: data[i].monitoringpoint,
          [data[i].parameter_smarts]: data[i].result_display,
        });
      }
    }

    setTableData({ headerData, rowsData });
  };

  useEffect(() => {
    getTableData();
  }, []);

  return { tableData, loading, error };
};
