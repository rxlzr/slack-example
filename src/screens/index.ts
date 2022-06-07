import { App } from '@slack/bolt';
import { Example } from '@/screens/Example';
import { ExampleModal } from '@/screens/ExampleModal';
import { UpdatedExampleModal } from '@/screens/UpdatedExampleModal';

const screens = [Example, ExampleModal, UpdatedExampleModal];

const registerScreens = (app: App) => {
  screens.forEach(async (screen) => await screen.register(app));
};

export { registerScreens };
