import NextAuth from "next-auth";
import Providers from "next-auth/providers";
// import nodemailer from "nodemailer";

const nodemailer = require("nodemailer");

const sendVerificationRequest = ({
  identifier: email,
  url,
  token,
  baseUrl,
  provider,
}) => {
  return new Promise((resolve, reject) => {
    const { server, from } = provider;
    // Strip protocol from URL and use domain as site name
    const site = baseUrl.replace(/^https?:\/\//, "");
    nodemailer.createTransport(server).sendMail(
      // createTransport(server).sendMail(
      {
        to: email,
        from,
        subject: `ลงชื่อเข้าใช้ ${site}`,
        text: text({ url, site, email }),
        html: html({ url, site, email }),
      },
      (error) => {
        if (error) {
          logger.error("SEND_VERIFICATION_EMAIL_ERROR", email, error);
          return reject(new Error("SEND_VERIFICATION_EMAIL_ERROR", error));
        }
        return resolve();
      }
    );
  });
};

// Email HTML body
const html = ({ url, site, email }) => {
  // Insert invisible space into domains and email address to prevent both the
  // email address and the domain from being turned into a hyperlink by email
  // clients like Outlook and Apple mail, as this is confusing because it seems
  // like they are supposed to click on their email address to sign in.
  const escapedEmail = `${email.replace(/\./g, "&#8203;.")}`;
  const escapedSite = `${site.replace(/\./g, "&#8203;.")}`;

  // Some simple styling options
  const backgroundColor = "#f9f9f9";
  const textColor = "#1b2836";
  const mainBackgroundColor = "#ffffff";
  const buttonBackgroundColor = "#02d667";
  const buttonBorderColor = "#02d667";
  const buttonTextColor = "#ffffff";

  // Uses tables for layout and inline CSS due to email client limitations
  return `
<body style="background: ${backgroundColor};">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center" style="padding: 10px 0px 20px 0px; font-size: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
        <strong>${escapedSite}</strong>
      </td>
    </tr>
  </table>
  <table width="100%" border="0" cellspacing="20" cellpadding="0" style="background: ${mainBackgroundColor}; max-width: 600px; margin: auto; border-radius: 10px;">
    <tr>
      <td align="center" style="padding: 10px 0px 0px 0px; font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
      ลงชื่อเข้าใช้ด้วย <strong>${escapedEmail}</strong>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 20px 0;">
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center" style="border-radius: 5px;" bgcolor="${buttonBackgroundColor}"><a href="${url}" target="_blank" style="font-size: 18px; font-family: Helvetica, Arial, sans-serif; color: ${buttonTextColor}; text-decoration: none; text-decoration: none;border-radius: 5px; padding: 10px 20px; border: 1px solid ${buttonBorderColor}; display: inline-block; font-weight: bold;">เข้าสู่ระบบ</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" style="padding: 0px 0px 10px 0px; font-size: 16px; line-height: 22px; font-family: Helvetica, Arial, sans-serif; color: ${textColor};">
      หากคุณไม่ได้ร้องขออีเมลนี้ คุณอย่าเพิกเฉยเพื่อความปลอดภัย
      </td>
    </tr>
  </table>
</body>
`;
};

// Email text body – fallback for email clients that don't render HTML
const text = ({ url, site }) => `ลงชื่อเข้าใช้ ${site}\n${url}\n\n`;

const options = {
  providers: [
    // Providers.Auth0({
    //   clientId: process.env.AUTH0_CLIENT_ID,
    //   clientSecret: process.env.AUTH0_CLIENT_SECRET,
    //   domain: process.env.AUTH0_DOMAIN,
    // }),

    // Providers.Email({
    //   server: {
    //     host: process.env.EMAIL_SERVER_HOST,
    //     port: process.env.EMAIL_SERVER_PORT,
    //     auth: {
    //       user: process.env.EMAIL_SERVER_USER,
    //       pass: process.env.EMAIL_SERVER_PASSWORD,
    //     },
    //   },
    //   from: process.env.EMAIL_FROM,
    //   sendVerificationRequest: sendVerificationRequest,
    // }),

    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    Providers.Facebook({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
    signOut: "/auth/signout",
    error: "/login",
    verifyRequest: "/auth/verify-request", // (used for check email message)
    newUser: "/dashboard",
  },

  // database:process.env.MONGO_URI,
};

export default (req, res) => NextAuth(req, res, options);
