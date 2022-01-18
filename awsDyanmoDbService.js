const aws = require('aws-sdk')


module.exports = class AwsDynamoDBService {

    constructor(region, accessKeyId, secretAccessKey) {
        this.creds = {region, accessKeyId, secretAccessKey}
    }

    getDynamoDb (){
        return new aws.DynamoDB(this.creds)
    }
 

    static from({region, accessKeyId, secretAccessKey}) {
        
        return new AwsDynamoDBService(region, accessKeyId, secretAccessKey);
    }

    async createTable(createTableparams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.createTable(createTableparams).promise()
    }
    async delete_table(deleteTableparams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.deleteTable(deleteTableparams).promise()
    }

    async list_Tables(listParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.listTables(listParams).promise()
    }

    async describe_Table(tableParams){
        const dynamoAccess = this.getDynamoDb()
        const response =  await dynamoAccess.describeTable(tableParams).promise()
        const result = JSON.stringify(response.Table, null, 2)
        return result
    }

    async update_Table(updateParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.updateTable(updateParams).promise()
    }

    async create_BackUp(backupParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.createBackup(backupParams).promise()
    }

    async delete_BackUp(backupParams){
        const dynamoAccess = this.getDynamoDb()
        const listBackUps = (await dynamoAccess.listBackups().promise()).BackupSummaries
        let backUpArn = ""
        
        for (let item of listBackUps){
            if (item.BackupName === backupParams.BackupName) backUpArn = item.BackupArn
        }
        return await dynamoAccess.deleteBackup({BackupArn: backUpArn}).promise()
    }

    async put_Items(itemParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.putItem(itemParams).promise()
    }

    async batch_Write_Item(itemParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.batchWriteItem(itemParams).promise()
    }

    async get_Item(itemParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.getItem(itemParams).promise()
    }

    async batch_Get_Item(itemParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.batchGetItem(itemParams).promise()
    }

    async update_Item(itemParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.updateItem(itemParams).promise()
    }

    async delete_Item(itemParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.deleteItem(itemParams).promise()
    }

    async query(queryParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.query(queryParams).promise()
    }

    async scan(scanParams){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.scan(scanParams).promise()
    }

    async execute_Statement(statement){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.executeStatement().promise()
    }

    async batchExecute_Statement(statements){
        const dynamoAccess = this.getDynamoDb()
        return await dynamoAccess.batchExecuteStatement().promise()
    }

    async getBackUps({}){
        const dynamoAccess = this.getDynamoDb()
        return await (await dynamoAccess.listBackups().promise()).BackupSummaries
    }

    async getRegions({}){
        // if (this.creds.region) 
        this.creds.region = "us-west-2"
        const ec2 = new aws.EC2(this.creds)
        const result = await ec2.describeRegions({}).promise()
        return result.Regions
    }

    async getTables({}){
        const dynamoAccess = this.getDynamoDb()
        const tables = await dynamoAccess.listTables({}).promise()
        const results=[]
        tables.TableNames.forEach(table=>{
           results.push({TableName: table})
        })
        return results
    }
}