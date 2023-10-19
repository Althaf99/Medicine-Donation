import React from "react";

import { Grid, Button, Divider, Box } from "@mui/material";

import EditIcon from "../../../components/EditIcon";
import DeleteIcon from "../../../components/DeleteIcon";

import { styles } from "../ListMedicine/styles";

import { ROLE } from "../../../constants";

import { SelectAll } from "@material-ui/icons";

import useAddMedicine from "../../../hooks/services/useAddMedicine";

const OptionPanel = ({ values, role, id }) => {
  const classes = styles();

  const { mutateAsync: addMedicine } = useAddMedicine();

  const handleAddMedicine = () => {
    const orderList = {
      medicineId: values.id,
      patientId: id,
    };
    addMedicine(orderList);
  };
  return (
    <Grid>
      {role === ROLE.PHARMACY ? (
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
