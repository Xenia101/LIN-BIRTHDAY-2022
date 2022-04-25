from flask import Flask, request, render_template, redirect, url_for
app = Flask(__name__, static_folder='./static/')

@app.route('/', methods=['GET'])
def main():
    return render_template('main.html')

@app.route('/<int:page>', methods=['GET'])
def story(page):
    return render_template(f'page{page}.html')

if __name__ == '__main__':
    app.run(host='172.31.46.197', debug=True, port=80)