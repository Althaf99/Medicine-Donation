import React from "react";

import { Grid, Button, Divider, Box } from "@mui/material";

import EditIcon from "../../../components/EditIcon";
import DeleteIcon from "../../../components/DeleteIcon";

import { styles } from "../ListMedicine/styles";

import { ROLE } from "../../../constants";

import { SelectAll } from "@material-ui/icons";

import useAddMedicine from "../../../hooks/services/useAddMedicine";

import useDeleteMedicine from "../../../hooks/services/useDeleteMedicine";

const OptionPanel = ({ values, role, id, medicineData, setDataMedicine }) => {
  const classes = styles();

  const { mutateAsync: addMedicine } = useAddMedicine();
  const { mutateAsync: deleteMedicine } = useDeleteMedicine({ id: values?.id });

  const handleAddMedicine = () => {
    const orderList = {
      medicineId: values.id,
      patientId: id,
    };
    addMedicine(orderList);
  };

  const handleDeleteMedicine = async () => {
    await deleteMedicine();
    setDataMedicine(medicineData);
  };
  return (
    <Grid>
      {role !== ROLE.USER ? (
        <Grid item container>
          <Grid item>
            <Button
              id="btn-edit-credential"
              onClick={(e) => {
                e.stopPropagation();
              }}
              variant="text"
              classes={classes.btnRoot}
              startIcon={
                <EditIcon color="#808CA3" className={classes.editIconRoot} />
              }
            >
              <span className={classes.btnText}>Edit</span>
            </Button>
          </Grid>
          <Divider
            orientation="vertical"
            flexItem
            className={classes.divider}
          />
          <Grid item>
            <Button
              id="btn-delete-credential"
              variant="text"
              onClick={(e) => {
                handleDeleteMedicine();
                e.stopPropagation();
              }}
              classes={classes.deleteBtn}
              startIcon={<DeleteIcon className={classes.menuIconRoot} />}
            >
              <span className={classes.btnText}>Delete</span>
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Box>
          <Button
            id="btn-add"
            variant="text"
            onClick={(e) => {
              handleAddMedicine();
            }}
            startIcon={<SelectAll className={classes.menuIconRoot} />}
          >
            <span className={classes.btnText}>ADD</span>
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default OptionPanel;
