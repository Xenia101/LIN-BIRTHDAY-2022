from flask import Flask, request, render_template, redirect, url_for
app = Flask(__name__, static_folder='./static/')

@app.route('/', methods=['GET'])
def main():
    return render_template('main.html')

@app.route('/intro', methods=['GET'])
def intro():
    return render_template('intro.html')

@app.route('/ending', methods=['GET'])
def ending():
    return render_template('ending.html')

@app.route('/<int:page>', methods=['GET'])
def story(page):
    return render_template(f'./pages/page{page}.html')

if __name__ == '__main__':
    app.run(host='158.247.236.137', debug=True, port=520)

