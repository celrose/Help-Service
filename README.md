# Help Service
## CMSC 126 - Web Engineering Project
### AY: 2017-2018 2nd Semester

Current feature:
Integrated the Firebase database to the web app.
Search bar is functional but not accurate.
Server is up.

To run the project make sure to have [node.js] (https://nodejs.org/en/download/) installed on your device. To check if you have node installed, open CMD and type:
```
node -v
```
Make sure to also have [express JS] (https://expressjs.com/en/starter/installing.html) installed:
```
npm install express --save
```
Go the the project directory and type:
```
node index.js
```
Open the browser to:
http://localhost:3000

On the search bar:
  Type in any string
  You can press 'Enter' or click on the 'Search' button.
  If the search bar is empty, it won't work.

  Once you have entered a search word/string,
  The 'Results' page will appear.

Refresh the website to display the list of food places.
  This is because we have not implemented the Javascript Promise yet.


Some features to add/finish:
  - Display relevant list based on the keywords used
	  -use RegEx to check if search word is in any categories in our database
    (something like String.contains in Java but for Firebase, they use regex)
  - Convert other HTML files to HBS
  - Implement the Javascript Promise
