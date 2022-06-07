import { app } from '@/services';
import { registerScreens } from '@/screens';
import { conf } from '@/app/conf';

if (process.env.NODE_ENV !== 'test') {
  (async () => {
    console.log('app starting...');
    await registerScreens(app);
    await app.start(conf.listenPort);
    console.log('app started');
  })();
}
