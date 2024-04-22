import datetime
from flask import Flask, render_template, redirect, url_for, abort, request
from flask_sqlalchemy import SQLAlchemy
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app) 

class Pokoj(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    is_reserved = db.Column(db.Boolean, default=False)
    dzien_od = db.Column(db.Integer)
    dzien_do = db.Column(db.Integer)
    miesiac_od = db.Column(db.Integer)
    miesiac_do = db.Column(db.Integer)
    rok = db.Column(db.Integer)


@app.errorhandler(404)
def page_not_found(error):
    return render_template('404.html')

@app.route("/")
def index():
    pokoje = Pokoj.query.all()
    return render_template('index.html', pokoje=pokoje)


#     DZIALA:  API
@app.route("/dp/<pokoj>")
def dodaj_pokoj(pokoj):
    nowy_pokoj = Pokoj(id=pokoj, is_reserved=False, dzien_od=datetime.datetime.now().day, dzien_do=datetime.datetime.now().day+1, miesiac_od=datetime.datetime.now().month, miesiac_do=datetime.datetime.now().month, rok=datetime.datetime.now().year)
    db.session.add(nowy_pokoj)
    db.session.commit()
    return redirect(url_for('index'))

@app.route("/up/<pokoj_id>")
def deletePokoj(pokoj_id):
    pokoj = Pokoj.query.get(pokoj_id)
    if pokoj:
        db.session.delete(pokoj)
        db.session.commit()
    return redirect(url_for('index'))



#      DZIALA:  TESTS

@app.route('/test')
def test():
    return 'test'

@app.route("/test/grid")
def grid():
     return render_template('test/grid_index.html')

@app.route("/test/js")
def js():
     return render_template('test/js.html')

@app.route("/test/nabvar")
def navbar():
     return render_template('test/navbar.html')


#       DZIALA: CONTROLLER


@app.route("/c/addRoom")
def addRoom():
    return render_template('controller/addRoom.html')

@app.route("/c/editList")
def editList():
    return render_template('controller/editList.html')


#        FIXME: API

@app.route("/api/ad/<id>")
def apiad(id):
    print("niger" + id)

if __name__ == '__main__':
    app.run(host='192.168.253.193', port=5000, debug=True)
