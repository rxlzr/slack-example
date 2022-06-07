import { Actions, Button, Modal, Section } from 'slack-block-builder';
import { App } from '@slack/bolt';

const ExampleModal = (() => {
  const render = () => {
    return Modal()
      .callbackId('example_modal')
      .title('Example Modal')
      .blocks(
        Section().text('This is an example modal.'),
        Actions().elements(Button({ text: 'Clicky', actionId: 'update_example_modal' }).primary(true))
      )
      .buildToObject();
  };

  const register = async (app: App) => {
    app.action({ type: 'block_actions', action_id: 'open_example_modal' }, async ({ ack, body, client }) => {
      await ack();
      await client.views.open({
        trigger_id: body.trigger_id,
        view: render(),
      });
    });
  };

  return { render, register };
})();

export { ExampleModal };
