const { dbQuery } = require("./db-query");

async function getRequestsByBinId(binId) {
  const SQL =  "SELECT * FROM requests WHERE bin_id = $1";

  let result = await dbQuery(SQL, binId);
  return result;
};

module.exports = {
  getRequestsByBinId
}