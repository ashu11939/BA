import pandas as pd
import numpy as np
import json


class LoadData:

    def __init__(self):  # Constructor
        print("LoadData Object created")

    def loadCsvData(self, dataURI, skipRows):
        _data = pd.read_csv(dataURI,  skiprows=skipRows,
                            na_values=['no info', '.', '-  -'])
        return _data

    def convertCSVToDataFrame(self, csv):
        _df = pd.DataFrame(csv)
        return _df

    def getHeaderList(self, dataFrame):
        return dataFrame.columns.tolist()

    def convertObjectColumnToDateColumn(self, objectColumn):
        return pd.to_datetime(objectColumn)

    def convertDataframeToJson(self, df):
        return df.to_json()

    def convertToJsonObject(self, keysArr, valuesArr):  # array of keys and values

        if(len(keysArr) == len(valuesArr)):
            print(len(keysArr))
        data = ""
        for index in range((len(keysArr))):
            print(keysArr[index])
            if (len(data) == 0):
                data = '"' + keysArr[index] + '":' + valuesArr[index]
            else:
                data = data + ',"' + keysArr[index] + '":' + valuesArr[index]
        data = "{" + data + "}"
        return data

    def maxValueFromlist(self, dataList):
        return dataList.max()

    def minValueFromList(self, dataList):
        return dataList.min()
    
    def maxValueIDFromlist(self, dataList):
        return dataList.idxmax()

    def minValueIDFromList(self, dataList):
        return dataList.idxmin()

    def getRowFromDataframe(self, df, index):
        return df.loc[index]



loadDataObject = LoadData()
customerLedgerURI = 'C:\\Users\\Ashutosh\\workspace\\BusinessAnalytics\\local\\BusinessAnalyticsPy\\fwdlezarstock\\LEZAR.CSV.csv'
customerLedger = loadDataObject.loadCsvData(customerLedgerURI, 3)
customerLedgerDF = loadDataObject.convertCSVToDataFrame(customerLedger)

# List all headers available
#print(customerLedgerDF.columns.tolist())
#print(customerLedgerDF['LEDGER'][5])

# To know data tyoe of column
# print(customerLedger['LEDGER'].dtypes)

stockStatementURI = 'C:\\Users\\Ashutosh\\workspace\\BusinessAnalytics\\local\\BusinessAnalyticsPy\\fwdlezarstock\\STOCK-3010.csv'
stockStatement = loadDataObject.loadCsvData(stockStatementURI, 2)
stockStatementDF = loadDataObject.convertCSVToDataFrame(stockStatement)
# print(loadDataObject.getHeaderList(stockStatementDF))
# print(stockStatement['Inv.Date'].dtypes)

stockStatement['Inv.Date'] = loadDataObject.convertObjectColumnToDateColumn(
    stockStatement['Inv.Date'])
# print(stockStatement['Inv.Date'].dtypes)
# print(stockStatement.head())

#print('Purchase Price', stockStatement['Purchase Price'].dtypes)
#print('Current Stock', stockStatement['Current Stock'].dtypes)

product = stockStatementDF['Product Name']
cost = stockStatementDF['Purchase Price'] * stockStatementDF['Current Stock']

# Create a new array for X-Axis being the 1st column and Y-axis being the second column
product.to_json()
data = '{"products":' + product.to_json() + '"cost":' + cost.to_json() + "}"
# print(data)
# print(product.head())
# print(cost.head())
