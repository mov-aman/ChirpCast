class SearchActivities {
    static run(searchTerm) {
      const model = {
        errors: null,
        data: null
      };
  
      const now = new Date();
  
      if (!searchTerm || searchTerm.length < 1) {
        model.errors = ['search_term_blank'];
      } else {
        const results = [{
          uuid: '248959df-3079-4947-b847-9e0892d1bab4',
          handle: 'amansingh',
          message: 'Cloud is fun!',
          created_at: now.toISOString()
        }];
        model.data = results;
      }
  
      return model;
    }
  }
  
  module.exports = { SearchActivities };
  