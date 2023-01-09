const { json } = require("express");
var express = require("express");

const fs = require("fs");

const app = express();


app.listen(3000, ()=> console.log("Server is up"));


//get json
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
 
app.put('/', function(req, res, next) {

    fs.readFile("product.json", function(err, data) {

        if(err){
            console.log(err);
        }

        const product = JSON.parse(data)

      
            product.splice(2,0,{"title": "New mouse","description": "Gamingmus / trådlös / Optisk.","id": 7,"price": 149 });
      
        
        fs.writeFile("product.json", JSON.stringify(product, null, 2), function(err){
            if(err){
              console.log(err);
            }  
          })
   res.send(product);
        return;
    });

}) ;
 


 
      app.post('/', (req, res, next)=>{

        fs.readFile("product.json", function(err, data) {
    
            if(err){
                console.log(err);
            }

            const product = JSON.parse(data)

            let newProduct = {"title": "adea","description": "Gamingmus / Kabelansluten / Optisk / 2000 dpi.","id": 6,"price": 149 };

            product.push(newProduct);
           
              
        fs.writeFile("product.json", JSON.stringify(product, null, 2), function(err){
            if(err){
              console.log(err);
            }  
          })

            res.send(product);
            
            return;
    
      });

      })

 



app.delete('/', function(req, res, next) {

        fs.readFile("product.json", function(err, data) {
    
            if(err){
                console.log(err);
            }
           
            const product = JSON.parse(data)
      
             const id = 2;
        
            if (id > -1) {
                product.splice(id, 1);
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

