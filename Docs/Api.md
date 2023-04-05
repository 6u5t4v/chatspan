# Create User

## Create User Request

```js
POST / users;
```

```json
{
  "name": "Arne",
  "avatar": "https://res.cloudinary.com/drav3lzht/image/upload/v1679311203/cld-sample-3.jpg",
  "email": "arne@email.com"
}
```

## Create User Response

```json
201 Created
```

```json
{
  "_id": "642dbddd80c8bb4a14fc14a4",
  "name": "Arne",
  "avatar": "https://res.cloudinary.com/drav3lzht/image/upload/v1679311203/cld-sample-3.jpg",
  "email": "arne@email.com"
}
```

# Get User

## Get User Request

```js
GET /Users/{{id}}
```

## Get User Response

```json
200 Ok
```

```json
{
  "_id": "642dbddd80c8bb4a14fc14a4",
  "name": "Arne",
  "avatar": "https://res.cloudinary.com/drav3lzht/image/upload/v1679311203/cld-sample-3.jpg",
  "email": "arne@email.com"
}
```

# Update User

## Update User Request

```js
POST /users/{{id}}
```

```json
{
  "name": "Arne Bjarne",
  "avatar": "https://res.cloudinary.com/drav3lzht/image/upload/v1679311203/cld-sample-3.jpg",
  "email": "arne@email.com"
}
```

## Update User Response

```json
204 No Content
```

or

```json
201 Created
```

---

# Add Friend

## Add Friend Request

```js
POST /users/{{id}}
```

```json
{
  "_id": "642dbeb180c8bb4a14fc14aa"
}
```

## Add Friend Response

```json
200 Friend added
```

# Get Friends

## Get Friends Request

```js
GET /friends/{{id}}
```

## Get Friends Response

```json
200 Ok
```

```json
{
  "_id": "642dbddd80c8bb4a14fc14a4",
  "name": "Arne",
  "avatar": "https://res.cloudinary.com/drav3lzht/image/upload/v1679311203/cld-sample-3.jpg",
  "email": "arne@email.com"
},
{
  "_id": "642dbeb180c8bb4a14fc14aa",
  "name": "Bjarne",
  "avatar": "https://res.cloudinary.com/drav3lzht/image/upload/v1679311203/cld-sample-2.jpg",
  "email": "bjarne@email.com"
}
```

# Remove Friend

## Remove Friend Request

```js
DELETE /friends/{{id}}
```

## Remove Friend Response

```json
200 Friend removed
```

---

# Get Conversations

## Get Conversations Request

```js
GET /conversations/{{id}}
```

## Get Conversations Response

```json
200 Ok
```
*Not sure yet, this is Work In Progress*
```json
    "_id": "..."
    "name": "ArneOgBjarne",
    "icon": "https://res.cloudinary.com/drav3lzht/image/upload/v1679311203/cld-sample-4.jpg",
    "participants": [
        "642dbeb180c8bb4a14fc14aa",
        "642dbddd80c8bb4a14fc14a4",
    ],
    "owner": "642dbeb180c8bb4a14fc14aa",
    "messages": [
        {
            "content": "Hey guys hows it guy",
            "sender": "642dbeb180c8bb4a14fc14aa",
            "timestamp": "2023-04-05...",
        },
        {
            "content": "Fine, how about you",
            "sender": "642dbddd80c8bb4a14fc14a4",
            "timestamp": "2023-04-05...",
        },
        {
            "content": "I am here to lol",
            "sender": "642dbddd80c8bb4a14fc14ab",
            "timestamp": "2023-04-06..."
        }
    ]
```
or
```json
    "_id": "..."
    "name": "Our Group Chat",
    "icon": "https://res.cloudinary.com/drav3lzht/image/upload/v1679311203/cld-sample-4.jpg",
    "participants": [
        "642dbeb180c8bb4a14fc14aa",
        "642dbddd80c8bb4a14fc14a4",
        "642dbddd80c8bb4a14fc14ab"
    ],
    "owner": "642dbeb180c8bb4a14fc14aa",
    "messages": [
        {
            "content": "Hey guys hows it guy",
            "sender": "642dbeb180c8bb4a14fc14aa",
            "timestamp": "2023-04-05...",
        },
        {
            "content": "Fine, how about you",
            "sender": "642dbddd80c8bb4a14fc14a4",
            "timestamp": "2023-04-05...",
        },
        {
            "content": "I am here to lol",
            "sender": "642dbddd80c8bb4a14fc14ab",
            "timestamp": "2023-04-06..."
        }
    ]
```
# Create Conversation
User Arne creates a new conversation with Bjarne, where Arne send the first message

## Create Conversation Request

```js
POST /conversations/{{id}}
```
```js
{
    "participants": [
        "642dbeb180c8bb4a14fc14a4",
    ],
    "owner": "642dbeb180c8bb4a14fc14aa",
    "messages": [
        {
            "content": "Hey man, are you free this wednesday",
            "sender": "642dbeb180c8bb4a14fc14aa",
            "timestamp": "2023-04-05..."
        }
    ]
}
```

## Create Conversations Response
Once the conversation has been created it will be given an id, the name will be set to "Bjarne" as this is who Arne is messaging, but on Bjarne's device the conversation would be named "Arne"(not sure how yet, but thats the idea).

This conversation will also use Bjarne's profile picture as icon and add Arne as a participant.
```json
200 Ok
```
```json
    "_id": "..."
    "name": "Bjarne",
    "icon": "https://res.cloudinary.com/drav3lzht/image/upload/v1679311203/cld-sample-2.jpg",
    "participants": [
        "642dbeb180c8bb4a14fc14aa",
        "642dbddd80c8bb4a14fc14a4",
    ],
    "owner": "642dbeb180c8bb4a14fc14aa",
    "messages": [
        {
            "content": "Hey guys hows it guy",
            "sender": "642dbeb180c8bb4a14fc14aa",
            "timestamp": "2023-04-05...",
        }
    ]
```
---

_More coming soon_
