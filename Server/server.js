const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var cors = require("cors");
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
const { request, response } = require("express");

const userDataBase =  [
  {
     "id": "1",
     "title": "An Introduction to C & GUI Programming, 2nd Edition",
     "subtitle": "",
     "price": "$12.94",
     "rating": "4.5",
     "image": "https://itbook.store/img/books/9781912047451.png",
     "category": "Programming",
     "author": "John Smith"
  },
  {
     "id": "2",
     "title": "Snowflake: The Definitive Guide",
     "subtitle": "Architecting, Designing, and Deploying on the Snowflake Data Cloud",
     "price": "$58.90",
     "rating": "4.7",
     "image": "https://itbook.store/img/books/9781098103828.png",
     "category": "Data Engineering",
     "author": "Jane Doe"
  },
  {
     "id": "3",
     "title": "Python for Data Analysis, 3rd Edition",
     "subtitle": "Data Wrangling with pandas, NumPy, and Jupyter",
     "price": "$34.96",
     "rating": "4.6",
     "image": "https://itbook.store/img/books/9781098104030.png",
     "category": "Data Science",
     "author": "Wes McKinney"
  },
  {
     "id": "4",
     "title": "Reliable Machine Learning",
     "subtitle": "Applying SRE Principles to ML in Production",
     "price": "$43.99",
     "rating": "4.4",
     "image": "https://itbook.store/img/books/9781098106225.png",
     "category": "Machine Learning",
     "author": "Nathaniel Robinson"
  },
  {
     "id": "5",
     "title": "Data Visualization with Python and JavaScript, 2nd Edition",
     "subtitle": "Scrape, Clean, Explore, and Transform Your Data",
     "price": "$60.99",
     "rating": "4.8",
     "image": "https://itbook.store/img/books/9781098111878.png",
     "category": "Data Visualization",
     "author": "Kurtis Kemple"
  },
  {
     "id": "6",
     "title": "Learning Microsoft Power BI",
     "subtitle": "Transforming Data into Insights",
     "price": "$40.97",
     "rating": "4.2",
     "image": "https://itbook.store/img/books/9781098112844.png",
     "category": "Business Intelligence",
     "author": "Dan Clark"
  },
  {
     "id": "7",
     "title": "C++ Software Design",
     "subtitle": "Design Principles and Patterns for High-Quality Software",
     "price": "$48.99",
     "rating": "4.3",
     "image": "https://itbook.store/img/books/9781098113162.png",
     "category": "Software Design",
     "author": "John Doe"
  },
  {
     "id": "8",
     "title": "Terraform: Up and Running, 3rd Edition",
     "subtitle": "Writing Infrastructure as Code",
     "price": "$41.99",
     "rating": "4.7",
     "image": "https://itbook.store/img/books/9781098116743.png",
     "category": "Infrastructure as Code",
     "author": "Yevgeniy Brikman"
  },
  {
     "id": "9",
     "title": "Flutter and Dart Cookbook",
     "subtitle": "Developing Full-Stack Applications for the Cloud",
     "price": "$42.99",
     "rating": "4.6",
     "image": "https://itbook.store/img/books/9781098119515.png",
     "category": "Mobile Development",
     "author": "Mira Ghosh"
  },
  {
     "id": "10",
     "title": "Python Data Science Handbook, 2nd Edition",
     "subtitle": "Essential Tools for Working with Data",
     "price": "$56.99",
     "rating": "4.9",
     "image": "https://itbook.store/img/books/9781098121228.png",
     "category": "Data Science",
     "author": "Jake VanderPlas"
  },
  {
     "id": "11",
     "title": "Raspberry Pi Cookbook, 4th Edition",
     "subtitle": "Software and Hardware Problems and Solutions",
     "price": "$14.99",
     "rating": "4.1",
     "image": "https://itbook.store/img/books/9781098130923.png",
     "category": "Hardware",
     "author": "Simon Monk"
  },
  {
     "id": "12",
     "title": "Azure Maps Using Blazor Succinctly",
     "subtitle": "",
     "price": "$0.00",
     "rating": "3.8",
     "image": "https://itbook.store/img/books/9781642002263.png",
     "category": "Web Development",
     "author": "Robert C. Martin"
  },
  {
     "id": "13",
     "title": "Full Stack Quarkus and React",
     "subtitle": "Hands-on full stack web development with Java, React, and Kubernetes",
     "price": "$39.99",
     "rating": "4.6",
     "image": "https://itbook.store/img/books/9781800562738.png",
     "category": "Full Stack Development",
     "author": "Alex Soto"
  },
  {
     "id": "14",
     "title": "Mathematics for Game Programming and Computer Graphics",
     "subtitle": "Explore the essential mathematics for creating, rendering, and manipulating 3D virtual environments",
     "price": "$49.99",
     "rating": "4.5",
     "image": "https://itbook.store/img/books/9781801077330.png",
     "category": "Game Development",
     "author": "Fletcher Dunn"
  },
  {
     "id": "15",
     "title": "Architecting and Building High-Speed SoCs",
     "subtitle": "Design, develop, and debug complex FPGA-based systems-on-chip",
     "price": "$35.99",
     "rating": "4.3",
     "image": "https://itbook.store/img/books/9781801810999.png",
     "category": "Embedded Systems",
     "author": "John F. Wakerly"
  },
  {
     "id": "16",
     "title": "Web Development with Julia and Genie",
     "subtitle": "A hands-on guide to high-performance server-side web development with the Julia programming language",
     "price": "$39.99",
     "rating": "4.2",
     "image": "https://itbook.store/img/books/9781801811132.png",
     "category": "Web Development",
     "author": "Chris Pappas"
  },
  {
     "id": "17",
     "title": "Java Memory Management",
     "subtitle": "A comprehensive guide to garbage collection and JVM tuning",
     "price": "$34.99",
     "rating": "4.5",
     "image": "https://itbook.store/img/books/9781801812856.png",
     "category": "Java",
     "author": "Charlie Hunt"
  },
  {
     "id": "18",
     "title": "Test-Driven Development with C++",
     "subtitle": "A simple guide to writing bug-free Agile code",
     "price": "$44.99",
     "rating": "4.0",
     "image": "https://itbook.store/img/books/9781803242002.png",
     "category": "Software Engineering",
     "author": "Jared Richard"
  },
  {
     "id": "19",
     "title": "Software Test Design",
     "subtitle": "Write comprehensive test plans to uncover critical bugs in web, desktop, and mobile apps",
     "price": "$44.99",
     "rating": "4.3",
     "image": "https://itbook.store/img/books/9781804612569.png",
     "category": "Software Testing",
     "author": "Erik van Veenendaal"
  },
  {
     "id": "20",
     "title": "Microservices with Go",
     "subtitle": "Building scalable and reliable microservices with Go",
     "price": "$29.99",
     "rating": "4.4",
     "image": "https://itbook.store/img/books/9781804617007.png",
     "category": "Microservices",
     "author": "Matthew Boersma"
  }
]

app.get("/get-data", (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "Successful receipt of the date",
    data: userDataBase,
  });
});

// app.get("/search-data", (request, response) => {
//    const { query } = request.query; // Extract the search query from the URL
//    if (!query) {
//      return response.status(400).send({
//        success: "Xeta",
//        message: "Axtarış üçün sorğu təmin edilməyib",
//      });
//    }
 
//    const results = userDataBase.filter((item) => {
//      // Perform a case-insensitive search on title, author, and category
//      return (
//        item.title.toLowerCase().includes(query.toLowerCase()) ||
//        item.author.toLowerCase().includes(query.toLowerCase()) ||
//        item.category.toLowerCase().includes(query.toLowerCase())
//      );
//    });
 
//    if (results.length === 0) {
//      return response.status(404).send({
//        success: "Xeta",
//        message: "Axtarış nəticəsi tapılmadı",
//      });
//    }
 
//    return response.status(200).send({
//      success: "OK",
//      message: "Successful search",
//      data: results,
//    });
//  });
 

app.post("/login", (request, response) => {
  userDataBase.push(request.body);
  console.log(
    "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
    request.body.username
  );
  if(request.body.username === "rs_alisahib" && request.body.password === "19971997"){
    response.status(201).send({
      success: "OK",
      message: "Successful date creation",
      data:{
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFsaXNhaGliIFJhc3Vsb3YiLCJpYXQiOjE1MTYyMzkwMjJ9.1YobyeGlBiYm-FIVfEEzDeBNekZ20lrQM9PxEw39IWA"
      }
    });
  }else{
    response.status(401).send({
      success: "Xeta",
      message: "Istifadeci yoxdur",
    });
  }
 
});


app.post("/create-data", (request, response) => {
  userDataBase.push(request.body);
  console.log(
    "🚀 ~ file: server.js ~ line 21 ~ app.post ~ request.body",
    request.body
  );
  response.status(201).send({
    success: "OK",
    message: "Successful date creation",
  });
});

app.put("/update-data:id", (request, response) => {
  console.log("🚀 ~ file: server.js ~ line 32 ~ app.put ~ request", request);
  const id = request.params.id;
  let userItem = userDataBase.findIndex((user) => user.id === id);
  userDataBase[userItem] = request.body;
  response.status(201).send({
    success: "OK",
    message: "Successful date update",
  });
});



app.get("/get-data/:id", (request, response) => {
   const id = request.params.id;
   let result = userDataBase.filter((item)=>{
      if (typeof item.title !== "undefined"){
         if(item.id == id){
            // console.log(item);
            return item;
         }
      }
   });
   console.log(result);

   userDataBase[result] = request.body;
   response.status(201).send({
     success: "OK",
     message: "Successful date update",
     data: result[0],
   });
 });
app.delete("/delete-data/:id", (request, response) => {
  const id = request.params.id;
  console.log("🚀 ~ file: server.js ~ line 44 ~ app.delete ~ id", id);
  let userItem = userDataBase.findIndex((user) => user.id === id);
  userDataBase.splice(userItem, 1);
//   userDataBase.shift()
  response.status(201).send({
    success: "OK",
    message: "Successful date update",
   //  data:userDataBase,
  });
});
app.delete('/items/:id', (request, response) => {
   const itemId = parseInt(request.params.id);
   let itemIndex = userDataBase.findIndex((user) => user.id === itemId);
   if (itemIndex !== -1) {
     userDataBase.splice(itemIndex, 1);
     response.status(200).json({ message: 'Item deleted' });
   } else {
     response.status(404).json({ message: 'Item not found' });
   }
 });

// const PORT = 3000;
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Start server on  http://localhost:${PORT} !`);
});
