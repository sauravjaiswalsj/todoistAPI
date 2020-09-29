from todoist.api import TodoistAPI
import os
from dotenv import load_dotenv
load_dotenv();
API=os.getenv("API_KEY");
api = TodoistAPI(API);
api.sync();
project1 = api.projects.add('Study');
api.commit();
print(project1);
