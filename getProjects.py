from todoist.api import TodoistAPI
from dotenv import load_dotenv
import os
load_dotenv();
API_KEY=os.getenv("API_KEY");
api = TodoistAPI(API_KEY);
api.sync();
print(api.state['projects']);

