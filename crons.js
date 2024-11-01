const cron= require('node-cron');

const countAndUpdate = cron.schedule('0 * * * *', () => {
    console.log('running a task every one hour');
});

const startOfCron = () => countAndUpdate.start()

module.exports = {startOfCron}