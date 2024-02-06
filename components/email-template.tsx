import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <h2>{email}</h2>
    <h2>{message}</h2>
  </div>
);
