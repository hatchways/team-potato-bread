import React from 'react';
import useStyles from './useStyles';
import { Box, TextField, Button } from '@material-ui/core';
import { Formik } from 'formik';
const PostPetStatus = (): JSX.Element => {
  const classes = useStyles();
  const handleSubmit = ({ description }: { description: string }) => {
    console.log('submit');
  };
  return (
    <Formik
      initialValues={{
        description: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, handleChange, values, touched, errors, isSubmitting }) => (
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
