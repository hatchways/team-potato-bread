import React from 'react';
import useStyles from './useStyles';
import { Box, TextField, Button } from '@material-ui/core';
import { Formik } from 'formik';
import { postStatus } from '../../../helpers/APICalls/pet';
import { usePet } from '../../../context/usePetContext';
import { useSnackBar } from '../../../context/useSnackbarContext';
interface Props {
  setShowPostForm: () => void;
  petId?: string;
}
const PostPetStatus = ({ setShowPostForm, petId }: Props): JSX.Element => {
  const classes = useStyles();
  const { updatePetContext, pets, updateCurrentPet } = usePet();
  const { updateSnackBarMessage } = useSnackBar();
  const handleSubmit = async ({ description }: { description: string }) => {
    if (!petId) return;
    try {
      const updatedPet = await postStatus(petId, description);
      if (pets) {
        const updatedPets = pets.map((c) => (c._id === updatedPet.success.pet._id ? updatedPet.success.pet : c));
        updatePetContext(updatedPets);
        updateCurrentPet(updatedPet.success.pet);
        updateSnackBarMessage('The new status has been posted successfully!');
      }
      setShowPostForm();
    } catch (e) {
      updateSnackBarMessage('Something went wrong!');
    }
  };
  return (
    <Formik
      initialValues={{
        description: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values }) => (
        <form onSubmit={handleSubmit} noValidate className={classes.petStatusForm}>
          <TextField
            id="description"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            rowsMax={6}
            name="description"
            autoFocus
            value={values.description}
            onChange={handleChange}
            placeholder="Post your pet status"
          />

          <Box textAlign="center" className={classes.petStatusFormBtn}>
            <Button type="submit" size="large" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default PostPetStatus;
