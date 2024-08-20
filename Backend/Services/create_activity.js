const { v4: uuidv4 } = require('uuid');

class CreateActivity {
  static run(message, userHandle, ttl) {
    const model = {
      errors: null,
      data: null
    };

    const now = new Date();
    let ttlOffset;

    if (ttl === '30-days') {
      ttlOffset = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
    } else if (ttl === '7-days') {
      ttlOffset = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
    } else if (ttl === '3-days') {
      ttlOffset = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds
    } else if (ttl === '1-day') {
      ttlOffset = 1 * 24 * 60 * 60 * 1000; // 1 day in milliseconds
    } else if (ttl === '12-hours') {
      ttlOffset = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
    } else if (ttl === '3-hours') {
      ttlOffset = 3 * 60 * 60 * 1000; // 3 hours in milliseconds
    } else if (ttl === '1-hour') {
      ttlOffset = 1 * 60 * 60 * 1000; // 1 hour in milliseconds
    } else {
      model.errors = ['ttl_blank'];
    }

    if (!userHandle || userHandle.length < 1) {
      model.errors = ['user_handle_blank'];
    }

    if (!message || message.length < 1) {
      model.errors = ['message_blank'];
    } else if (message.length > 280) {
      model.errors = ['message_exceed_max_chars'];
    }

    if (model.errors) {
      model.data = {
        handle: userHandle,
        message: message
      };
    } else {
      model.data = {
        uuid: uuidv4(),
        display_name: 'Aman Singh',
        handle: userHandle,
        message: message,
        created_at: now.toISOString(),
        expires_at: new Date(now.getTime() + ttlOffset).toISOString()
      };
    }

    return model;
  }
}

module.exports = { CreateActivity };
