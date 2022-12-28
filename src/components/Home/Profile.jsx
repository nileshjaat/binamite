import React, { useState } from 'react';
import {
  PageTitle,
  ProfileCard,
  ProfileContainer,
  PageContainer,
  Col,
  CardHeader,
  CardTitle,
  ManageButton,
  ManageButtonText,
  ProfileContent,
  ProfileDetails,
  ProfileDetail,
  Label,
  Field,
  InfoText,
  ErrorText,
  VerifyButton,
  VerifyButtonText,
} from './styledComponents';
import Manage from '../../assets/edit.png';
import ProfilePic from '../../assets/profile-pic.png';
import EditPersonalDetailsModal from './EditPersonalDetailsModal';
import EditAddressModal from './EditAddressModal';

const Profile = ({ details, showSidebar }) => {
  const [editProfileDetailsModal, setEditProfileDetailsModal] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);

  return (
    <PageContainer showSidebar={showSidebar}>
      <EditPersonalDetailsModal
        editProfileDetailsModal={editProfileDetailsModal}
        setEditProfileDetailsModal={setEditProfileDetailsModal}
        details={details}
      />
      <EditAddressModal
        editAddressModal={editAddressModal}
        setEditAddressModal={setEditAddressModal}
        details={details}
      />
      <PageTitle>Contractor Profile</PageTitle>
      <ProfileContainer>
        <Col>
          <ProfileCard>
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <ManageButton onClick={() => setEditProfileDetailsModal(true)}>
                <img src={Manage} alt="manage" style={{ marginRight: '7px' }} />
                <ManageButtonText>Manage</ManageButtonText>
              </ManageButton>
            </CardHeader>
            <ProfileContent>
              <img
                src={ProfilePic}
                alt="profile-pic"
                style={{ marginRight: '30px' }}
              />
              <ProfileDetails>
                <ProfileDetail>
                  <Label>Full Name</Label>
                  <Field>{details.name}</Field>
                </ProfileDetail>
                <ProfileDetail>
                  <Label>Username</Label>
                  <Field>bhintade.nikhil</Field>
                </ProfileDetail>
                <ProfileDetail>
                  <Label>Email Address</Label>
                  <Field>{details.email}</Field>
                </ProfileDetail>
                <ProfileDetail>
                  <Label>Phone Number</Label>
                  <Field>+91 94******435</Field>
                </ProfileDetail>
              </ProfileDetails>
            </ProfileContent>
          </ProfileCard>

          <ProfileCard>
            <CardHeader>
              <CardTitle>Address Location</CardTitle>
              <ManageButton onClick={() => setEditAddressModal(true)}>
                <img src={Manage} alt="manage" style={{ marginRight: '7px' }} />
                <ManageButtonText>Manage</ManageButtonText>
              </ManageButton>
            </CardHeader>
            <ProfileContent>
              <ProfileDetails>
                <ProfileDetail>
                  <Label>Time Zone</Label>
                  <Field>UTC+05:30 Mumbai, Kolkata, Chennai, New Delhi</Field>
                </ProfileDetail>
                <ProfileDetail>
                  <Label>Primary</Label>
                  <Field>
                    {details.address}, <br /> {details.city}, {details.state},
                    <br /> {details.country} {details.zipCode}
                  </Field>
                </ProfileDetail>
              </ProfileDetails>
            </ProfileContent>
          </ProfileCard>
        </Col>
        <Col>
          <ProfileCard>
            <CardHeader>
              <CardTitle>Tax Identification (ID)</CardTitle>
              <ManageButton>
                <img src={Manage} alt="manage" style={{ marginRight: '7px' }} />
                <ManageButtonText>Manage</ManageButtonText>
              </ManageButton>
            </CardHeader>
            <ProfileContent>
              <ProfileDetails>
                <ProfileDetail>
                  <InfoText>
                    A Primary Account Number (PAN) is requested from all
                    companies located in India.
                  </InfoText>
                </ProfileDetail>
                <ProfileDetail>
                  <Label>Legal Taxpayer Name</Label>
                  <Field>Octaloop Technologies Private Limited</Field>
                </ProfileDetail>
                <ProfileDetail>
                  <Label>PAN Number</Label>
                  <Field>SFSFG8779B</Field>
                  <ErrorText>*PAN Pending Verification</ErrorText>
                  <VerifyButton>
                    <VerifyButtonText>Verify Now</VerifyButtonText>
                  </VerifyButton>
                </ProfileDetail>
              </ProfileDetails>
            </ProfileContent>
          </ProfileCard>

          <ProfileCard>
            <CardHeader>
              <CardTitle>GSTIN</CardTitle>
              <ManageButton>
                <img src={Manage} alt="manage" style={{ marginRight: '7px' }} />
                <ManageButtonText>Manage</ManageButtonText>
              </ManageButton>
            </CardHeader>
            <ProfileContent>
              <ProfileDetails>
                <ProfileDetail>
                  <InfoText>
                    A Good & Services Tax Identification Number is requested
                    from all persons located in country where Binamite Supports
                    GSTIN.
                  </InfoText>
                </ProfileDetail>
                <ProfileDetail>
                  <Label>GSTIN</Label>
                  <Field>356DFHSFSFG8779B</Field>
                </ProfileDetail>
              </ProfileDetails>
            </ProfileContent>
          </ProfileCard>

          <ProfileCard>
            <CardHeader>
              <CardTitle>W-8BEN</CardTitle>
              <ManageButton>
                <img src={Manage} alt="manage" style={{ marginRight: '7px' }} />
                <ManageButtonText>Manage</ManageButtonText>
              </ManageButton>
            </CardHeader>
            <ProfileContent>
              <ProfileDetails>
                <ProfileDetail>
                  <Label>Legal Taxpayer Name</Label>
                  <Field>Octaloop Technologies Private Limited</Field>
                </ProfileDetail>
              </ProfileDetails>
            </ProfileContent>
          </ProfileCard>

          <ProfileCard>
            <CardHeader>
              <CardTitle>W-9</CardTitle>
              <ManageButton>
                <img src={Manage} alt="manage" style={{ marginRight: '7px' }} />
                <ManageButtonText>Manage</ManageButtonText>
              </ManageButton>
            </CardHeader>
            <ProfileContent>
              <ProfileDetails>
                <ProfileDetail>
                  <Label>Legal Taxpayer Name</Label>
                  <Field>Octaloop Technologies Private Limited</Field>
                </ProfileDetail>
              </ProfileDetails>
            </ProfileContent>
          </ProfileCard>
        </Col>
      </ProfileContainer>
    </PageContainer>
  );
};

export default Profile;
