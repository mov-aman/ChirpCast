const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Import your services here
// const { UserActivities } = require('./Services/user_activities');
// const { HomeActivities } = require('./Services/home_activities');
// const { CreateActivity } = require('./Services/create_activity');
// const { CreateReply } = require('./Services/create_reply');
// const { SearchActivities } = require('./Services/search_activities');
// const { MessageGroups } = require('./Services/message_groups');
// const { Messages } = require('./Services/messages');
// const { CreateMessage } = require('./Services/create_message');
// const { ShowActivity } = require('./Services/show_activity');

const app = express();
const frontend = process.env.FRONTEND_URL;
const backend = process.env.BACKEND_URL;
const origins = [frontend, backend];

app.use(cors({
    origin: origins,
    exposedHeaders: ['location', 'link'],
    allowedHeaders: ['content-type', 'if-modified-since'],
    methods: ['OPTIONS', 'GET', 'HEAD', 'POST']
}));

app.use(bodyParser.json());

app.get('/api/message_groups', async (req, res) => {
    const userHandle = 'movaman';
    const model = await MessageGroups.run({ user_handle: userHandle });
    
    if (model.errors) {
        res.status(422).json(model.errors);
    } else {
        res.status(200).json(model.data);
    }
});

app.get('/api/messages', async (req, res) => {
    const userSenderHandle = 'movaman';
    const userReceiverHandle = req.query.user_receiver_handle;

    const model = await Messages.run({ user_sender_handle: userSenderHandle, user_receiver_handle: userReceiverHandle });
    
    if (model.errors) {
        res.status(422).json(model.errors);
    } else {
        res.status(200).json(model.data);
    }
});

app.post('/api/messages', cors(), async (req, res) => {
    const userSenderHandle = 'movaman';
    const { user_receiver_handle, message } = req.body;

    const model = await CreateMessage.run({ message, user_sender_handle: userSenderHandle, user_receiver_handle });
    
    if (model.errors) {
        res.status(422).json(model.errors);
    } else {
        res.status(200).json(model.data);
    }
});

app.get('/api/activities/home', async (req, res) => {
    const data = await HomeActivities.run();
    res.status(200).json(data);
});

app.get('/api/activities/:handle', async (req, res) => {
    const handle = req.params.handle;
    const model = await UserActivities.run(handle);
    
    if (model.errors) {
        res.status(422).json(model.errors);
    } else {
        res.status(200).json(model.data);
    }
});

app.get('/api/activities/search', async (req, res) => {
    const term = req.query.term;
    const model = await SearchActivities.run(term);
    
    if (model.errors) {
        res.status(422).json(model.errors);
    } else {
        res.status(200).json(model.data);
    }
});

app.post('/api/activities', cors(), async (req, res) => {
    const userHandle = 'movaman';
    const { message, ttl } = req.body;

    const model = await CreateActivity.run({ message, user_handle: userHandle, ttl });
    
    if (model.errors) {
        res.status(422).json(model.errors);
    } else {
        res.status(200).json(model.data);
    }
});

app.get('/api/activities/:activity_uuid', async (req, res) => {
    const activityUuid = req.params.activity_uuid;
    const data = await ShowActivity.run({ activity_uuid: activityUuid });
    res.status(200).json(data);
});

app.post('/api/activities/:activity_uuid/reply', cors(), async (req, res) => {
    const userHandle = 'movaman';
    const activityUuid = req.params.activity_uuid;
    const { message } = req.body;

    const model = await CreateReply.run({ message, user_handle: userHandle, activity_uuid: activityUuid });
    
    if (model.errors) {
        res.status(422).json(model.errors);
    } else {
        res.status(200).json(model.data);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
