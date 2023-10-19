import React, { useState, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { AppContext } from "../../../components/AppContext.js";

import OptionPanel from "../option-panel";
import { styles } from "./styles";

import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import LazyLoadingTable from "../../../components/LazyLoadingTable";
import PageLayout from "../../../components/PageLayout";
import LabelledEditableSelect from "../../../components/LabelledEditableSelect";
import CustomDatePicker from "../../../components/CustomDatePicker";

import ManageDeliveryNote from "../ManageMedicine";

import { formatDate } from "./helper.js";

import useMedicine from "../../../hooks/services/useMedicine";

import { ROLE } from "../../../constants";

const ListMedicine = () => {
  const classes = styles();
  const navigate = useNavigate();

  const [medicineName, MedicineName] = useState();
  const [itemColor, setItemColor] = useState();
  const [date, setDate] = useState(new Date());
  const [openDeliveryNoteDialogBox, setOpenDeliveryNoteDialogBox] =
    useState(false);

  const { role, id } = useContext(AppContext);
  // const { data: itemColors } = useColors();
  // const { data: itemNames } = useItemNames();

  // const itemNamesArray =
  //   itemNames &&
  //   itemNames.length > 0 &&
  //   itemNames.map(({ id, medicineName }) => ({
  //     name: medicineName,
  //     value: medicineName,
  //   }));

  // const itemColorsArray =
  //   itemColors &&
  //   itemColors.length > 0 &&
  //   itemColors.map(({ id, itemColor }) => ({
  //     name: itemColor,
  //     value: itemColor,
  //   }));

  const { data: medicineData } = useMedicine();

  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "No",
      accessor: "no",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
      width: "5%",
    },
    {
      Header: "Medicine Name",
      accessor: "medicineName",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Prescription",
      accessor: "prescription",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },

    // {
    //   Header: "Manufacture Date",
    //   accessor: "manufactureDate",
    //   headerStyles: { textAlign: "center" },
    //   cellStyles: { textAlign: "center" },
    // },
    {
      Header: "Expiry Date",
      accessor: "expiryDate",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Quantity",
      accessor: "quantity",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
      Cell: ({ value }) => <>{value?.toLocaleString()}</>,
    },

    {
      Header: "Actions",
      accessor: "actions",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
      Cell: ({
        cell: {
          row: { values },
        },
      }) => {
        return <OptionPanel values={values} role={role} id={id} />;
      },
    },
  ];

  const handleCreateDeliveryNote = () => {
    setOpenDeliveryNoteDialogBox(true);
  };

  const handleDateSelect = (date) => {
    setDate(date);
  };
  const handlePrintDeliveryNote = () => {
    navigate(`/deliveryNotePrinter`, {
      state: { deliveryNoteDate: formatDate(date) },
    });
  };

  let no = 0;
  medicineData?.forEach((element) => {
    element.item = `${element.medicineName} ${element.itemColor}`;
    no = no + 1;
    element.no = no;
  });

  return (
    <>
      <Grid container classes={{ container: classes.gridContainer }}>
        <PageLayout
          pageHeading={"Medicine"}
          pageActions={
            <Grid>
              {role === ROLE.PHARMACY && (
                <Button
                  id="btn-create-Delivery-Note"
                  variant="contained"
                  onClick={handleCreateDeliveryNote}
                >
                  <AddCircleOutlineIcon className={classes.plusIcon} />
                  {"Create Medicine"}
                </Button>
              )}
              {/* <Grid className={classes.printButton}>
                <Button
                  id="btn-create-invoice"
                  variant="contained"
                  onClick={handlePrintDeliveryNote}
                >
                  <AddCircleOutlineIcon className={classes.plusIcon} />
                  {"Print Medicine Details"}
                </Button>
              </Grid> */}
            </Grid>
          }
        >
          <Grid container spacing={2} className={classes.topCards}>
            <Grid item xs={2} className={classes.section}>
              <Grid className={classes.label}>SELECT DATE EXPIRY DATE</Grid>
              <CustomDatePicker
                handleDateSelect={handleDateSelect}
                date={date}
              />
            </Grid>
            <Grid item xs={2} className={classes.section}>
              <LabelledEditableSelect
                label="MEDICINE NAME"
                id="medicineName"
                name="medicineName"
                placeholder="Select Medicine Name"
                onChange={(value) => MedicineName(value)}
                value={medicineName}
                // items={itemNamesArray}
              />
            </Grid>
            {/* <Grid item xs={2} className={classes.section}>
              <LabelledEditableSelect
                label="ITEM COLOR"
                id="itemColor"
                name="itemColor"
                placeholder="Select Item Color"
                onChange={(value) => setItemColor(value)}
                value={itemColor}
                items={itemColorsArray}
              />
            </Grid> */}
          </Grid>

          <Grid item className={classes.section} xs={12}>
            {medicineData && (
              <LazyLoadingTable
                columns={columns}
                hasNextPage={false}
                data={medicineData}
                hiddenColumns={["id"]}
                maxHeightInRows={15}
                customProps={{ height: "750px" }}
                onClickTableRow={(index, row) => {
                  console.log(index, row);
                }}
              />
            )}
          </Grid>
        </PageLayout>

        <ManageDeliveryNote
          // itemColorsArray={itemColorsArray}
          // itemNamesArray={itemNamesArray}
          openDeliveryNoteDialogBox={openDeliveryNoteDialogBox}
          setOpenDeliveryNoteDialogBox={setOpenDeliveryNoteDialogBox}
          id={id}
        />
      </Grid>
    </>
  );
};
export default ListMedicine;
