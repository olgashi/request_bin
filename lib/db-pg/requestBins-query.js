const { pgDbQuery } = require("./db-query");

async function createBin(binId) {
  const SQL = "INSERT INTO requestBins(bin_id) VALUES($1)";

  let result = await pgDbQuery(SQL, binId);
  return result;
};

module.exports = {
  createBin
}