import * as React from "react";

interface EmailTemplateProps {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  fullName,
  email,
  phone,
  message,
}) => (
  <div>
    <h1>Welcome, {fullName}!</h1>
    <span>{email}</span>
    <span>{phone}</span>
    <span>{message}</span>
  </div>
);
