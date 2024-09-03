exports.message=(otp)=>{
 return( `<h1>One Time password here </h1>
<p>
  I hope you are aware out privacy. This is the one time password when
  you use this password after that its useless
</p>
<h2>${otp}</h2>
<h5>Just one time verification</h5>`)
}

exports.MemberMessage = (member) => {
  return `
    <h2>New Member Registration</h2>
    <p>A new member has registered. Here are the details:</p>

    <h3>Personal Information</h3>
    <ul>
      <li><strong>First Name:</strong> ${member.personal.firstName}</li>
      <li><strong>username:</strong> ${member.account.email}</li>
      <li><strong>Password:</strong> ${member.account.password}</li>
      <li><strong>Last Name:</strong> ${member.personal.lastName}</li>
      <li><strong>City:</strong> ${member.personal.city || "Not Provided"}</li>
      <li><strong>Date of Birth:</strong> ${member.personal.dob || "Not Provided"}</li>
      <li><strong>Company:</strong> ${member.personal.company || "Not Provided"}</li>
      <li><strong>Industry:</strong> ${member.personal.industry || "Not Provided"}</li>
    </ul>
    <h3>Login Link</h3>
    <a href="http://localhost:5173/login" target="_blank" rel="noopener noreferrer">http://localhost:5173/login</a>
    <h3>Investment Information</h3>
    <ul>
      <li><strong>Interested to Invest:</strong> ${member.investmentInfo.interestedToInvest || "Not Provided"}</li>
      <li><strong>Sectors:</strong> ${member.investmentInfo.sectors.join(", ") || "Not Provided"}</li>
      <li><strong>Region:</strong> ${member.investmentInfo.region || "Not Provided"}</li>
      <li><strong>Investor Type:</strong> ${member.investmentInfo.investorType || "Not Provided"}</li>
      <li><strong>Expertise:</strong> ${member.investmentInfo.expertise || "Not Provided"}</li>
      <li><strong>Passions:</strong> ${member.investmentInfo.passions || "Not Provided"}</li>
      <li><strong>Anyma:</strong> ${member.investmentInfo.anyma.join(", ") || "Not Provided"}</li>
    </ul>

    <h3>Account Information</h3>
    <ul>
      <li><strong>Email:</strong> ${member.account.email}</li>
      <li><strong>Phone:</strong> ${member.account.phone}</li>
      <li><strong>Role:</strong> ${member.account.role}</li>
      <li><strong>Agreement Accepted:</strong> ${member.account.agreement ? "Yes" : "No"}</li>
    </ul>
  `;
};


exports.MemberMessageFromAdmin = (user) => {
  return `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #0066cc;">Dear ${user.firstName} ${user.lastName},</h2>
      <p>We are pleased to welcome you to our company. Here are the details we have on file for you:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr>
          <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Field</th>
          <th style="text-align: left; padding: 8px; border-bottom: 1px solid #ddd;">Information</th>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">Email</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${user.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">City</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${user.city || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">Date of Birth</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${user.dob || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">Phone</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${user.phone || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">Company</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${user.company || 'N/A'}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">Industry</td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${user.industry || 'N/A'}</td>
        </tr>
      </table>
      
      <p>If any of the above information is incorrect, please let us know as soon as possible.</p>
      
      <p>Best regards,</p>
      <p>Anyma</p>
    </div>
  `;
};
