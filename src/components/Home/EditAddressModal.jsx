import React from 'react';
import {
  ButtonsContainer,
  CancelButton,
  CancelButtonText,
  CardTitle,
  EditModalWrapper,
  UpdateButton,
  UpdateButtonText,
} from './styledComponents';
import { useForm } from 'react-hook-form';
import {
  ErrorText,
  FormField,
  FormInput,
  FormLabel,
} from '../SignIn/styledComponents';

const EditAddressModal = ({ editAddressModal, setEditAddressModal }) => {
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
      {editAddressModal ? (
        <EditModalWrapper>
          <CardTitle>Address Details</CardTitle>
          <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: '10px' }}>
            <FormField>
              <FormLabel htmlFor="address">Address</FormLabel>
              <FormInput
                placeholder="Address"
                type="address"
                {...register('address', {
                  required: 'Address is required',
                })}
              />
              {errors.address && (
                <ErrorText>{errors.address.message}</ErrorText>
              )}
            </FormField>
            <FormField>
              <FormLabel htmlFor="city">City</FormLabel>
              <FormInput
                placeholder="City"
                type="city"
                {...register('city', {
                  required: 'City is required',
                })}
              />
              {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
            </FormField>
            <FormField>
              <FormLabel htmlFor="state">State</FormLabel>
              <FormInput
                placeholder="State"
                type="state"
                {...register('state', {
                  required: 'State is required',
                })}
              />
              {errors.state && <ErrorText>{errors.state.message}</ErrorText>}
            </FormField>
            <FormField>
              <FormLabel htmlFor="country">Country</FormLabel>
              <FormInput
                placeholder="Country"
                type="country"
                {...register('country', {
                  required: 'Country is required',
                })}
              />
              {errors.country && (
                <ErrorText>{errors.country.message}</ErrorText>
              )}
            </FormField>
            <FormField>
              <FormLabel htmlFor="zipCode">Zip Code</FormLabel>
              <FormInput
                placeholder="Zip Code"
                type="zipCode"
                {...register('zipCode', {
                  required: 'Zip Code is required',
                })}
              />
              {errors.zipCode && (
                <ErrorText>{errors.zipCode.message}</ErrorText>
              )}
            </FormField>
            <ButtonsContainer>
              <UpdateButton type="submit">
                <UpdateButtonText>Update Details</UpdateButtonText>
              </UpdateButton>
              <CancelButton
                type="button"
                onClick={() => setEditAddressModal(false)}
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

export default EditAddressModal;
