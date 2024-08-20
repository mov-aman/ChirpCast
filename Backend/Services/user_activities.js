class UserActivities {
    static run(userHandle) {
      const model = {
        errors: null,
        data: null
      };
  
      const now = new Date();
  
      if (!userHandle || userHandle.length < 1) {
        model.errors = ['blank_user_handle'];
      } else {
        const results = [{
          uuid: '248959df-3079-4947-b847-9e0892d1bab4',
          handle: 'amansingh',
          message: 'Cloud is fun!',
          created_at: new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString(),  // Subtract 1 day
          expires_at: new Date(now.getTime() + 31 * 24 * 60 * 60 * 1000).toISOString()  // Add 31 days
        }];
        model.data = results;
      }
  
      return model;
    }
  }
  
  module.exports = { UserActivities };