class ShowActivities {
    static run(activityUuid) {
      const now = new Date();
  
      const results = [{
        uuid: '68f126b0-1ceb-4a33-88be-d90fa7109eee',
        handle: 'amansingh',
        message: 'Cloud is fun!',
        created_at: new Date(now.getTime() - (2 * 24 * 60 * 60 * 1000)).toISOString(), // 2 days ago
        expires_at: new Date(now.getTime() + (5 * 24 * 60 * 60 * 1000)).toISOString(), // in 5 days
        replies: {
          uuid: '26e12864-1c26-5c3a-9658-97a10f8fea67',
          handle: 'rajpatel',
          message: 'This post has no honor!',
          created_at: new Date(now.getTime() - (2 * 24 * 60 * 60 * 1000)).toISOString() // 2 days ago
        }
      }];
  
      return results;
    }
  }
  
  module.exports = { ShowActivities };
  