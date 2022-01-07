const parsers = require("./parsers");
// const { helper } = require("./helpers");

const awsDyanmoDbService = require('./awsDyanmoDbService');
const MAX_RESULTS = 25;

// auto complete helper methods

function mapAutoParams(autoParams){
  const params = {};
  autoParams.forEach(param => {
    params[param.name] = parsers.autocomplete(param.value);
  });
  return params;
}

/***
 * @returns {[{id, value}]} filtered result items
 ***/
function handleResult(result, query, keyField, valField){
  if (!result || result.length == 0) return [];
  if (!keyField) {
    keyField = "id";
    valField = "name";
  }
  const items = result.map(item => getAutoResult(item[keyField], item[valField]));
  return filterItems(items, query);
}

/***
 * @returns {{id, value}} formatted autocomplete item
 ***/
function getAutoResult(id, value) {
  return {
    id: id || value,
    value: value || id
  };
}

function filterItems(items, query){
  if (query){
    const qWords = query.split(/[. ]/g).map(word => word.toLowerCase()); // split by '.' or ' ' and make lower case
    items = items.filter(item => qWords.every(word => item.value.toLowerCase().includes(word)));
    items = items.sort((word1, word2) => word1.value.toLowerCase().indexOf(qWords[0]) - word2.value.toLowerCase().indexOf(qWords[0]));
  }
  return items
  // const itemList = items.filter(item=> item.toLowerCase().includes(query.toLowerCase()))
  // return itemList
}

function listAuto(listFuncName, fields) {
  return async (query, pluginSettings, triggerParameters) => {
    try {
      const settings = mapAutoParams(pluginSettings);
      const params = mapAutoParams(triggerParameters);
      const client = awsDyanmoDbService.from({
        region: parsers.string(parsers.autocomplete(params.region) ||settings.accessKeyId)/* Change to correct parser */,
        accessKeyId: parsers.string(settings.accessKeyId)/* Change to correct parser */,
        secretAccessKey: parsers.string(settings.secretAccessKey)/* Change to correct parser */,
      });
      const result = await client[listFuncName]({query: parsers.string(query), ...params});
      const items = handleResult(result, query, ...fields);
      return items;
    }
    catch (err) {
      if (typeof err === 'string') throw err;
      throw err.message || JSON.stringify(err);
    }
  }
}

module.exports = {
    getRegions: listAuto("getRegions", ["RegionName", "RegionName"]),
    getTable: listAuto("getTables", ["TableName", "TableName"]),
    getBackups: listAuto("getBackups", ["BackupName", "BackupName"])
}