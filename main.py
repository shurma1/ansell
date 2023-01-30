from datetime import datetime
from sqlighter import SQLighter
from flask import Flask, jsonify, request, render_template, url_for, redirect, session, send_file, Response, send_file,Response,render_template, make_response
from flask_cors import CORS
from random import randint
import json
import jwt
import hashlib
from openpyxl import Workbook, load_workbook
import pandas as pd
from io import BytesIO
import xlwings as xw
import stun
from gevent.pywsgi import WSGIServer

host = str(stun.get_ip_info()[1])

print(host)



app = Flask(__name__)
CORS(app)
db = SQLighter('db.db')

users = []


def check_token(token):
	global users
	for user in users:
		if (user['token'] == token):
			return True
		
	return False


def get_token_info(token):
	global users
	for user in users:
		if (user['token'] == token):
			return user
		
	return False



@app.route('/test', methods=['POST'])
def test():
	data = {
		'message':'test'
		}
	return jsonify(data)




@app.route('/worker_auth', methods=['POST'])
def worker_auth():
	contents = request.get_json(force=True)
	login = contents["login"]
	password = contents["password"]
	hashPassword = hashlib.sha256(str(password).encode('utf-8')).hexdigest()
	result = db.check_worker(login, hashPassword)
	if(result):
		hand = db.get_hand(login, hashPassword)
		defects = db.get_this_defects()
		token = jwt.encode({"r": randint(1, 1000000)}, "secret", algorithm="HS256")
		data = {
			'token': token,
			'login': login,
			'status': 'worker'
		}
		for i, user in enumerate(users, start=1):
			if(user['login'] == login):
				del users[i-1]
			
		users.append(data)
		answer = {
			'status': 200,
			'message': 'ok',
			'hand': hand[0],
			'token': token,
			'defects':defects
		}
		return jsonify(answer)
	else:
		answer = {
				'status': 401,
				'message': 'invalid data'
			}
		return jsonify(answer), 401

	

@app.route('/auth', methods=['POST'])
def auth():
	contents = request.get_json(force=True)
	login = contents["login"]
	password = contents["password"]
	hashPassword = hashlib.sha256(str(password).encode('utf-8')).hexdigest()
	result = db.check_meneger(login, hashPassword)
	if(result):
		userStatus = db.get_user_status(login, hashPassword)[0]
		token = jwt.encode({"r": randint(1, 1000000)}, "secret", algorithm="HS256")
		data = {
			'token': token,
			'login': login,
			'status': 'meneger',
			'access': userStatus
		}
		for i, user in enumerate(users, start=1):
			if(user['login'] == login):
				del users[i-1]
			
		users.append(data)
		answer = {
			'status': 200,
			'message': 'ok',
			'status': userStatus,
			'token': token
		}
		return jsonify(answer)
	else:
		answer = {
				'status': 401,
				'message': 'invalid data'
			}
		return jsonify(answer), 401


@app.route('/defect', methods=['POST'])
def defect():
	contents = request.get_json(force=True)
	token = contents['token']
	if(check_token(token)):
		now = datetime.now()
		rejectType = contents['defect']
		shift = contents['shift']
		hand = contents['hand']
		style = contents['style']
		size = contents['size']
		count = contents['count']
		thisRound = contents['round']
		date = now.strftime("%d.%m.%Y")
		isHave = db.defect_check(rejectType, date, shift, hand, style, size, thisRound)
		if isHave is None:
			db.new_defect(rejectType, date, shift, hand, style, size, thisRound , count)
		else:
			db.add_count_defect(rejectType, date, shift, hand, style, size, thisRound , count)
			
		answer = {
			'status': 200,
			'message': 'ok'
			}

		return jsonify(answer)
	else:
		answer = {
			'status': 401,
			'message': 'Unauthorized'
			}

		return jsonify(answer),401



@app.route('/edit_defect_types', methods=['POST'])
def edit_defect_types():
	contents = request.get_json(force=True)
	token = contents['token']
	if(check_token(token)):
		if(get_token_info(token)['status'] == 'meneger'):
			replaceble = contents['replaceble']
			replacebleName = contents['replacebleName']
			replacement = contents['replacement']
			replacementName = contents['replacementName']
			identify = db.get_defect_id(replaceble)[0]
			db.replace_defect_type(identify, replacement, replacementName)
			
			answer = {
				'status': 200,
				'message': 'ok'
				}

			return jsonify(answer)
		else:
			answer = {
				'status': 401,
				'message': 'Unauthorized'
				}

			return jsonify(answer),401
	
	else:
		answer = {
			'status': 401,
			'message': 'Unauthorized'
		}

		return jsonify(answer),401

@app.route('/get_defect_types', methods=['POST'])
def get_defect_types():
	contents = request.get_json(force=True)
	token = contents['token']
	if(check_token(token)):
		if(int(get_token_info(token)['access']) >0):
			if(get_token_info(token)['status'] == 'meneger'):
				thisDefects = db.get_this_defects()
				allDefects = db.get_all_defect()

				for index, defect in enumerate(thisDefects, start=1):
					for i, el in enumerate(allDefects, start=1):
						if(el[1] == defect[1]):
							del allDefects[i-1]

				data = {
					'status': '200',
					'message': 'ok',
					'thisDefect': thisDefects,
					'anotherDefects': allDefects
				}
				return jsonify(data)
			else:
				answer = {
					'status': 401,
					'message': 'Unauthorized'
					}

				return jsonify(answer),401
		
		else:
			answer = {
				'status': 401,
				'message': 'Unauthorized'
			}

			return jsonify(answer),401
	else:
		answer = {
			'status': 401,
			'message': 'Unauthorized'
		}

		return jsonify(answer),401




@app.route('/get_chart_data', methods=['POST'])
def get_chart_data():
	contents = request.get_json(force=True)
	token = contents['token']
	if(check_token(token)):
		if(get_token_info(token)['status'] == 'meneger'):
			defect = db.get_all_defect_table()
			thisDefects = db.get_this_defects()
			formated_defect = {}
			for i, d in enumerate(defect, start=1):
				data = {
					'rejectType': d[0],
					'date': d[1],
					'shift': d[2],
					'count': d[3],
					'hand': d[4],
					'style': d[5],
					'size': d[6],
					'round': d[7]
				}
				formated_defect[i] = data
			answer={
				'defects':thisDefects,
				'data':formated_defect
				}
			return jsonify(answer)
		answer = {
			'status': 401,
			'message': 'Unauthorized'
			}
		return jsonify(answer),401 
		
	answer = {
		'status': 401,
		'message': 'Unauthorized'
		}
	return jsonify(answer),401 
		



@app.route('/get_table', methods=['POST'])
def get_table():
	contents = request.get_json(force=True)
	token = contents['token']
	if(check_token(token)):
		if(get_token_info(token)['status'] == 'meneger'):
			defect = db.get_all_defect_table()
			length = len(defect)
			defectData ={}
			defectTitle = ['Product', 'Change Over #', 'Date', 'Shift', 'Reject Type', 'Reject Count', 'Rework QTY', 'Size/Style', 'Hand', 'Round No.', 'Remarks']
			if(length != 0):
				foramtedDefect = []
				for d in defect:
					shift = ''
					if d[2] == '1':
						shift = 'AM'
					elif d[2] == '2':
						shift = 'PM'
					newList = ['Hycron', str(d[1].split(".")[1]), d[1], shift, d[0], d[3], ' ', str(d[5])+'-'+str(d[6]), d[4], d[7], 'production run']
					foramtedDefect.append(newList)
				for index, value in enumerate(defectTitle, start=1):
					i = 0
					data = []
					while(i < length):
						data.append(foramtedDefect[i][index-1]) 
						i+=1
					defectData[value] = data
			defects = pd.DataFrame(defectData)
			in_memory_fp = BytesIO()
			defects.to_excel(in_memory_fp)
			in_memory_fp.seek(0,0)
			binary_xl = in_memory_fp.read()
			return Response(binary_xl, mimetype="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", direct_passthrough=True)
		else:
			answer = {
				'status': 401,
				'message': 'Unauthorized'
				}
			return jsonify(answer),401 

	else:
		answer = {
			'status': 401,
			'message': 'Unauthorized'
			}
		return jsonify(answer),401 
	




@app.route('/get_users', methods=['POST'])
def get_users():
	contents = request.get_json(force=True)
	token = contents['token']
	if(check_token(token)):
		if(get_token_info(token)['status'] == 'meneger' and int(get_token_info(token)['access']) > 0):
			users = db.get_users()
			workers = db.get_workers()
			users_data = []
			workers_data = []

			for i, user in enumerate(users, start=1):
				data = {
					'login': user[0],
					'id': user[2],
					'status': user[3]
				}

				users_data.append(data)


			for i, worker in enumerate(workers, start=1):
				data = {
					'login': worker[1],
					'id': worker[3],
					'hand': worker[0]
				}

				workers_data.append(data)
			
			answer ={
				"users": users_data,
				"workers": workers_data
			}
			return jsonify(answer)
		else:
			answer = {
			'status': 401,
			'message': 'Unauthorized'
			}
			return jsonify(answer),401
	else:
		answer = {
		'status': 401,
		'message': 'Unauthorized'
		}
		return jsonify(answer),401



@app.route('/edit_user', methods=['POST']) 
def edit_user():
	contents = request.get_json(force=True)
	token = contents['token']
	if(check_token(token)):
		if(get_token_info(token)['status'] == 'meneger' and int(get_token_info(token)['access']) >0):
			identify = contents['id']
			target_id = int(db.get_user_from_id(identify)[0])
			if(int(get_token_info(token)['access'])<target_id):
				answer = {
						'status': 400,
						'message': 'invalid request'
						}

				return jsonify(answer),400
			password = contents['password']
			target = contents['target']
			password = hashlib.sha256(str(password).encode('utf-8')).hexdigest()
			if(target == 'user'):
				db.edit_user_password(identify, password)
				answer = {
						'status': 200,
						'message': 'ok'
						}

				return jsonify(answer)
				
			elif(target == 'worker'):
				db.edit_worker_password(identify, password)
				answer = {
						'status': 200,
						'message': 'ok'
						}

				return jsonify(answer)
			else:
				answer = {
						'status': 400,
						'message': 'invalid request'
						}

				return jsonify(answer),400
		else:
			answer = {
			'status': 401,
			'message': 'Unauthorized'
			}
			return jsonify(answer),401
	else:
		answer = {
		'status': 401,
		'message': 'Unauthorized'
		}
		return jsonify(answer),401


@app.route('/remove_user', methods=['POST']) #without tokken>>>>>>>>>>>>>>>>>>
def remove_user():
	contents = request.get_json(force=True)
	token = contents['token']
	if(check_token(token)):
		if(get_token_info(token)['status'] == 'meneger' and int(get_token_info(token)['access']) >0):
			identify = contents['id']
			target = contents['target']
			target_id = int(db.get_user_from_id(identify)[0])
			if(int(get_token_info(token)['access'])<=target_id):
				answer = {
					'status': 400,
					'message': 'invalid request'
					}

				return jsonify(answer),400
			if(target == 'user'):
				db.remove_user(identify)
				answer = {
						'status': 200,
						'message': 'ok'
						}

				return jsonify(answer)

			elif(target == 'worker'):
				db.remove_worker(identify)
				answer = {
						'status': 200,
						'message': 'ok'
						}

				return jsonify(answer)

			else:
				answer = {
						'status': 400,
						'message': 'invalid request'
						}

				return jsonify(answer),400
		else:
			answer = {
				'status': 400,
				'message': 'invalid request'
				}

			return jsonify(answer),400
	else:
		answer = {
			'status': 400,
			'message': 'invalid request'
			}

		return jsonify(answer),400
	
	
	

@app.route('/create_user', methods=['POST']) #without tokken>>>>>>>>>>>>>>>>>>
def create_user():
	contents = request.get_json(force=True)
	token = contents['token']
	if(check_token(token)):
		if(get_token_info(token)['status'] == 'meneger' and int(get_token_info(token)['access']) >0):
			login = contents['login']
			password = contents['password']
			target = contents['target']
			password = hashlib.sha256(str(password).encode('utf-8')).hexdigest()

			if(target == 'user'):
				status = contents['status']
				db.new_user(login, password, status)
				answer = {
						'status': 200,
						'message': 'ok'
						}

				return jsonify(answer)

			elif(target == 'worker'):
				hand = contents['hand']
				db.new_worker(login, password, hand)
				answer = {
						'status': 200,
						'message': 'ok'
						}

				return jsonify(answer)
			
			else:
				answer = {
						'status': 400,
						'message': 'invalid request'
						}

				return jsonify(answer),400
		else:
			answer = {
				'status': 400,
				'message': 'invalid request'
				}

			return jsonify(answer),400
	else:
		answer = {
			'status': 400,
			'message': 'invalid request'
			}

		return jsonify(answer),400



@app.route('/', methods=['get'])
def index():
	
	return make_response(render_template('index.html'))





if __name__ == '__main__':
	http_server = WSGIServer((host, 5500), app)
	http_server.serve_forever()
