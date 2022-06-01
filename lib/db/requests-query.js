const { pgDbQuery } = require("./db-query");

async function getRequestsByBinId(binId) {
  const SQL =  "SELECT * FROM requests WHERE bin_id = $1";

  let result = await pgDbQuery(SQL, binId);
  return result;
};

async function createRequest(reqId, binId, method, reqPath) {
  const SQL = "INSERT INTO requests(request_id, bin_id, method, request_path) VALUES($1, $2, $3, $4)";

  let result = await pgDbQuery(SQL, reqId, binId, method, reqPath);
  return result;
};

module.exports = {
  getRequestsByBinId,
  createRequest
}