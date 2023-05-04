# [Mini Twitter](https://yesheng-liu-yuxuan-lin-project3.onrender.com/)

This is a social media application similar to Twitter that allows user to publish posts in image or text format. Users can also access personal pages.

Some basic functions:

1. Log in/register accounts
2. Password encryption
3. See all status updates from all users when logged out
4. Personal page showing user information and their posts
5. Search for users
6. Update/delete post

This app is also optimized for mobile view

## Implementation

**React** - build frontend application

**React Hooks** - controls state of variables across web pages

**React Router** - navigate across web pages

**Express** - build backend and define routes to handle HTTP requests and responses

**RESTful API** - perform operations for client interaction with server

**MongoDB** - schema for data storage

**Mongoose** - define data model and simplify data connection

**render** - provide easy deployment for React app

## Guide of Use

First, create your `config.env` file in the root folder

```
./config.env

MONGO_URL=<YOUR_MONGO_URL>
JWT_SECRET=<YOUR_JWT_SECRET>
PORT=<YOUR_PORT>
```

Install required node modules, `npm run dev` at root level will start both frontend and backend services

```bash
> npm install
> npm run dev
```

## Deployment

This project is deployed on render.com with following settings:

Build Command: `npm install && npm run build`

Start Command: `npm run prod`

### Environment

```
NODE_VERSION = 19.7.0
```

## Collaborators

Yesheng Liu, Yuxuan Lin
