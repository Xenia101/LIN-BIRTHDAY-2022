from flask import Flask, request, render_template, redirect, url_for
app = Flask(__name__, static_folder='./static/')


@app.route('/', methods=['GET'])
def page1():
    return render_template('1.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)
