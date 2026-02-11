import { Resend } from 'resend';

const resend = new Resend('re_YX3vW7YC_3pvEy3KTp3ZdmkYtbU86SxGk');

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'pasposip@gmail.com',
  subject: 'Hello World',
  html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});
