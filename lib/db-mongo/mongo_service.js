const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// request is a regular javascript object. 
// Returns a promise that resolves to a javascript object like { acknowledged: true, insertedId: 3 } or an error
async function addRequest(request, dbName = "requestBin") {
  try {
    await client.connect();
    console.log('Connected successfully to mongo server to add request object');
    const db = client.db(dbName);
    const collection = db.collection('requests');
    collection.insertOne(request)
    setTimeout(() => {client.close()}, 1500)
    return
  } catch (error) {
    return error
  }
  
}
// returns a promise that resolves to JSON request object or null if not found
async function findRequest(reqId, dbName = "requestBin") {
  try {
    await client.connect()
    const db = client.db(dbName);
    const collection = db.collection('requests');
    const found = await collection.findOne({reqID: reqId})
    await client.close()
    return JSON.stringify(found)
  } catch (error) {
    return error
  } 
}

module.exports = {
  addRequest,
  findRequest,
}