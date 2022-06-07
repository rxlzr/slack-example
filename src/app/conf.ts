import 'dotenv/config';

const conf = {
  slackToken: process.env.SLACK_TOKEN,
  slackSigningSecret: process.env.SLACK_SIGNING_SECRET,
  slackAppToken: process.env.SLACK_APP_TOKEN,
  listenPort: +(process.env.PORT || 3000),
};

export { conf };
