# integrify-student-gallery
This project is a MERN stack application .The main function of the  project is to display the students of integrify, editing the student details , adding new student and deleting a student entry .

## Project Modules

It has two modules. They are client and server .

### client
It is a front end layer developed using react redux .It connects the backend api .

### server
It's a backend rest api layer.It receives and process the front end layer clent requests.Its developed using node js it connects mongoDB Database.

### Prerequistes
react redux, node js, mongoDb

### How to run in development mode
fork the project
run npm install
create integrify database in mlab server.


rest specification :

Create entry 

```
http://localhost:5000/api/students

Request body

{
"skills": [
"HTML",
"CSS",
"Bootstrap",
"JavaScript",
"JQuery",
"React"
],
"_id": "5b67fe969126bc59ac8bf934",
"firstName": "Aditya",
"lastName": "Gyawali",
"Title": "Trainee",
"nationality": "Nepalese",
"src": "https://res.cloudinary.com/dletkhvs9/image/upload/v1533538695/integrify_students/Aditya.jpg",
"alt": "Aditya",
"whySofterDeveloper": "Because you can work on any part of the world with the knowledge you have no language barrier n stuff",
"longTermVision": "working on projects from home",
"motivatesMe": "€",
"favoriteQuote": "It will take time, but it will happen",
"joinedOn": "22-1-2017"
}
response :{message: "Places Created"}
```

Read entry 

```
http://localhost:5000/api/students
response :
{
"skills": [
"HTML",
"CSS",
"Bootstrap",
"JavaScript",
"JQuery",
"React"
],
"_id": "5b67fe969126bc59ac8bf934",
"firstName": "Aditya",
"lastName": "Gyawali",
"Title": "Trainee",
"nationality": "Nepalese",
"src": "https://res.cloudinary.com/dletkhvs9/image/upload/v1533538695/integrify_students/Aditya.jpg",
"alt": "Aditya",
"whySofterDeveloper": "Because you can work on any part of the world with the knowledge you have no language barrier n stuff",
"longTermVision": "working on projects from home",
"motivatesMe": "€",
"favoriteQuote": "It will take time, but it will happen",
"joinedOn": "22-1-2017"
}
```

Delete Entry
```
http://localhost:5000/api/students/:id
Request body

{
"_id": "5b67fe969126bc59ac8bf939"
}

response :{message: "Place Deleted"}
```

Build with:
create-react-app

Author
Packia Varadhan
