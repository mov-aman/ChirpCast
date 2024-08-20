const { v4: uuidv4 } = require('uuid');

class CreateMessage {
  static run(message, userSenderHandle, userReceiverHandle) {
    const model = {
      errors: null,
      data: null
    };

    if (!userSenderHandle || userSenderHandle.length < 1) {
      model.errors = ['user_sender_handle_blank'];
    }

    if (!userReceiverHandle || userReceiverHandle.length < 1) {
      model.errors = ['user_receiver_handle_blank'];
    }

    if (!message || message.length < 1) {
      model.errors = ['message_blank'];
    } else if (message.length > 1024) {
      model.errors = ['message_exceed_max_chars'];
    }

    if (model.errors) {
      // return what we provided
      model.data = {
        display_name: 'Aman Singh',
        handle: userSenderHandle,
        message: message
      };
    } else {
      const now = new Date();
      model.data = {
        uuid: uuidv4(),
        display_name: 'Aman Singh',
        handle: userSenderHandle,
        message: message,
        created_at: now.toISOString()
      };
    }

    return model;
  }
}

module.exports = { CreateMessage };