import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../components/AppContext.js";

import { Grid, Button } from "@mui/material";
import NoteAddTwoToneIcon from "@mui/icons-material/NoteAddTwoTone";

import PageLayout from "../../../components/PageLayout";
import LazyLoadingTable from "../../../components/LazyLoadingTable";
import ManageEmployee from "../manage-orders";

import OptionPanel from "../option-panel";

import { styles } from "./styles";

import useGetOrdersList from "../../../hooks/services/useGetOrdersList";

const ListOrders = () => {
  const classes = styles();
  const navigate = useNavigate();

  const [openCreateEmployee, setOpenCreateEmployee] = useState(false);

  const handleCreateEmployee = () => {
    setOpenCreateEmployee(true);
  };

  const { role, id } = useContext(AppContext);

  const { data: ordersData } = useGetOrdersList({
    id: id,
    role: role,
  });

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Medicine Name",
      accessor: "medicineName",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Prescription",
      accessor: "medicinePrescription",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "ExpiryDate",
      accessor: "expiryDate",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "PharmacyName",
      accessor: "pharmacyName",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Pharmacy Location",
      accessor: "pharmacyLocation",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Actions",
      accessor: "actions",
      headerStyles: { textAlign: "center" },
      width: "13%",
      Cell: ({
        cell: {
          row: { values },
        },
      }) => {
        return <OptionPanel values={values} />;
      },
    },
  ];

  return (
    <Grid item container classes={{ container: classes.gridContainer }}>
      <PageLayout pageHeading={"User Order Details"}>
        <Grid item className={classes.section} xs={12}>
          {ordersData && (
            <LazyLoadingTable
              columns={columns}
              data={ordersData}
              hiddenColumns={["id"]}
              maxHeightInRows={10}
              onClickTableRow={(index, row) => {
                console.log(index, row);
              }}
              customProps={{ height: "1200px" }}
            />
          )}
        </Grid>
      </PageLayout>
      <ManageEmployee
        setOpenEmployeeDialogBox={setOpenCreateEmployee}
        openEmployeeDialogBox={openCreateEmployee}
      />
    </Grid>
  );
};
export default ListOrders;
