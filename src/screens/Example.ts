import { Actions, Button, Header, Message, Section } from 'slack-block-builder';
import { App } from '@slack/bolt';

const Example = (() => {
  const render = () => {
    return Message()
      .text('example text')
      .blocks(
        Header({ text: 'Example' }),
        Section({ text: 'This is an example.' }),
        Actions().elements(Button({ text: 'Clicky', actionId: 'open_example_modal' }).primary(true))
      )
      .buildToObject();
  };

  const register = (app: App) => {
    app.message('!example', async ({ say }) => {
      await say(render());
    });
  };

  return { render, register };
})();

export { Example };
