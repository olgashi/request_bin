const { pgDbQuery } = require("./db-query");

async function getRequestsByBinId(binId) {
  const SQL =  "SELECT * FROM requests WHERE bin_id = $1";

  let result = await pgDbQuery(SQL, binId);
  return result;
};

module.exports = {
  getRequestsByBinId
}