# Elasticsearch Explorer
Flask interface to easily view indices, doc_types and documents in elasticsearch cluster

This is a Python-Flask based application which displays all the indices in your Elasticsearch cluster listing all the doc_types in each index.
Also, documents of each doc_type in an index can be seen in a clear JSON format. 

## Installation & dependencies
**Note** : Recommended Python version is 2.7  
#### Install using virtual environment (recommended way)
1. In terminal, run ```sudo apt-get install python python-pip``` (Install python and pip if not already installed)
2. Run ```sudo apt-get install python-virtualenv``` (Install python virtual environment)
3. Clone the repository and in the project folder, run ```virtualenv venv``` (Create virtual env for the project)
4. Enter ```source venv/bin/activate``` (Activate the virtual env)
5. Run ```pip install -r requirements.txt``` (pip will install all dependencies listed in the requirements file)
6. Use ```deactivate``` to come out of virtual environment  

#### Install without virtual environment
1. In terminal, run ```sudo apt-get install python python-pip``` (Install python and pip if not already installed)
2. Clone the repository and in the project folder, run ```pip install -r requirements.txt``` (pip will install all dependencies listed in the requirements file) (Use ```sudo``` in command if needed)  

*Note* : The requirements file basically installs the following pip packages : ```flask``` , ```requests``` , ```elasticsearch```
  
## Usage
1. If you are using virtual env, run ```source venv/bin/activate``` to activate it otherwise skip this step.
2. Ensure Elasticsearch service is running on your machine (on port 9200).
3. Run ```python app.py``` in the project folder.  
   (Note: The application is currently set to run on port 5001. You can change this port in ```app.py``` file)
4. Open ```http://localhost:5001``` in browser. (Or whatever is the server and port)
5. A tabular display of indices and doc_types will be shown. Click on a doc_type to see corresponding documents.
6. Change the count of maximum documents fetched by providing value in input box. (set to 1 by default)

## Screenshot
![Elasticsearch explorer](https://docs.google.com/uc?id=0Byz7IT6HpkQ0X1JzOE1ZeGhsZWM)
