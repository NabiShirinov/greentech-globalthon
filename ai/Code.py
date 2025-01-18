import google.generativeai as genai
import os
from IPython.display import Markdown
import PIL.Image

# import subprocess
# import sys

# def install(package):
#     subprocess.check_call([sys.executable, "-m", "pip", "install", package])

gemini_api_key = 'AIzaSyAoBhqvtHNkGy98SHEkx3tjy0fba5hWu7s'
genai.configure(api_key = gemini_api_key)

def get_movie_name(img_path):
    img = PIL.Image.open(img_path)
    model = genai.GenerativeModel('gemini-pro-vision')
    response = model.generate_content(["From which movie/cartoon this image is taken? Dont include description, explanation or start of sentence. Just give movie/cartoon/series name, without description. Your response should include only the name.", img])
    return response.text

print(get_movie_name("C:\\Temp\\Movie_Snapchat\\movie.jpg"))
# print(get_movie_name('movie2.jpg'))
# print(get_movie_name('movie3.jpg'))
# print(get_movie_name('movie4.jpg'))
# print(get_movie_name('movie5.jpg'))
# print(get_movie_name('movie6.jpg'))


