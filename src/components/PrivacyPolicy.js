import React from 'react'

const PrivacyPolicy = () => {

  return (

    <div className="container">

      <h1>PluggedIn Privacy Policy</h1>

      <h3>Team 15: Maya Prebish, Jada Letts, Morolayo Lambo, Amanda Escaba</h3>

      <p>This privacy policy discloses the privacy practices for PluggedIn. This privacy policy applies solely to data collected by this application. It will notify you of the following:</p>

      <ol>
        <li>Who we are</li>
        <li>What data we collect for thee different types of users we have</li>
        <li>How we use the data we collect</li>
      </ol>

      <h4 className="font-weight-bold"> Who we are</h4>

      <p>PluggedIn is a web application that allows musicians' tour managers to find venues and keep track of their tours. The site has three types of users: Tour Managers, Venue Owners, and Anonymous users.</p>

      <h4 className="font-weight-bold"> Who data do we collect?</h4>

      <p>The only data we collect is what you provide to us when signing up or updating your profile.</p>

      <h5 className="font-weight-bold">Tour Manager</h5>
      <p>If you are a Tour Manager, we collect the following data about you:</p>
        <ul>
          <li>Name</li>
          <li>Company information</li>
            <ul>
              <li>Name</li>
              <li>Phone</li>
              <li>Email</li>
            </ul>
          <li>Signed Artists</li>
          <li>Contact information</li>
            <ul>
              <li>Work email address</li>
              <li>Work phone number</li>
              <li>Website</li>
            </ul>
        </ul>

      <h5 className="font-weight-bold">Venue Owner</h5>
      <p>If you are a Venue Owner, we collect the following data about you:</p>
      <ul>
        <li>Name</li>
        <li>Venue owned</li>
          <ul>
            <li>Name</li>
            <li>Address</li>
            <li>Phone number</li>
          </ul>
        <li>Contact information (if different from venue info)</li>
          <ul>
            <li>Work email address</li>
            <li>Work phone number</li>
            <li>Website</li>
          </ul>
      </ul>

      <h4 className="font-weight-bold"> How do we use your data?</h4>

      <p>The data we collect is for the purpose of connecting Tour Managers to Venue Owners and vice versa.</p>

      <h5 className="font-weight-bold"> Tour Manager Data</h5>

      <p>The info of a company that employs a Tour Manager is collected to ensure the Manager and company are legitimate and reliable, and so they can be contacted should a situation arise that goes past the Manager’s control. We ask for the artists they are responsible for booking, but none of the artists’ contact information.  The Tour Manager should be accessible for any questions from the venues they are booking from, and we should be able to contact our primary clients, so we ask for their contact information. This information is also provided to Venue Owners, in the case that a Venue Owners decides to communicate with a Tour Manager. We only ask for professional contact information and trust that the Manager provides information they are comfortable with sharing publicly and that they are comfortable being contacted by those they may not be familiar with.</p>

      <h5 className="font-weight-bold"> Venue Owner Data</h5>

      <p>We ask for the name, address, and contact (phone/email) of a Venue Owner’s venue to verify they are a reliable and legitimate source. This information is also provided to Venue Owners, in the case that a Venue Owners decides to communicate with a Tour Manager. A Venue is also made available to Anonymous users, so they may view where an Artist is playing and can contact the Venue/Venue Owner with any logistical questions that may arise. We only ask for professional contact information and trust that the Owner provides information they are comfortable with sharing publicly and that they are comfortable being contacted by those they may not be familiar with.</p>

    </div>


  )

}

export default PrivacyPolicy
