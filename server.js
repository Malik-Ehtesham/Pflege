const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const axios = require('axios'); // You may need to install this library using npm install axios
const app = express();
const geolib = require('geolib');

// Serve static files
app.use(express.static(path.join(__dirname, 'build')));

// Parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const nodemailer = require('nodemailer');
// Set up nodemailer with your email service credentials
let transporter = nodemailer.createTransport({
  service: 'gmail', // Replace with your email provider
  auth: {
    user: 'noreply.malikpflegedienst@gmail.com',
    pass: 'uurb clre jvyd mjru' // For Gmail, it's better to use OAuth2
  }
});


// Function to convert address to coordinates using OpenStreetMap Nominatim API
async function geocodeAddress(address) {
  try {
    const response = await axios.get('https://nominatim.openstreetmap.org/search', {
      params: {
        format: 'json',
        q: address,
      },
    });

    const [result] = response.data;
    if (result) {
      return { latitude: parseFloat(result.lat), longitude: parseFloat(result.lon) };
    } else {
      throw new Error('No results found for the given address.');
    }
  } catch (error) {
    throw new Error(`Error geocoding address: ${error.message}`);
  }
}


const companyLocation = { latitude: 50.026241, longitude: 8.885330 }; 

app.post('/send-email', async (req, res) => {
  const formData = req.body;

  if (formData.Addresse) {
    try {
      const fullAddress = `${formData.Addresse}, ${formData.Postleitzahl}`;
      const userLocation = await geocodeAddress(fullAddress);

      if (!userLocation) {
        res.status(400).send('Error geocoding address');
        return;
      }

      const distance = geolib.getDistance(companyLocation, userLocation);
      const radius = 30000;

      if (distance <= radius) {
        // Process the form data and send emails
        let formattedFormData = Object.keys(formData).map(key => {
          return `${key}: ${formData[key]}`;
        }).join('\n');

        // Send confirmation to user
        let userMailOptions = {
          from: 'noreply.malikpflegedienst@gmail.com',
          to: formData.Email, // Assuming the user's email is part of the form data
          subject: 'Vielen Dank für Ihr Interesse an unserem Beratungsgespräch',
          text: `Betreff: Bestätigung Ihres Kontaktformulars für das Beratungsgespräch\n\n Liebe Damen und Herren,\n\nherzlichen Dank für Ihre Nachricht, die uns über das Kontaktformular erreicht hat. Wir möchten Ihnen hiermit versichern, dass wir Ihre Anfrage erhalten haben.\n\nIn Kürze wird sich einer unserer engagierten Mitarbeiter mit Ihnen in Verbindung setzen, um Ihr Anliegen ausführlich zu besprechen. Sollten Sie in der Zwischenzeit weitere Informationen benötigen oder zusätzliche Fragen haben, stehen wir Ihnen selbstverständlich gerne zur Verfügung.\n\nWir schätzen Ihr Interesse an unserem Pflegedienst sehr und freuen uns darauf, Ihnen bestmöglich behilflich zu sein.`    };

        transporter.sendMail(userMailOptions, function(error, info){
          if (error) {
            console.error('Error sending email to user:', error);
          } else {
            console.log('Confirmation email sent to user: ' + info.response);
          }
        });

        // Send form data to admin
        let adminMailOptions = {
          from: 'noreply.malikpflegedienst@gmail.com',
          to: 'info@pflegedienst-malik.de',
          subject: 'Beratungsgespräch Anfrage innerhalb 30 km Radius',
          text: `Form Data: \n${formattedFormData} \n\nDistance: ${distance/1000} kilometer`
        };

        transporter.sendMail(adminMailOptions, function(error, info){
          if (error) {
            console.error('Error sending email to admin:', error);
          } else {
            console.log('Email sent to admin with form data: ' + info.response);
          }
        });

        res.status(200).send('Form Data Received and Address is within 30 km radius');
      } else {
        res.status(400).send('Address is outside the 30 km radius');
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(400).send(error.message);
    }
  } else {
    res.status(400).send('Invalid form data: Address is missing');
  }
});


app.post('/send-contact', async (req, res) => {
  const formData = req.body;
        // Process the form data and send emails
        let formattedFormData = Object.keys(formData).map(key => {
          return `${key}: ${formData[key]}`;
        }).join('\n');

        // Send confirmation to user
        let userMailOptions = {
          from: 'noreply.malikpflegedienst@gmail.com',
          to: formData.Email, // Assuming the user's email is part of the form data
          subject: 'Vielen Dank für Ihre Kontaktaufnahme',
          text: `Betreff: Bestätigung Ihres Kontaktformulars\n\n Liebe Damen und Herren,\n\nherzlichen Dank für Ihre Nachricht, die uns über das Kontaktformular erreicht hat. Wir möchten Ihnen hiermit versichern, dass wir Ihre Anfrage erhalten haben.\n\nIn Kürze wird sich einer unserer engagierten Mitarbeiter mit Ihnen in Verbindung setzen, um Ihr Anliegen ausführlich zu besprechen. Sollten Sie in der Zwischenzeit weitere Informationen benötigen oder zusätzliche Fragen haben, stehen wir Ihnen selbstverständlich gerne zur Verfügung.\n\nWir schätzen Ihr Interesse an unserem Pflegedienst sehr und freuen uns darauf, Ihnen bestmöglich behilflich zu sein.`    };

        transporter.sendMail(userMailOptions, function(error, info){
          if (error) {
            console.error('Error sending email to user:', error);
          } else {
            console.log('Confirmation email sent to user: ' + info.response);
          }
        });

        // Send form data to admin
        let adminMailOptions = {
          from: 'noreply.malikpflegedienst@gmail.com',
          to: 'info@pflegedienst-malik.de',
          subject: 'Kontakt Anfrage',
          text: `Neue Kontakt Anfrage \n Form Data: \n${formattedFormData}`
        };

        transporter.sendMail(adminMailOptions, function(error, info){
          if (error) {
            console.error('Error sending email to admin:', error);
          } else {
            console.log('Email sent to admin with form data: ' + info.response);
          }
        });

        res.status(200).send('Form Data Received and Address is within 30 km radius');
});

app.post('/send-email-karriere', async (req, res) => {
  const formData = req.body;

        // Process the form data and send emails
        let formattedFormData = Object.keys(formData).map(key => {
          return `${key}: ${formData[key]}`;
        }).join('\n');

        // Send confirmation to user
        let userMailOptions = {
          from: 'noreply.malikpflegedienst@gmail.com',
          to: formData.Email, 
          subject: 'Vielen Dank für Ihr Interesse an Uns',
          text: `Betreff: Bestätigung Ihres Karriereformulars\n\n Sehr geehrte*r Bewerber*in,\n\nherzlichen Dank für Ihre Nachricht, die uns über das Karriereformular erreicht hat. Wir möchten Ihnen hiermit versichern, dass wir Ihre Anfrage erhalten haben.\n\nIn Kürze wird sich einer unserer engagierten Mitarbeiter mit Ihnen in Verbindung setzen. Sollten Sie in der Zwischenzeit weitere Informationen benötigen oder zusätzliche Fragen haben, stehen wir Ihnen selbstverständlich gerne zur Verfügung.\n\nWir schätzen Ihr Interesse an unserem Pflegedienst sehr und freuen uns darauf, Ihnen bestmöglich behilflich zu sein.`    };

        transporter.sendMail(userMailOptions, function(error, info){
          if (error) {
            console.error('Error sending email to user:', error);
          } else {
            console.log('Confirmation email sent to user: ' + info.response);
          }
        });

        // Send form data to admin
        let adminMailOptions = {
          from: 'noreply.malikpflegedienst@gmail.com',
          to: 'info@pflegedienst-malik.de',
          subject: 'Karriere Anfrage',
          text: `Karriere Anfrage \n Form Data: \n${formattedFormData}`
        };

        transporter.sendMail(adminMailOptions, function(error, info){
          if (error) {
            console.error('Error sending email to admin:', error);
          } else {
            console.log('Email sent to admin with form data: ' + info.response);
          }
        });

        res.status(200).send('Form Data Received ');
});

// Start the server
const port = process.env.PORT || 3300;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});