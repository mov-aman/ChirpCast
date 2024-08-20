class Messages {
    static run(userSenderHandle, userReceiverHandle) {
      const model = {
        errors: null,
        data: null
      };
  
      const now = new Date();
  
      const results = [
        {
          uuid: '4e81c06a-db0f-4281-b4cc-98208537772a',
          display_name: 'Aman Singh',
          handle: 'amansingh',
          message: 'Cloud is fun!',
          created_at: now.toISOString()
        },
        {
          uuid: '66e12864-8c26-4c3a-9658-95a10f8fea67',
          display_name: 'Aman Singh',
          handle: 'amansingh',
          message: 'This platform is great!',
          created_at: now.toISOString()
        }
      ];
      model.data = results;
      return model;
    }
  }
  
module.exports = { Messages };
  