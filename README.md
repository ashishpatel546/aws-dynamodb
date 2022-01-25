# kaholo-plugin-AWS-DynamoDb
Kaholo Plugin for running scripts and queries on AWS DynamoDB servers.

## Settings
1. Access Key (Vault) **Required if not in method** - The default access key to use when connecting to the DynamoDB server. Can be in this format ```accessKeyId=myAccessKey```.
2. Secret Key (Vault) **Required if not in method** - The default secret access key to use when connecting to the DynamoDB server. Can be in this format ```secretAccessKey=mySecretAccessKey```.
3. Region (Autocomplete) **Required** - The region used to make the request on AWS. Can be in this format ```Region=myRegion```.


## Method: Create Table
This method creates a table in DynamoDB. You can see more about creating tables [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.CreateTable).

### Parameters
1. Access Key (Vault) **Required if not in method** - The default access key to use when connecting to the DynamoDB server.

2. Secret Key (Vault) **Required if not in method** - The default secret access key to use when connecting to the DynamoDB server.

3. Region (Autocomplete) **Required** - The region used to make the request on AWS.

4. Table Name  (Text) **Required** - The name of the table to be created on the DynamoDB database.

5. Table Schema (Text) **Required** - The table schema to give parameters in a standard manner defined by DynamoDB to perform operation.
**Should be in this format** ```[{‘AttributeName’:‘Season’,‘AttributeType’:‘Season’,‘KeyType’:‘Hash’,}]```

## Method: Delete Table 
This method deletes a table in DynamoDB. You can see more about deleting tables [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeleteTable).

### Parameters
1. Access Key (Vault) **Required if not in method** - The default access key to use when connecting to the DynamoDB server.

2. Secret Key (Vault) **Required if not in method** - The default secret access key to use when connecting to the DynamoDB server.

3. Region (Autocomplete) **Required** - The region used to make the request on AWS.

4. Table Name (Text) **Required** - The name of the table to be deleted on the DynamoDB database.

## Method: Update Table
This method updates a table in DynamoDB. You can see more about updating tables [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.UpdateTable).

### Parameters
1. Access Key (Vault) **Required if not in method** - The default access key to use when connecting to the DynamoDB server.

2. Secret Key (Vault) **Required if not in method** - The default secret access key to use when connecting to the DynamoDB server.

3. Region (Autocomplete) **Required** - The region used to make the request on AWS.

4. Table Name (Text) **Required** - The name of the table to be updated on the DynamoDB database.

5. Update Params (String) **Required** - The parameters of the table to be updated.

## Method: List Tables
This method lists all tables in DynamoDB. You can see more about listing tables [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.ListTables).

### Parameters
1. Access Key (Vault) **Required if not in method** - The default access key to use when connecting to the DynamoDB server.
2. Limit (String) **Required** - Sets the limit of outputs to return.

## Method: Describe Table
This method describes a specified table in DynamoDB. You can see more about describing tables [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DescribeTable).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Table Name (Autocomplete) **Required** - The name of the table to be described on the DynamoDB database.

## Method: Create Back Up
This method creates a back up for an existing table in DynamoDB. You can see more about creating back ups [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Backups.html).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Table Name (Autocomplete) **Required** - The name of the table to be backed up on the DynamoDB database.

3. Back Up Name (String) **Required** - The name of the back up to be created in DynamoDB.

## Method: Delete Back Up
This method deletes an existing back up in DynamoDB. You can see more about deleting back ups [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BackupRestore.html).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Back Up Name (String) **Required** - The name of back up to delete in DynamoDB.

## Method: Put Item
This method creates an item in an existing table in DynamoDB using the AWS management console. You can learn more about working with items [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Table Name (Autocomplete) **Required** - The name of the table to put the item on.

3. Item Data To Put On (String) **Required** - The item data to put on an existing table in DynamoDB.

## Method: Batch Write Items
This method puts multiple items on an existing table at once. You can learn more about working with items [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Table Name (Autocomplete) **Required** - The name of the table to put multiple items on.

3. Items (String) **Required** - Data having more then one item to put on an existing table in DynamoDB. Enter the items in JSON format separated by ','.

## Method: Get Item
This method is used to read an item from an existing table in DynamoDB. You can learn more about working with items [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Table Name (Autocomplete) **Required** - The name of the table to get the item from.

3. Key (Text) **Required** - The Key is a map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve.

4. Projection Expression (Text) **Required** - Projection Expression is used to identify one or more attributes to retrieve from the table.


## Method: Get Batch Items
This method is used to read multiple items on an existing table in DynamoDB. You can learn more about working with items [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Table Name (Autocomplete) **Required** - The name of the table to get multiple items from.

3. Key (Text) **Required** - The Key is a map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve.

4. Projection Expression (Text) **Required** - Projection Expression is used to identify one or more attributes to retrieve from the table.

## Method: Update Item
This method is used to update an item on an existing table in DynamoDB. You can learn more about working with items [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Table Name (Autocomplete) **Required** - The name of the table to update the item from.

3. Key (Text) **Required** - The Key is a map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve.

4. Expression Attribute Values (String) **Required** - The values of expression attribute.
**Can be in this format** ```{‘:t’:{‘S’:‘Season’},‘:y’:{‘N’,‘2015’}}```

5. Expression Attribute Names (String) **Required** - Names of expression attribute.
**Can be in this format** ```{‘#AT’:‘AlbumTitle’,‘#y’:‘Year’}```

6. Set Expression (String) **Required** - This parameter is used to set the expression.
**Can be in this format** ```‘‘ #Y = :y, #AT = :t”```


## Method: Delete Item
This method is used to delete an item on an existing table in connected DynamoDB. You can learn more about working with items [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithItems.html).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Table Name (Text) **Required** - The name of the table to delete the item from.

3. Key (Autocomplete) **Required** - The Key is a map of attribute names to AttributeValue objects, representing the primary key of the item to retrieve.


## Method: Query
This method is used to query in DynamoDB. You can learn more about working with queries [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Query.html).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Table Name (Autocomplete) **Required** - The name of the table to do query operations on.

3. 4. Expression Attribute Values (String) **Required** - The values of expression attribute.
**Can be in this format** ```{‘:t’:{‘S’:‘Season’},‘:y’:{‘N’,‘2015’}}```

4. Projection Expression (Text) **Required** - Projection Expression is used to identify one or more attributes to retrieve from the table.

## Method: Scan
This method is used to scan a table in DynamoDB. You can learn more about working with scans [here](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Scan.html).

### Parameters
1. Region (Autocomplete) **Required** - The region used to make the request on AWS.

2. Table Name (Autocomplete) **Required** - The name of the table to be scanned.

3. Projection Expression (Text) **Required** - Projection Expression is used to identify one or more attributes to retrieve from the table.


