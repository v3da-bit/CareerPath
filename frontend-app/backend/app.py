from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import openai
import os

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# MongoDB configuration
MONGO_URI = os.getenv('MONGO_URI', 'mongodb://localhost:27017')
client = MongoClient(MONGO_URI)
db = client['careerpath']

# OpenAI API configuration
openai.api_key = os.getenv('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')

# Routes
@app.route('/')
def home():
    return jsonify({"message": "Welcome to CareerPath Backend!"})

# Career Recommendations
@app.route('/careers/recommendations', methods=['GET'])
def get_career_recommendations():
    careers = list(db.careers.find({}, {"_id": 0}))
    return jsonify({"careers": careers})

# Trending Careers
@app.route('/careers/trending', methods=['GET'])
def get_trending_careers():
    trending_careers = ["AI Engineer", "Blockchain Developer", "Cybersecurity Analyst", "Cloud Architect"]
    return jsonify({"trendingCareers": trending_careers})

# Career Insights
@app.route('/insights', methods=['GET'])
def get_career_insights():
    articles = list(db.articles.find({}, {"_id": 0}))
    return jsonify({"articles": articles})

# Skills to Career Mapping
@app.route('/skills/mapping', methods=['POST'])
def skills_to_career_mapping():
    data = request.json
    skills = data.get('skills', [])
    response = f"Careers based on skills: {', '.join(skills)}"  # Replace with actual AI logic
    return jsonify({"message": response})

# Chatbot Response
@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    try:
        data = request.json
        user_message = data.get('message', '')

        # Generate response using OpenAI GPT
        ai_response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful career advisor chatbot."},
                {"role": "user", "content": user_message}
            ]
        )

        response_text = ai_response['choices'][0]['message']['content']
        return jsonify({"response": response_text})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run Flask app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=int(os.getenv('PORT', 5000)))
