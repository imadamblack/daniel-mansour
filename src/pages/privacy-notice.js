import { info } from "../../info";

export default function PrivacyNotice() {
  return (
    <div className="container py-20 text-block">
      <h1>{`Privacy Notice`}</h1>
      <p>{`Your privacy is important to us. ${info.companyName} collects and processes personal data in compliance with the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR). By submitting your information, you agree to the terms outlined below.`}</p>

      <h4>{`What Information We Collect`}</h4>
      <p>{`When you submit a form on our website, we may collect personal details such as your name, email, phone number, and any additional information you provide voluntarily.`}</p>

      <h4>{`How We Use Your Information`}</h4>
      <p>{`Your information is used for the following purposes:`}</p>
      <ul>
        <li>{`To contact you regarding your inquiry or request.`}</li>
        <li>{`To provide you with relevant offers, updates, or services related to your interests.`}</li>
        <li>{`To improve our marketing strategies and optimize user experience.`}</li>
      </ul>

      <h4>{`Your Privacy Choices`}</h4>
      <p>{`You have the right to opt out of marketing communications at any time. Additionally, under the CCPA, you may request access, correction, or deletion of your personal data. To manage your preferences or submit a request, please visit our 'Do Not Sell My Personal Information' page or contact us at ${info.email.sender}.`}</p>

      <h4>{`Data Protection`}</h4>
      <p>{`${info.companyName} implements security measures to protect your data. We do not sell your information to third parties, but we may share it with trusted partners for operational purposes.`}</p>
    </div>
  );
}
