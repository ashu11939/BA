from flask import Flask, request
from datetime import datetime
import re
from loadData import LoadData
from flask import Response
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

loadData = LoadData()
@app.route("/",methods = ['POST', 'GET'])
def home():

    stockStatementURI = 'C:\\Users\\Ashutosh\\workspace\\BusinessAnalytics\\local\\BusinessAnalyticsPy\\fwdlezarstock\\STOCK-3010.csv'
    skipRows = 2
    stockStatement = loadData.loadCsvData(stockStatementURI, skipRows)
    stockStatementDF = loadData.convertCSVToDataFrame(stockStatement)
    product = stockStatementDF['Product Name']

    cost = stockStatementDF['Purchase Price'] * \
        stockStatementDF['Current Stock']

    # Create a new array for X-Axis being the 1st column and Y-axis being the second column
    data = loadData.convertToJsonObject(["products", "cost"], [product.to_json(), cost.to_json()])
    product.to_json()
    # data = '{"products":' + product.to_json() + ',"cost":' + cost.to_json() + "}"
    
    ######## Max / Min Values from list starts #########
    stockList = stockStatementDF['Current Stock']
    maxValue = loadData.maxValueFromlist(stockList)
    minValue = loadData.minValueFromList(stockList)
    maxValueId = loadData.maxValueIDFromlist(stockList)
    minValueId = loadData.minValueIDFromList(stockList)
    maxRowData = stockStatementDF.loc[(stockStatementDF['Current Stock'] == maxValue)]
    minRowData = stockStatementDF.loc[(stockStatementDF['Current Stock'] == minValue)]
    rowData = loadData.getRowFromDataframe(stockStatementDF, maxValueId)
    #print(stockStatementDF.loc[maxValueId]) 
    ######## Max / Min Values from list ends #########
    

    ######## Product(X) vs Stock(Y) starts ########

    productVsStock = loadData.convertToJsonObject(["products", "stock"], [product.to_json(), stockList.to_json()])
  
    ######## Product(X) vs Stock(Y) ends ###########
    
    ######## Product(X) vs StockValue(Y) starts ########

    productVsStockValue = loadData.convertToJsonObject(["products", "cost"], [product.to_json(), cost.to_json()])

    ######## Product(X) vs StockValue(Y) ends ###########

    #show data in tabular form from CSV stockStatementDF.to_json()
    print(request.get_json())
    return Response(productVsStock, mimetype='application/json')


@app.route("/hello/<name>")
def hello_there(name):
    now = datetime.now()
    formatted_now = now.strftime("%A, %d %B, %Y at %X")

    # Filter the name argument to letters only using regular expressions. URL arguments
    # can contain arbitrary text, so we restrict to safe characters only.
    match_object = re.match("[a-zA-Z]+", name)

    if match_object:
        clean_name = match_object.group(0)
    else:
        clean_name = "Friend"

    content = "Hello there, " + clean_name + "! It's " + formatted_now
    return content
