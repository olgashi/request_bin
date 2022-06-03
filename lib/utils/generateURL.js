function generateEndpointURL(binID) {
  return `https://log.donaldredding.dev/endpoint/${binID}`;
};

function generateRequestbinURL(binID) {
 return `https://rqbin.donaldredding.dev/view_bin/${binID}`; 
};

module.exports = {
  generateEndpointURL,
  generateRequestbinURL
};