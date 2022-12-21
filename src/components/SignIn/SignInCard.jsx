import React from 'react';
import {
  CreateButton,
  CreateButtonText,
  ErrorText,
  FormField,
  FormHeading,
  FormInput,
  FormLabel,
  GoogleButton,
  GoogleButtonText,
  InfoText,
  SignInCardContainer,
} from './styledComponents';
import { useForm } from 'react-hook-form';
import Google from '../../assets/google.png';

const SignInCard = () => {
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
    <SignInCardContainer>
      <FormHeading>Sign in to Binamite</FormHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput
            placeholder="8+ characters, 1 Capital letter"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be minimum 8 characters long',
              },
              validate: {
                oneLowerCharacter: (v) =>
                  /[a-z]/.test(v) || 'Should contain atleast 1 lower character',
                oneUpperCharacter: (v) =>
                  /[A-Z]/.test(v) || 'Should contain atleast 1 upper character',
                oneNumber: (v) =>
                  /[0-9]/.test(v) || 'Should contain atleast 1 number',
                oneSpecialCharacter: (v) =>
                  /[-+_!@#$%^&*., ?]/.test(v) ||
                  'Should contain atleast 1 special character',
              },
            })}
          />
          {errors.password ? (
            <ErrorText>{errors.password.message}</ErrorText>
          ) : (
            <InfoText>
              1 lower character, 1 upper character, 1 number, and 1 special
              character, also keep it minimum 8 characters long.
            </InfoText>
          )}
        </FormField>
        <CreateButton type="submit">
          <CreateButtonText>Create an account</CreateButtonText>
        </CreateButton>
      </form>
      <GoogleButton>
        <img src={Google} alt="google" style={{ marginRight: '11px' }} />
        <GoogleButtonText>Sign Up with Google</GoogleButtonText>
      </GoogleButton>
    </SignInCardContainer>
  );
};

export default SignInCard;
