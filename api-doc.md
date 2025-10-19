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

# create new category
Path:
POST
- categories/
request
{
  body: {
    name: String,
    parent: ObjectId | null
  }
}
Response 201:
{
  "message": "קטגוריה נוספה בהצלחה",
  "data": { "_id": "...", "name": "...", "parent": null }
}

# get all categories
Path:
GET
- categories/
Response 200:
{
  "data": [
    { "_id": "...", "name": "זרי אירוסין", "parent": null },
    { "_id": "...", "name": "זרי אירוסין חיים", "parent": "..." }
  ]
}

# get main categories (parent = null)
Path:
GET
- categories/main
Response 200:
{
  "data": [
    { "_id": "...", "name": "זרי כלה" },
    { "_id": "...", "name": "עיצוב אירועים" }
  ]
}

# get sub categories by parentId
Path:
GET
- categories/sub/:parentId
Response 200:
{
  "data": [
    { "_id": "...", "name": "זרי כלה ליד", "parent": "..." },
    { "_id": "...", "name": "זרי כלה חישוק", "parent": "..." }
  ]
}

# update category
Path:
PUT
- categories/:id
request
{
  body: { name, parent }
}
Response 200:
{
  "message": "קטגוריה עודכנה בהצלחה",
  "data": { "_id": "...", "name": "שם חדש" }
}

# delete category
Path:
DELETE
- categories/:id
Response 200:
{
  "message": "קטגוריה נמחקה בהצלחה"
}
Response 400:
{
  "message": "לא ניתן למחוק קטגוריה זו, קיימים מוצרים המשויכים אליה.",
  "count": 4
}