import { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Button from '@material-ui/core/Button';
import uploadAvatar from '../../../helpers/APICalls/uploadAvatar';
import { User } from '../../../interface/User';
import useStyles from './useStyles';
import { CircularProgress } from '@material-ui/core';

interface Props {
  handleAvatar: (
    { avatarUrl }: { avatarUrl: string },
    formikHelpers: FormikHelpers<{
      avatarUrl: string;
    }>,
  ) => void;
  handleNewAvatar: (avatarUrl: string) => void;
  user: User;
}

interface Values {
  newFile: File | null;
}

const UploadPhotoForm = ({ handleAvatar, handleNewAvatar, user }: Props): JSX.Element => {
  const classes = useStyles();
  const [file, setFile] = useState<File | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleUpload = async (file: File) => {
    const newFile = file as File;
    setFile(newFile);
    if (file) {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append('avatar', file);
      formData.append('email', user.email);

      try {
        const data = await uploadAvatar(formData);
        setAvatarUrl(data.imageUrl);
        handleNewAvatar(data.imageUrl);
        setFile(null);
        setIsSubmitting(false);
        return data.imageUrl;
      } catch (error) {
        throw new Error('Something went wrong.');
      }
    }
  };

  return (
    <Formik
      initialValues={{ avatarUrl }}
      validationSchema={Yup.object().shape({
        file: Yup.mixed().required(),
      })}
      onSubmit={handleAvatar}
    >
      {({ handleSubmit, setFieldValue }) => (
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
            id="avatar"
            type="file"
            name="avatar"
            multiple={false}
            className={classes.input}
            onChange={(event) => {
              handleUpload(event.target.files![0]).then((data) => {
                setFieldValue('avatar', data);
                setAvatarUrl(data as string);
              });
            }}
          />
          <label htmlFor="avatar">
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
