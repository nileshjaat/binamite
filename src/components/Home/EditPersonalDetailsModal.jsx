import React from 'react';
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
import { useForm } from 'react-hook-form';
import {
  ErrorText,
  FormField,
  FormInput,
  FormLabel,
  InfoText,
} from '../SignIn/styledComponents';

const EditPersonalDetailsModal = ({
  editProfileDetailsModal,
  setEditProfileDetailsModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log('data', data);
    console.log('errors', errors);
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
              <UpdateButton type="submit">
                <UpdateButtonText>Update Details</UpdateButtonText>
              </UpdateButton>
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
