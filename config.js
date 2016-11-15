module.exports = {
  // App Settings
  MONGO_URI: process.env.MONGO_URI || 'localhost/foodees',
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'YOUR_UNIQUE_JWT_TOKEN_SECRET',
  
  MAILGUN_USER: process.env.MAILGUN_USER || 'postmaster@chefezy.com',
  MAILGUN_PASSWORD: process.env.MAILGUN_PASSWORD || '12345'

  // OAuth 2.0
  FACEBOOK_SECRET: process.env.FACEBOOK_SECRET || 'ec74db05a1d419605290f408c12ff077',
  FOURSQUARE_SECRET: process.env.FOURSQUARE_SECRET || 'YOUR_FOURSQUARE_CLIENT_SECRET',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || 'YOUR_GOOGLE_CLIENT_SECRET',
  GITHUB_SECRET: process.env.GITHUB_SECRET || 'YOUR_GITHUB_CLIENT_SECRET',
  INSTAGRAM_SECRET: process.env.INSTAGRAM_SECRET || 'YOUR_INSTAGRAM_CLIENT_SECRET',
  LINKEDIN_SECRET: process.env.LINKEDIN_SECRET || 'YOUR_LINKEDIN_CLIENT_SECRET',
  TWITCH_SECRET: process.env.TWITCH_SECRET || 'YOUR_TWITCH_CLIENT_SECRET',
  WINDOWS_LIVE_SECRET: process.env.WINDOWS_LIVE_SECRET || 'YOUR_MICROSOFT_CLIENT_SECRET',
  YAHOO_SECRET: process.env.YAHOO_SECRET || 'YOUR_YAHOO_CLIENT_SECRET',
  BITBUCKET_SECRET: process.env.YAHOO_SECRET || 'YOUR_BITBUCKET_CLIENT_SECRET',

  // OAuth 1.0
  TWITTER_KEY: process.env.TWITTER_KEY || 'YOUR_TWITTER_CONSUMER_KEY',
  TWITTER_SECRET: process.env.TWITTER_SECRET || 'YOUR_TWITTER_CONSUMER_SECRET',

  'verification-email' : {
    subject: 'Verify your email',
    success: 'Verification mail send'
  },
  'welcome-email' : {
    subject: 'Welcome to ChefEzy',
    success: 'Welcome to ChefEzy'
  },
  'contact-email' : {
    subject: 'Contact Request',
    success: 'Contact Request'
  },
  'redeem-email' : {
    subject: 'Redeem Offer at Chefezy',
    success: 'Redeem Offer at Chefezy'
  },
  'forgot-password' : {
    subject: 'Reset your Chef Ezy Password',
    success: 'Reset password instruction send'
  }
};
