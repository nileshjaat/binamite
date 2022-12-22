import React, { useState } from 'react';
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
import ClipLoader from 'react-spinners/ClipLoader';
import { axios } from '../../core';

const EditAddressModal = ({
  editAddressModal,
  setEditAddressModal,
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
          address: form.address,
          city: form.city,
          state: form.state,
          country: form.country,
          zipCode: form.zipCode,
        },
        {
          withCredentials: true,
        }
      );
      setIsFetching(false);
      setEditAddressModal(false);
    } catch (error) {
      console.log('err', error);
    }
  };

  const intialValues = {
    address: details.address,
    city: details.city,
    state: details.state,
    country: details.country,
    zipCode: details.zipCode,
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
                defaultValue={intialValues.address}
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
                defaultValue={intialValues.city}
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
                defaultValue={intialValues.state}
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
                defaultValue={intialValues.country}
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
                defaultValue={intialValues.zipCode}
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
