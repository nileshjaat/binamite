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

const Profile = () => {
  const [editProfileDetailsModal, setEditProfileDetailsModal] = useState(false);
  const [editAddressModal, setEditAddressModal] = useState(false);

  return (
    <PageContainer>
      <EditPersonalDetailsModal
        editProfileDetailsModal={editProfileDetailsModal}
        setEditProfileDetailsModal={setEditProfileDetailsModal}
      />
      <EditAddressModal
        editAddressModal={editAddressModal}
        setEditAddressModal={setEditAddressModal}
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
                  <Field>Nikhil Bhintade</Field>
                </ProfileDetail>
                <ProfileDetail>
                  <Label>Username</Label>
                  <Field>bhintade.nikhil</Field>
                </ProfileDetail>
                <ProfileDetail>
                  <Label>Email Address</Label>
                  <Field>nikhilbhintade@octaloop.com</Field>
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
                    A-83, Second Floor, Pocket D, Okhla Phase II, <br /> Okhla
                    Industrial Estate, New Delhi, <br /> Delhi 110020
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
