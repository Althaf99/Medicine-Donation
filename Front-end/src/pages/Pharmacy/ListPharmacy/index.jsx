import React, { useContext, useState } from "react";
import { AppContext } from "../../../components/AppContext.js";

import OptionPanel from "../option-panel";
import { styles } from "./styles";

import { Button } from "@mui/material";
import { Grid } from "@material-ui/core";
import NoteAddTwoToneIcon from "@mui/icons-material/NoteAddTwoTone";

import LazyLoadingTable from "../../../components/LazyLoadingTable";
import PageLayout from "../../../components/PageLayout";
import LabelledEditableSelect from "../../../components/LabelledEditableSelect";

import PharmacyRegistration from "../../Registration/Donor";

import useGetPharmacyDetails from "../../../hooks/services/usePharmacyDetails";

import { FLOW, ROLE } from "../../../constants";

const ListPharmacy = () => {
  const classes = styles();

  const [location, setLocation] = useState();
  const [itemColor, setItemColor] = useState();
  const [pharmacyName, setPharmacyName] = useState();
  const [list, setList] = useState(0);
  const [openPurchaseOrder, setOpenPurchaseOrder] = useState(false);

  const { role, id } = useContext(AppContext);

  console.log("role", role);
  console.log("id", id);

  // const { data: itemColors } = useColors();
  // const { data: itemNames } = useItemNames();
  // const { data: requestNumbers } = useRequestNumbers();

  // const locationArray =
  //   itemNames &&
  //   itemNames.length > 0 &&
  //   itemNames.map(({ id, location }) => ({
  //     name: location,
  //     value: location,
  //   }));

  // const itemColorsArray =
  //   itemColors &&
  //   itemColors.length > 0 &&
  //   itemColors.map(({ id, itemColor }) => ({
  //     name: itemColor,
  //     value: itemColor,
  //   }));

  // const requestNumbersArray =
  //   requestNumbers &&
  //   requestNumbers.length > 0 &&
  //   requestNumbers.map(({ id, pharmacyName }) => ({
  //     name: pharmacyName,
  //     value: pharmacyName,
  //   }));

  const { data: pharmacyDetails } = useGetPharmacyDetails({
    location: location,
    itemColor: itemColor,
    pharmacyName: pharmacyName,
  });

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
      Header: "Pharmacy Name",
      accessor: "pharmacyName",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Location",
      accessor: "location",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "Email",
      accessor: "email",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    {
      Header: "phoneNumber",
      accessor: "phoneNumber",
      headerStyles: { textAlign: "center" },
      cellStyles: { textAlign: "center" },
    },
    // {
    //   Header: "PO Date",
    //   accessor: "date",
    // },
    // {
    //   Header: "Actions",
    //   accessor: "actions",
    //   headerStyles: { textAlign: "center" },
    //   width: "13%",
    //   Cell: ({
    //     cell: {
    //       row: { values },
    //     },
    //   }) => {
    //     return <OptionPanel values={values} />;
    //   },
    // },
  ];

  const handleCreatePurchaseOrder = () => {
    setOpenPurchaseOrder(true);
  };

  let no = 0;
  pharmacyDetails?.forEach((element) => {
    no = no + 1;
    element.no = no;
  });

  return (
    <>
      <Grid container classes={{ container: classes.gridContainer }}>
        <PageLayout
          pageHeading={"Pharmacy"}
          pageActions={
            <Grid>
              <Button
                id="btn-create-purchase-order"
                variant="contained"
                onClick={handleCreatePurchaseOrder}
              >
                <NoteAddTwoToneIcon className={classes.plusIcon} />
                {"Register pharmacy"}
              </Button>
            </Grid>
          }
        >
          <Grid container spacing={2} className={classes.topCards}>
            <Grid item xs={2} className={classes.section}>
              <LabelledEditableSelect
                label="Pharmacy Name"
                id="pharmacyName"
                name="pharmacyName"
                placeholder="Select Pharmacy Name"
                onChange={(value) => setPharmacyName(value)}
                value={pharmacyName}
                // items={requestNumbersArray}
              />
            </Grid>
            <Grid item xs={2} className={classes.section}>
              <LabelledEditableSelect
                label="Location"
                id="location"
                name="location"
                placeholder="Select Location"
                onChange={(value) => setLocation(value)}
                value={location}
                // items={locationArray}
              />
            </Grid>
            {/* <Grid item xs={2} className={classes.section}>
              <LabelledEditableSelect
                label="ITEM COLOR"
                id="itemColor"
                name="itemColor"
                placeholder="Select Location Color"
                onChange={(value) => setItemColor(value)}
                value={itemColor}
                items={itemColorsArray}
              />
            </Grid> */}
            {/* <Grid item xs={0} className={classes.totalAmount}>
              {list}
            </Grid> */}
          </Grid>

          <Grid item className={classes.section} xs={12}>
            {pharmacyDetails && (
              <LazyLoadingTable
                columns={columns}
                data={pharmacyDetails}
                hiddenColumns={["id", "date"]}
                maxHeightInRows={10}
                onClickTableRow={(index, row) => {
                  console.log(index, row);
                }}
                customProps={{ height: "1200px" }}
              />
            )}
          </Grid>
        </PageLayout>

        <PharmacyRegistration
          openRegisterStudents={openPurchaseOrder}
          setOpenRegisterStudents={setOpenPurchaseOrder}
        />
      </Grid>
    </>
  );
};
export default ListPharmacy;
