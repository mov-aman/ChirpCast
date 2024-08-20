class HomeActivities {
  static async run() {
      const now = new Date();

      const results = [
          {
              uuid: '68f126b0-1ceb-4a33-88be-d90fa7109eee',
              handle: 'amansingh',
              message: 'Cloud is fun!',
              created_at: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString(),
              expires_at: new Date(now.getTime() + 5 * 24 * 60 * 60 * 1000).toISOString(),
              likes_count: 5,
              replies_count: 1,
              reposts_count: 0,
              replies: [
                  {
                      uuid: '26e12864-1c26-5c3a-9658-97a10f8fea67',
                      reply_to_activity_uuid: '68f126b0-1ceb-4a33-88be-d90fa7109eee',
                      handle: 'rajpatel',
                      message: 'This post has no honor!',
                      likes_count: 0,
                      replies_count: 0,
                      reposts_count: 0,
                      created_at: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString()
                  }
              ],
          },
          {
              uuid: '66e12864-8c26-4c3a-9658-95a10f8fea67',
              handle: 'vikram',
              message: 'I am out of prune juice',
              created_at: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString(),
              expires_at: new Date(now.getTime() + 9 * 24 * 60 * 60 * 1000).toISOString(),
              likes_count: 0,
              replies_count: 0,
              reposts_count: 0,
              replies: []
          },
          {
              uuid: '248959df-3079-4947-b847-9e0892d1bab4',
              handle: 'karan',
              message: 'My dear doctor, I am just a simple tailor',
              created_at: new Date(now.getTime() - 1 * 60 * 60 * 1000).toISOString(),
              expires_at: new Date(now.getTime() + 12 * 60 * 60 * 1000).toISOString(),
              likes_count: 0,
              replies_count: 0,
              reposts_count: 0,
              replies: []
          }
      ];

      return results;
  }
}

module.exports = { HomeActivities }; // Make sure to export the class
