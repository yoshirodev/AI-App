import nltk
nltk.download('punkt')
from nltk.tokenize import word_tokenize
import random

# Define a list of responses to common greetings
greeting_responses = ['Hello!', 'Hi there!', 'Hey!', 'Nice to meet you!']

# Define a function to generate responses to user queries
def generate_response(query):
    # Tokenize the user's query
    query_tokens = word_tokenize(query)
    
    # Define a list of keywords to check for in the user's query
    greeting_keywords = ['hello', 'hi', 'hey']
    
    # Check if the user's query contains any greeting keywords
    if any(keyword in query_tokens for keyword in greeting_keywords):
        # If so, return a random greeting response
        return random.choice(greeting_responses)
    else:
        # Otherwise, return a default response
        return "I'm sorry, I didn't understand your question."

# Example usage:
print(generate_response("Hi there!"))
# Output: "Hello!"

print(generate_response("What's the weather like today?"))
# Output: "I'm sorry, I didn't understand your question."
# Added  random
