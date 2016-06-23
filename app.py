from flask import Flask,request,render_template,g
import requests
import json
import collections

"""
Run : sudo ~/elasticsearch-1.7.2/bin/elasticsearch
"""

app = Flask(__name__)
from query.details import details_module
app.register_blueprint(details_module)

@app.route('/', methods=['GET'])
def index():
	if request.method == 'GET':
		r = requests.get("http://localhost:9200/_mapping")
		indexData = json.loads(r.text)
		indices = {}
		for indexName in indexData:
			d = {}
			for doctype in indexData[indexName]["mappings"]:
				r = requests.get("http://localhost:9200/"+indexName+"/"+doctype+"/_count")
				count = (json.loads(r.text))["count"]
				d[doctype] = count
			indices[indexName] = collections.OrderedDict()
			for key in sorted(d):
				indices[indexName][key] = d[key]			

		indices = dict(sorted(indices.iteritems()))
		return render_template('index.html',indices=indices)

if __name__ == '__main__':
	app.run(host='0.0.0.0',port=5001,debug=True)