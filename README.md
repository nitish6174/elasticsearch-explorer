# Elasticsearch Visualizer
Flask interface to easily view indices, doc_types and documents in elasticsearch cluster

This is a Python-Flask based application which displays all the indices in your Elasticsearch cluster listing all the doc_types in each index.
Also, documents of each doc_type in an index can be seen in a clear JSON format. 

### Dependencies & modules used
  * Recommended Python version is 2.7
  * **Python flask** : Install using ```sudo pip install flask``` or ```sudo apt-get install python-flask```
  * **Python elasticsearch client** : Install using ```sudo pip install elasticsearch``` or ```sudo apt-get install python-elasticsearch```
  * **Python requests** : Install using ```sudo pip install requests``` or ```sudo apt-get install python-requests```
  * Other python modules (generally pre-installed) : **collections** , **json**
  
### Usage
1. In the app.py file, set the port on which you want the application to run. (Currently set as *5001*)
2. Ensure Elasticsearch service is running on your machine and then run ```python app.py``` in the project folder.
3. Open ```http://localhost:5001``` in browser (Or whatever is the server and port)
4. A tabular display of indices and doc_types will be shown. Click on a doc_type to see corresponding documents.
5. Change the ```max_documents_to_fetch``` value in ```query/details.py``` file to increase the documents shown for each doc_type
(currently showing only 1 document of each type)
