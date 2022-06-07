import { Modal, Section } from 'slack-block-builder';
import { App } from '@slack/bolt';

const UpdatedExampleModal = (() => {
  const render = () => {
    return Modal()
      .callbackId('example_modal')
      .title('Updated Example Modal')
      .blocks(Section().text('This is the updated example modal.'))
      .buildToObject();
  };

  const register = async (app: App) => {
    app.action({ type: 'block_actions', action_id: 'update_example_modal' }, async ({ ack, body, client }) => {
      await ack();
      await client.views.update({
        view_id: body.view?.id,
        hash: body.view?.hash,
        view: render(),
      });
    });
  };

  return { render, register };
})();

export { UpdatedExampleModal };
