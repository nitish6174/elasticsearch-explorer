from flask import request,Blueprint
import json
from db import *

details_module = Blueprint('details_module', __name__)

@details_module.route('/details', methods=['POST'])
def details():
	if request.method == 'POST':
		db_index = request.form['db_index']
		db_doctype = request.form['db_doctype']

		q = {
			"filter" : {
				"type" : {
					"value" : db_doctype
				}
			}
		}
		max_documents_to_fetch = 1
		res = es_search(db_index,q,False,max_documents_to_fetch)
		return json.dumps(res["hits"])