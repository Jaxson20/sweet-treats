import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv'
sgMail.setApiKey('SENDGRID_API_KEY');

const sendOrderConfirmationEmail = (orderDetails, recipientEmail) => {
  const msg = {
    to: recipientEmail,
    from: 'sweettreatsbyamber24', // Replace with your sender email
    subject: 'Order Confirmation',
    text: `Thank you for your order! Here are the details: ${JSON.stringify(orderDetails)}`,
  };

  sgMail.send(msg)
    .then(() => {
      console.log('Order confirmation email sent');
    })
    .catch((error) => {
      console.error('Error sending order confirmation email:', error);
    });
};

// Example usage:
const orderDetails = {
  firstName: 'John',
  lastName: 'Doe',
  // Include other order details here
};

const recipientEmail = 'customer@example.com'; 
sendOrderConfirmationEmail(orderDetails, recipientEmail);

export { sendOrderConfirmationEmail };