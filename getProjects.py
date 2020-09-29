from todoist.api import TodoistAPI
api = TodoistAPI('375bc8471f9fde0664b768eacda239d5542998e3');
api.sync();
print(api.state['projects']);

