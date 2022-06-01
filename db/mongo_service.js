const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'myProject';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');

  // the following code examples can be pasted here...
  const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  console.log('Inserted documents =>', insertResult);

  return 'done.';
}

async function addRequest(request, reqId, dbName = "requestBin") {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('requests');
  request._id = reqId
  const inserted = await collection.insertOne(request);
  client.close()
  return inserted
}

async function findRequest(reqId, dbName = "requestBin") {
  await client.connect()
  const db = client.db(dbName);
  const collection = db.collection('requests');
  const found = await collection.findOne({_id: reqId})
  client.close()
  return found
}

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());