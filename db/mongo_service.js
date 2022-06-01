const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// request is a regular javascript object. 
// Returns a promise that resolves to a javascript object like { acknowledged: true, insertedId: 3 } or an error
async function addRequest(request, reqId, dbName = "requestBin") {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('requests');
    request._id = reqId
    const inserted = await collection.insertOne(request);
    await client.close()
    return inserted
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
    const found = await collection.findOne({_id: reqId})
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