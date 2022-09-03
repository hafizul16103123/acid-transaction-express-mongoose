import mongoose from 'mongoose'; 

mongoose.connect('mongodb://mongoadmin:mongoadmin@localhost:27017/transaction?authSource=admin&replicaSet=rs0&readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const conn = mongoose.connection;

conn.on('error', () => console.error.bind(console, 'connection error'));

conn.once('open', () => console.info('Connection to Database is successful'));

export default conn;
