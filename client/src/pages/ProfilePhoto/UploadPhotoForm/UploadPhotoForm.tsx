import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';

interface Props {
  handleUpload: (newFile: File) => void;
}

const UploadPhotoForm = ({ handleUpload }: Props): JSX.Element => {
  const classes = useStyles();
  const [newFile, setNewFile] = useState<File | null>(null);

  return (
    <Formik
      initialValues={{ newFile: null }}
      validationSchema={Yup.object().shape({
        file: Yup.mixed().required(),
      })}
      onSubmit={(newFile: File) => {
        console.log(newFile);
        handleUpload(newFile);
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <form
          action="/image/avatar"
          encType="multipart/form-data"
          method="POST"
          className={classes.form}
          noValidate
          onSubmit={handleSubmit}
        >
          <input
            accept="image/*"
            id="newFile"
            type="file"
            name="newFile"
            multiple={false}
            className={classes.input}
            onChange={(event) => {
              setNewFile(event.target.files?.[0] as File);
              handleSubmit;
            }}
          />
          <label htmlFor="newFile">
            <Button className={classes.uploadButton} variant="outlined" color="primary" component="span">
              {isSubmitting ? <CircularProgress style={{ color: 'firebrick' }} /> : 'Upload a file from your device'}
            </Button>
          </label>
        </form>
      )}
    </Formik>
  );
};

export default UploadPhotoForm;
