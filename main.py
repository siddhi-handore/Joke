from flask import Flask, render_template, render_template_string
import requests
app = Flask(__name__)
url = "https://api.api-ninjas.com/v1/jokes"
API_Key = "SqjOWg2n9i3NgHJaV8f/hw==p4b6n0G2MdhapMVB"
def get():
    response = requests.get(url, headers={'X-Api-Key':API_Key})
    jokes = response.json()
    joke = jokes[0]['joke']
    return joke
@app.route('/')
def joke_app():
    joke = get()
    return render_template('index.html', joke=joke)
@app.route('/new')
def new_joke():
    joke = get()
    return render_template_string('<p>{{ joke }}</p>', joke=joke)

if __name__ == '__main__':
    app.run(debug=True)