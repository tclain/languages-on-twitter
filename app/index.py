from gevent import monkey
monkey.patch_all()

import sys
sys.path.append("..")
from flask import Flask, render_template, send_from_directory
from flask.ext.socketio import SocketIO, emit
from engine.TwitterCrawler import TwitterCrawler

#### CONFIG DATA
app = Flask(__name__, static_url_path="/static", static_folder="client/build", template_folder="client/templates")
app.debug = True
#SECRET
app.config['SECRET_KEY'] = 'lqfqfljbfqsmfknf!:fmqfmqnfdqugdskdhfkq'
socketio = SocketIO(app)
##
thread  = None

@app.route('/')
def index():
    global thread
    if thread is None:
        thread = TwitterCrawler(socket=socketio,namespace="/twitter")
        thread.start()
    return render_template('index.html')

@socketio.on('client.new.connect', namespace='/twitter')
def client_new_connect():
    print "new client"
    emit ('server.log', {'data' : 'new client'})

@socketio.on('connect', namespace='/twitter')
def test_connect():
    emit('server.log', {'data': 'Connected', 'count': 0})

@socketio.on('disconnect', namespace='/twitter')
def test_disconnect():
    print('Client disconnected')

#handling search messages from client
#@socketio.on('client.search.request', namespace='/twitter')
#def handle_search(input):
 #   thread.handleSearch(input)

if __name__ == '__main__':
    socketio.run(app, host="0.0.0.0")
