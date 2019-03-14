# Back

Run on port 3001

## Start

```bash
npm start
```

## Endpoints

### [GET] /users/:id

```javascript
// response
{
    "data": {
        "id": 1,
        "name": "Camille1",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kostaspt/128.jpg",
        "email": "Edmund51@hotmail.com",
        "level": 0
    }
}
```

### [GET] /api/movies/:year

```javascript
// response
;[
  { title: "Zama" },
  { title: "You Were Never Really Here" },
  { title: "Annihilation" },
  { title: "Mandy" },
  { title: "The Mule" },
  { title: "I Am Not a Witch" },
  { title: "Shoplifters" },
  { title: "Eighth Grade" }
]
```
