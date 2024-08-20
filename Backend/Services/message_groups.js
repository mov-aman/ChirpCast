class MessageGroups {
    static run(userHandle) {
      const model = {
        errors: null,
        data: null
      };
  
      const now = new Date();
      const results = [
        {
          uuid: '24b95582-9e7b-4e0a-9ad1-639773ab7552',
          display_name: 'Aman Singh',
          handle: 'amansingh',
          created_at: now.toISOString()
        },
        {
          uuid: '417c360e-c4e6-4fce-873b-d2d71469b4ac',
          display_name: 'Raj Patel',
          handle: 'rajpatel',
          created_at: now.toISOString()
        }
      ];
      model.data = results;
      return model;
    }
  }
  
module.exports = { MessageGroups };