# kaholo-plugin-AWS-DynamoDb
Kaholo Plugin for running scripts and queries on DynamoDb servers.

## Settings
1. Access Key (Vault) **Required if not in method** - The access key to use on default to connect to the DynamoDb server.
2. Secret Key (Vault) **Required if not in method** - The secret access key to use on default to connect to the DynamoDB server.
3. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

**Can be in this format**
 
*accessKeyId=myaccesskey ;secretAccessKey=My_secretaccesskey;Region=myRegion;


## Method: Create Table
This method creates a table in connected DynamoDb. 

### Parameters
1. Access Key (Vault) **Required if not in method** - The access key to use on default to connect to the DynamoDB server.

2. Secret Key (Vault) **Required if not in method** - The secret access key to use on default to connect to the DynamoDB server.

3. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

4. Table Name  (Text) **Required** - The table name to create the table on the connected DynamoDb  database.  

5. Table Schema (Text) **Required** - The table schema to give parameters in a standard manner defined by DynamoDb to perform operation.
**Should be in this format**
**[{‘AttributeName’:‘Season’,‘AttributeType’:‘Season’,‘KeyType’:‘Hash’,}]**

## Method: Delete Table 
This method deletes a table in connected  DynamoDb.

### Parameters
1. Access Key (Vault) **Required if not in method** - The access key to use on default to connect to the DynamoDB server.

2. Secret Key (Vault) **Required if not in method** - The secret access key to use on default to connect to the DynamoDB server.

3. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

4. Table Name  (Text) **Required** - The table name to create the table on the connected DynamoDb.

## Method: Update Table
This method updates the table in connected DynamoDb.

### Parameters
1. Access Key (Vault) **Required if not in method** - The access key to use on default to connect to the DynamoDB server.

2. Secret Key (Vault) **Required if not in method** - The secret access key to use on default to connect to the DynamoDB server.

3. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

4. Table Name  (Text) **Required** - The table name to create the table on the connected DynamoDb.

5. Update Params (String) **Required** - The Update Params  to give parameters which we want to update.

## Method: List Tables
This method lists all tables in connected DynamoDb.

### Parameters
1. Access Key (Vault) **Required if not in method** - The access key to use on default to connect to the DynamoDB server.

2. Limit (String) **Required** - To set limit of outputs which outputs we get from this method.

## Method: Describe Table
This method describes the table.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Table Name  (Autocomplete) **Required** - The table name to create the table on the connected DynamoDb.

## Method: Create Back Up
This method creates back up for an existing table.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Table Name  (Autocomplete) **Required** - The table name to create the table on the connected DynamoDb.

3. Back Up Name (String) **Required** - The name of back up in DynamoDb.

## Method: Delete Back Up
This method deletes back up in connected DynamoDb.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Back Up Name (String) **Required** - The name of back up in DynamoDb.

## Method: Put Item
This method puts items on an existing table using the AWS management console.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Table Name  (Autocomplete) **Required** - The table name to create the table on the connected DynamoDb.

3. Item Data TO Put On (String) **Required** - The item data to put on an  existing table in connected DynamoDb.

## Method: Batch Write Items
This method puts more then one items on an existing table at once.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Table Name  (Autocomplete) **Required** - The table name to create the table on the connected DynamoDb.

3. Items (String) **Required** - Data which having more then one items to put on an  existing table in connected DynamoDb.

## Method: Get Items
This method is used to get the item  from an existing table in connected DynamoDb.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Table Name  (Autocomplete) **Required** - The table name to create the table on the connected DynamoDb.

3. Key (Text) **Required** - Key is a map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve.

4. Projection Expression (Text) **Required** - Projection Expression is used to identifies one or more attributes to retrieve from the table.


## Method: Get Batch Items
This method is used to get more then one items  on an existing table in connected DynamoDb.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Table Name  (Autocomplete) **Required** - The table name to create the table on the connected DynamoDb.

3. Key (Text) **Required** - Key is a map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve.

4. Projection Expression (Text) **Required** - Projection Expression is used to identifies one or more attributes to retrieve from the table.

## Method: Update Item
This method is used to update the items  on an existing table in connected DynamoDb.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Table Name  (Autocomplete) **Required** - The table name to create the table on the connected DynamoDb.

3. Key (Text) **Required** - Key is a map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve.

4. Expression Attribute Values (String) **Required** - The values of expression attribute.
**Can be in this format**
**{‘:t’:{‘S’:‘Season’},‘:y’:{‘N’,‘2015’}}**

5. Expression Attribute Names (String) **Required** -  Names of expression attribute.
**Can be in this format**
**{‘#AT’:‘AlbumTitle’,‘#y’:‘Year’}**

6. Set  Expression (String) **Required** -  This parameter is used to set the expression.
**Can be in this format**
**‘‘ #Y = :y, #AT = :t”**


## Method: Delete Item
This method is used to delete the items  on an existing table in connected DynamoDb.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Table Name  (Text) **Required** - The table name to create the table on the connected DynamoDb.

3. Key (Autocomplete) **Required** - Key is a map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve.


## Method: Query
This method is used to query in connected DynamoDb.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Table Name  (Autocomplete) **Required** - The table name to create the table on the connected DynamoDb.

3. 4. Expression Attribute Values (String) **Required** - The values of expression attribute.
**Can be in this format**
**{‘:t’:{‘S’:‘Season’},‘:y’:{‘N’,‘2015’}}**

4. Projection Expression (Text) **Required** - Projection Expression is used to identifies one or more attributes to retrieve from the table.

## Method: Scan
This method is used to scan a table in connected DynamoDb.

### Parameters
1. Region (Autocomplete) **Required** - The region is used to make the request on AWS regions.

2. Table Name  (Autocomplete) **Required** - The table name to create the table on the connected DynamoDb.

3. Projection Expression (Text) **Required** - Projection Expression is used to identifies one or more attributes to retrieve from the table.


