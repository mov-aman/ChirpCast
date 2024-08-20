const { v4: uuidv4 } = require('uuid');

class CreateReply {
  static run(message, userHandle, activityUuid) {
    const model = {
      errors: null,
      data: null
    };

    if (!userHandle || userHandle.length < 1) {
      model.errors = ['user_handle_blank'];
    }

    if (!activityUuid || activityUuid.length < 1) {
      model.errors = ['activity_uuid_blank'];
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
        handle: userHandle,
        message: message,
        reply_to_activity_uuid: activityUuid
      };
    } else {
      const now = new Date();
      model.data = {
        uuid: uuidv4(),
        display_name: 'Aman Singh',
        handle: userHandle,
        message: message,
        created_at: now.toISOString(),
        reply_to_activity_uuid: activityUuid
      };
    }

    return model;
  }
}

module.exports = { CreateReply };
