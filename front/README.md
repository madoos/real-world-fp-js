# Front

React app created with functional approach.

## Run

App run on port 3000

```bash
npm star
```

## Flow

bottom-up:

- Show movie
- Show movie or spinner
- Fetch data for movie `omd api`
- Show movie list
- If movie list is empty show NotFound
- Show movie list or spinner
- Fetch data for movie list
- Get year

Top down:

- Get year
- Fetch data for movie list
- Show movie list or spinner
- If movie list is empty show NotFound
- Show movie list
- Fetch data for movie `omd api`
- Show movie or spinner
- Show movie

## Data

Movie list for year:

```js
[
  {title: 'Zama'},
  {title: 'You Were Never Really Here'},
  {title: 'Annihilation'},
  {title: 'Mandy'},
  {title: 'The Mule'},
  {title: 'I Am Not a Witch'},
  {title: 'Shoplifters'},
  {title: 'Eighth Grade'},
];
```

Movie data:

```js
{
    title: "Guardians of the Galaxy Vol. 2",
    year: "2017",
    poster: "https://m.media-amazon.com/images/M/TU3NDA2MTI@._V1_SX300.jpg",
    votes: 345
}

```

## HOCs

- branch: `(Object -> Boolean) -> Component -> Component -> Component`
- fetch: `(Object -> Url) -> (Object -> Object) -> Component -> Component`
- toList: `Object -> Component -> Component`
- withHandlers: `Object -> Component -> Component`
- withState: `String -> String -> a -> Component`
- fromStream: `((Stream, Object) -> Stream) -> Component -> Component`
