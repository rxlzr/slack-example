import bolt from '@slack/bolt';
import { conf } from '@/app/conf';

const app = new bolt.App({
  token: conf.slackToken,
  signingSecret: conf.slackSigningSecret,
  socketMode: true,
  appToken: conf.slackAppToken,
  port: conf.listenPort,
});

export { app };
