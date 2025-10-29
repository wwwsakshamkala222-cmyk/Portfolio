import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_7hpqter';        
const TEMPLATE_ID = 'template_1duzp2p';      
const PUBLIC_KEY = '0I1b8NlwuMSnERic_';        

export const sendEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'sakshamkala111@gmail.com',  // Your email
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    console.log('Email sent successfully!', response.status, response.text);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};