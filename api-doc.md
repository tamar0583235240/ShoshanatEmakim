Response 200 / 201 / 400 / 404 / 500:
{
  "data": {  }, /200
  "message": "", /404/500
  "error": "" /500
}

# getAllProducts
Path:
GET
- product/

# get product by Id
Path:
GET
- product/:id (mongo-_id)

# get product by category
Path:
GET
- product/getByCategory/:category (string)

# update product
Path:
PUT
- product/update/:id
request
{
  body:{ category, name, description ... }
}
fetch('/api/recipes', {
  method: 'POST',
  body: formData
});

# add new product
Path:
POST
- product/add
request
{
  body: formData{ image , category, name, description }
}
![example sending](api-docs-image.png)

# send email
Path:
POST
- contact
request
{
  body:
  { 
    name, message, email ,phone
  }
}