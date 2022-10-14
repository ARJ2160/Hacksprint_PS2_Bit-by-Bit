from flask import Flask
app = Flask(__name__)

@app.route("/hello")
def hello_world():
  return {"abcd" : "1234", "programming" : "python"}
 
if __name__ == '__main__':
  app.run(port=8000,debug=True)