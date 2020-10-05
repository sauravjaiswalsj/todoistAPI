import pandas as pd
import xlrd
import webbrowser
data = pd.read_excel(r'/home/saurav/Documents/projects/todoist-Script/data.xlsx');
print(data['ticket'][0])
