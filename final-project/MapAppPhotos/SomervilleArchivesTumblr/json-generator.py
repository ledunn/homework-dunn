#!/usr/bin/python
import os

# open directory

print '{ "photos": [' 


for file in os.listdir('.'):
        #subfolder = assignment03[person]
        print '''
{
      "filename": "%s",
      "date": "",
      "street": "",
      "city": "",
      "state": "",
      "latitude": "",
      "longitude": ""
},
''' % (file)

print '] }'
