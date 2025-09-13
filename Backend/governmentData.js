const staticData = require('./staticData.json');

function getCropMarketPrices(state, crop) {
const record = staticData.find(
r => r.state.toLowerCase() === state.toLowerCase() && r.crop.toLowerCase() === crop.toLowerCase()
);

return record || { state, crop, price: 'N/A – Data not found' };
}

module.exports = { getCropMarketPrices };
