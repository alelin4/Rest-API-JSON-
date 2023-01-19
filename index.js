
var express = require('express');
var app = express(); 
  
const fs = require("fs");
app.use(express.json());



app.get('/', function(req, res, next) {

    fs.readFile("product.json", function(err, data) {

        if(err){
            console.log(err);
        }

        const product = JSON.parse(data)

        res.send(product);
        
        return;
    });

}) ;

app.post('/users', (req, res, next)=>{
   
    fs.readFile("product.json", function(err, data) {

        if(err){
            console.log(err);
        }


        const product = JSON.parse(data)

        let newProduct = req.body;

        product.push(newProduct);
        console.log(newProduct);

    fs.writeFile("product.json", JSON.stringify(product, null, 2), function(err){
        if(err){
          console.log(err);
        }  
      })

        res.send(product);
       
        return;

  });

  })


  
 
app.put('/users/:id', function(req, res, next) {

    fs.readFile("product.json", function(err, data) {

        if(err){
            console.log(err);
        }


        const product = JSON.parse(data)

        let id = req.params['id']
        let newProduct = req.body;

        product.splice(id,1,newProduct)
        console.log(newProduct);

    fs.writeFile("product.json", JSON.stringify(product, null, 2), function(err){
        if(err){
          console.log(err);
        }  
      })

        res.send(product);
       
        return;






/*
  fs.readFile("product.json", function(err, data) {

      if(err){
          console.log(err);
      }

      const product = JSON.parse(data)
      var id = req.params['id'];

      let newProduct = req.body;
          product.splice(id,0,newProduct);
    
      
      fs.writeFile("product.json", JSON.stringify(product, null, 2), function(err){
          if(err){
            console.log(err);
          }  
        })

          res.send(product);
          
          return;
  */
  });

}) ;




app.delete('/:id', function(req, res, next) {

      fs.readFile("product.json", function(err, data) {
  
          if(err){
              console.log(err);
          }
         
          const product = JSON.parse(data)
    
           var id = req.params['id'];
      
          if (id > -1) {
              product.splice(id,1);
            }

            fs.writeFile("product.json", JSON.stringify(product, null, 2), function(err){
              if(err){
                console.log(err);
              }  
            })
    
          res.send(product);  
      
 
      return;

          });
}) ;

  app.listen(3000, ()=> console.log("Server is up"));