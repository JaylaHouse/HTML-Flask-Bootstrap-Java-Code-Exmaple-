from flask import Flask, render_template, request, redirect
from flask_bootstrap5 import Bootstrap
import PyPDF2

app = Flask(__name__)


@app.route('/')
def home_page():  # put application's code here
    return render_template("data-json.html")


@app.route('/upload')
def upload():
    return render_template("upload.html")

@app.route('/signUp')
def signUp():
    return render_template("signUp.html")

@app.route('/movies')
def movies_page():
    return render_template("Movies_Page.html")

@app.route('/dataPage')
def dataPage():
    return render_template("dataPage.html")

@app.route('/UserActiity')
def userActivity():
    return render_template("UserActivity.html")


if __name__ == '__main__':
    app.run()
