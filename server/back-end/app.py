from flask import Flask,session,redirect,request
from flask_pymongo import PyMongo

app = Flask(__name__)
# with open('/Hacksprint_PS2_Bit-by-Bit/server/imp.json') as important:
#     imp = json.load(important)['params']
app.config['SECRET_KEY'] = 'f16bbd80d59404'
app.config["MONGO_URI"] = "mongodb+srv://shreyas29:shreyas29@cluster0.zhrhmoj.mongodb.net/?retryWrites=true&w=majority"
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
# app.config.update(
#     MAIL_SERVER='smtp.gmail.com',
#     MAIL_PORT='465',
#     MAIL_USE_SSL=True,
#     MAIL_USERNAME=imp['account'],
#     MAIL_PASSWORD=imp['password']
# )
mongodb_client = PyMongo(app)
db = mongodb_client.db


@app.route("/hello")
def hello_world():
  return {"abcd" : "1234", "programming" : "python"}
 

@app.route('/abcd')
def landing():
  return{"Hello":"This works"}

@app.route('/books',methods=['GET','POST'])
def books():
  store=[]
  for post in db.onlinelibrary.find({}):
    store.append(post)
  return store[0:100]



if __name__ == '__main__':
  app.run(port=8000,debug=True)