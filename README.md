### Weekend Five Challenge - What is it?
#### Base
- Multiple views - angular routing
	- about
	- add pet
	- view pets
- Pet Schema
	- name (string)
	- animal type (string -> enum?)
	- age (number)
	- image - url (string - path)

#### Hard
- id pet on the DOM and delete it

#### Pro
- angular filtering
- filter alphabetically by name
- toggle on and off


#### Step
Committing after each step

##### BACK END
1. init git, gitignore, file structure, npm file structure
2. server listening
3. server returning the index.html in an index router.
	- ```GET / ``` - serves the index.html
4. what routes?
	- ```GET pets``` - returns all pets
	- ```POST pets``` - creates a new pet
6. get these routes logging in a pet router
7. mongoose model
8. require the model
9. add connection string
10. store some dummy data
11. wire up the ``` GET pets```
12. get the ```POST pets``` working and test

##### FRONT END
1. src angular and client side js
2. in one view get all animals showing and style a bit
3. add form - with drop down populated from db
4. wire up form
5. npm install and vendor angular route
6. add angular routing
7. get three views working with client side routing
8. how not to refresh
9. load enum from db


#### Technology
- MEAN ( mongo, mongoose, express, node, angular)
- body-parser
