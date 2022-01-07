const parsers = require("./parsers");


const AwsDynamoDBService = require('./awsDyanmoDbService');


async function create_Table(action, settings){
  const {accessKeyId, secretAccessKey} = settings
    const loginParams = {
        region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
        accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
        secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
    }

    const awsService = AwsDynamoDBService.from(loginParams)

    const {table_name, table_schema} = action.params

    const schemas = JSON.parse(table_schema)

    const attributeDefinitions = [];
    const keySchemas = [];

    schemas.forEach(schema => {
        const attributeDefinition = {}
        const keySchema ={}

        attributeDefinition.AttributeName = schema.AttributeName
        attributeDefinition.AttributeType = schema.AttributeType
        keySchema.AttributeName = schema.AttributeName
        keySchema.KeyType = schema.KeyType
        attributeDefinitions.push(attributeDefinition)
        keySchemas.push(keySchema)
    });

    const createTableparams = {
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
  
        StreamSpecification: {
              StreamEnabled: false,
            },
        TableName: parsers.string(table_name)
      }
    
    createTableparams.AttributeDefinitions = attributeDefinitions
    createTableparams.KeySchema = keySchemas

    return await awsService.createTable(createTableparams)

}

async function delete_Table(action, settings){
  const {accessKeyId, secretAccessKey} = settings
    const loginParams = {
        region: parsers.autocomplete(action.params.region)/* Change to correct parser */,
        accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
        secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
    }

  const awsService = AwsDynamoDBService.from(loginParams)

  const {table_name} = action.params

  const deleteTableparams = {
    TableName: parsers.autocomplete(table_name)
  }
  return await awsService.delete_table(deleteTableparams)

}

async function list_Tables(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {limit}= action.params
  let listParams ={}
  if (limit) listParams.Limit = parsers.number(limit)
  
  return await awsService.list_Tables(listParams)
}


async function describe_Table(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {table_name}= action.params
  const tableParams = {
    TableName: parsers.autocomplete(table_name)
  }
  return await awsService.describe_Table(tableParams)
}

async function update_Table(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {table_name,params} = action.params
  const updateParamKey = Object.keys(params)[0]
  const updateParamValue = Object.values(params)[0]
  const updateParams = {
    TableName : parsers.autocomplete(table_name),
  }
  updateParams[updateParamKey] = JSON.parse(updateParamValue)
  return await awsService.update_Table(updateParams)
}

async function create_BackUp(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {backUpName, table_name} = action.params
  const backUpParams ={
    BackupName: parsers.string(backUpName),
    TableName: parsers.autocomplete(table_name)
  }
  return await awsService.create_BackUp(backUpParams)
}

async function delete_BackUp(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {backUpName} = action.params
  const backUpParams ={
    BackupName: parsers.autocomplete(backUpName),
  }
  return await awsService.delete_BackUp(backUpParams)
}

async function put_Items(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {table_name, itemData} = action.params
  const itemParams = {
    TableName: parsers.autocomplete(table_name),
    Item: JSON.parse(itemData)
  }
  return await awsService.put_Items(itemParams)
}

async function batch_Write_Item(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {table_name, itemDatas} = action.params
  const itemDataArray = parsers.text(itemDatas)
  const putArray = []
  itemDataArray.forEach(item=>{
    const itemObject = {}
    itemObject.PutRequest.Item = item
    putArray.push(itemObject)
  })

  const itemParams = {
    TableName: parsers.autocomplete(table_name),
    RequestItems : {}
  }
  itemParams.RequestItems[table_name]= putArray
  return await awsService.batch_Write_Item(itemParams)
}

async function get_Item(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {table_name, projectionExpression, key} = action.params
  const itemParams = {
    TableName: parsers.autocomplete(table_name),
    Key: JSON.parse(key),
    ProjectionExpression: parsers.string(projectionExpression)
  }
  return await awsService.get_Item(itemParams)
}

async function batch_Get_Item(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {table_name, projectionExpression, keys} = action.params
  const itemParams = {
    TableName: parsers.autocomplete(table_name),
    RequestItems: {}
  }
  itemParams.RequestItems[table_name] = {
    Keys: parsers.text(keys),
    ProjectionExpression:  parsers.string(projectionExpression)
  }
  return await awsService.batch_Get_Item(itemParams)
}

async function update_Item(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {table_name, expressionAttributeValues, expressionAttributeNames, key, setExpression} = action.params
  const updateParams = {
    ExpressionAttributeNames : JSON.parse(expressionAttributeNames),
    ExpressionAttributeNames : JSON.parse(expressionAttributeValues),
    Key: JSON.parse(key),
    TableName: parsers.autocomplete(table_name),
    ReturnValues: "ALL_NEW",
    UpdateExpression: `SET ${parsers.string(setExpression)}`
  }
  return await awsService.update_Item(updateParams)
}

async function delete_Item(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {table_name, key} = action.params
  const itemParams = {
    TableName: parsers.autocomplete(table_name),
    Key: JSON.parse(key),
  }
  return await awsService.delete_Item(itemParams)
}

async function query(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {table_name, ExpressionAttributeValues, KeyConditionExpression} = action.params
  const queryParams ={
    ExpressionAttributeValues: parsers.string(ExpressionAttributeValues),
    TableName: parsers.autocomplete(table_name),
    KeyConditionExpression: parsers.string(KeyConditionExpression) //
  }
  return await awsService.query(queryParams)
}

async function scan(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {table_name, projectionExpression} = action.params
  const scanParams = {
    TableName : parsers.autocomplete(table_name),
    ProjectionExpression: parsers.string(projectionExpression)
  }
  return await awsService.scan(scanParams)

}

async function execute_Statement(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {statement} = action.params
  const statementParams = {
    Statement: parsers.string(statement),
    ConsistentRead: true || false,
  }
  return awsService.execute_Statement(statementParams)
}

async function bathcExecute_Statement(action, settings){
  const {accessKeyId, secretAccessKey} = settings
  const loginParams = {
      region: parsers.autocomplete(action.params.region || settings.region)/* Change to correct parser */,
      accessKeyId: parsers.string(accessKeyId)/* Change to correct parser */,
      secretAccessKey: parsers.string(secretAccessKey)/* Change to correct parser */,
  }
    
  const awsService = AwsDynamoDBService.from(loginParams)
  const {statements} = action.params
  const statementInArray = parsers.text(statements)
  const statementArray = []
  statementInArray.forEach(item=>{
    let statementObject = {
      ConsistentRead: true || false,
    }
    statementObject.Statement = item
    statementArray.push(statementObject)
  })
  const statementParams = {
    Statements: statementArray
  }
  return await awsService.batchExecute_Statement(statementParams)
}

module.exports ={
    create_Table,
    delete_Table,
    list_Tables,
    describe_Table,
    create_BackUp,
    delete_BackUp,
    put_Items,
    get_Item,
    batch_Get_Item,
    delete_Item,
    query,
    update_Table,
    update_Item,
    scan,
    batch_Write_Item,
    execute_Statement,
    bathcExecute_Statement,
    // Autocomplete Functions
    ...require("./autocomplete")
}