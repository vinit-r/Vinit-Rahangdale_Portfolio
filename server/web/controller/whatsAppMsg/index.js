// require("dotenv").config();
// const axios = require("axios");
// const {
//   FB_BASE_URL,
//   WA_PHONE_NUMBER_ID,
//   RECIPIENT_PHONE_NO,
//   CLOUD_API_ACCESS_TOKEN,
// } = process.env;

// const whatsAppMsg = async (req, res) => {
//   console.log("req", req?.body);

//   try {
//     const url = `${FB_BASE_URL}${WA_PHONE_NUMBER_ID}/messages`;
//     const senderMessage = {
//       name: req?.body?.name,
//       email: req?.body?.email,
//       message: req?.body?.message,
//     };
//     const data = {
//       messaging_product: "whatsapp",
//       to: `${RECIPIENT_PHONE_NO}`,
//       // type: "template",
//       // template: {
//       //   name: req?.body?.name,
//       //   language: {
//       //     code: "en_US",
//       //   },
//       // },
//       text: { body: JSON.stringify(senderMessage) },
//       // text: { body: `Name: ${req?.body?.name}, Email: ${req?.body?.email}, Message: ${req?.body?.message}` },
//     };
//     const headers = {
//       Authorization: `Bearer ${CLOUD_API_ACCESS_TOKEN}`,
//       "Content-Type": "application/json",
//     };

//     const response = await axios.post(url, data, { headers });
//     console.log("response------------------", response?.data);

//     res.send({
//       status: 200,
//       response: response?.data,
//       message: "This is the whatsApp message page",
//     });
//   } catch (error) {
//     console.log("error", error?.response?.data);
//   }
// };
// module.exports = whatsAppMsg;


require("dotenv").config();
const axios = require("axios");

const {
  FB_BASE_URL,
  WA_PHONE_NUMBER_ID,
  RECIPIENT_PHONE_NO,
  CLOUD_API_ACCESS_TOKEN,
} = process.env;

// Validate required environment variables
if (!FB_BASE_URL || !WA_PHONE_NUMBER_ID || !RECIPIENT_PHONE_NO || !CLOUD_API_ACCESS_TOKEN) {
  console.error("Error: Missing one or more required environment variables.");
  process.exit(1);
}

const whatsAppMsg = async (req, res) => {
  console.log("Incoming request:", req?.body);

  try {
    const url = `${FB_BASE_URL}${WA_PHONE_NUMBER_ID}/messages`;

    // Construct the message payload dynamically
    const senderMessage = {
      name: req?.body?.name,
      email: req?.body?.email,
      message: req?.body?.message,
    };

    const isTemplate = req?.body?.isTemplate || false; // Dynamically check if the template type is needed
    const data = isTemplate
      ? {
          messaging_product: "whatsapp",
          to: `${RECIPIENT_PHONE_NO}`,
          type: "template",
          template: {
            name: req?.body?.templateName || "hello_world", // Default template name
            language: {
              code: req?.body?.languageCode || "en_US", // Default language code
            },
          },
        }
      : {
          messaging_product: "whatsapp",
          to: `${RECIPIENT_PHONE_NO}`,
          text: { body: JSON.stringify(senderMessage) }, // Send plain text message
        };

    const headers = {
      Authorization: `Bearer ${CLOUD_API_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    };

    // Send the message via WhatsApp API
    const response = await axios.post(url, data, { headers });
    console.log("API Response:", response?.data);

    // Send success response
    res.status(200).send({
      status: 200,
      response: response?.data,
      message: "WhatsApp message sent successfully.",
    });
  } catch (error) {
    // Improved error logging
    console.error("Error sending message:", error?.response?.data || error.message);

    res.status(500).send({
      status: 500,
      error: error?.response?.data || "Internal server error",
      message: "Failed to send WhatsApp message.",
    });
  }
};

module.exports = whatsAppMsg;
