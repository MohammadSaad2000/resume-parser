from flask import Flask, request, jsonify
from pyresparser import ResumeParser
import os

UPLOAD_FOLDER = './server'

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route('/upload', methods=['POST'])
def upload():
    file = request.files.get("file")

    temp_file_path = os.path.join(
        app.config['UPLOAD_FOLDER'], "TEMP_RESUME.pdf")
    if file:
        file.save(temp_file_path)
    else:
        return 'No file provided'

    data = ResumeParser(temp_file_path).get_extracted_data()
    os.remove(temp_file_path)

    response = jsonify(data)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
