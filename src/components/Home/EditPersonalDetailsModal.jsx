import React, { useState } from 'react';
import {
  ButtonsContainer,
  CancelButton,
  CancelButtonText,
  CardTitle,
  EditModalWrapper,
  ModalInfoText,
  UpdateButton,
  UpdateButtonText,
} from './styledComponents';
import ClipLoader from 'react-spinners/ClipLoader';
import { useForm } from 'react-hook-form';
import {
  ErrorText,
  FormField,
  FormInput,
  FormLabel,
} from '../SignIn/styledComponents';
import { axios } from '../../core';

const EditPersonalDetailsModal = ({
  editProfileDetailsModal,
  setEditProfileDetailsModal,
  details,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isFetching, setIsFetching] = useState(false);

  const onSubmit = async (form) => {
    setIsFetching(true);

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/auth/updateProfile`,
        {
          ...details,
          email: form.email,
          name: form.fullName,
        },
        {
          withCredentials: true,
        }
      );
      setIsFetching(false);
      setEditProfileDetailsModal(false);
    } catch (error) {
      console.log('err', error);
    }
  };

  const intialValues = {
    fullName: details.name,
    email: details.email,
  };

  return (
    <>
      {editProfileDetailsModal ? (
        <EditModalWrapper>
          <CardTitle>Personal Details</CardTitle>
          <ModalInfoText>
            Praesent sit amet velit lobortis, volutpat odio eget, tincidunt
            eros.
          </ModalInfoText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormField>
              <FormLabel htmlFor="fullName">Full Name</FormLabel>
              <FormInput
                defaultValue={intialValues.fullName}
                placeholder="Full Name"
                type="fullName"
                {...register('fullName', {
                  required: 'Full Name is required',
                })}
              />
              {errors.fullName && (
                <ErrorText>{errors.fullName.message}</ErrorText>
              )}
            </FormField>
            <FormField>
              <FormLabel htmlFor="email">Email ID</FormLabel>
              <FormInput
                defaultValue={intialValues.email}
                placeholder="name@email.com"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Please enter a valid email',
                  },
                })}
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </FormField>
            <FormField>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormInput
                placeholder="Username"
                {...register('username', {
                  required: 'Username is required',
                  minLength: {
                    value: 3,
                    message: 'Username must be minimum 8 characters long',
                  },
                })}
              />
              {errors.username && (
                <ErrorText>{errors.username.message}</ErrorText>
              )}
            </FormField>
            <FormField>
              <FormLabel htmlFor="phone">Phone no.</FormLabel>
              <FormInput
                placeholder="+91 9999999999"
                {...register('phone', {
                  required: 'Phone no. is required',
                })}
              />
              {errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
            </FormField>
            <ButtonsContainer>
              {isFetching ? (
                <ClipLoader
                  color="#f5df4d"
                  loading={true}
                  size={50}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <UpdateButton type="submit">
                  <UpdateButtonText>Update Details</UpdateButtonText>
                </UpdateButton>
              )}

              <CancelButton
                type="button"
                onClick={() => setEditProfileDetailsModal(false)}
              >
                <CancelButtonText>Cancel</CancelButtonText>
              </CancelButton>
            </ButtonsContainer>
          </form>
        </EditModalWrapper>
      ) : null}
    </>
  );
};

export default EditPersonalDetailsModal;
