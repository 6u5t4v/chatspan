# ChatSpan (WIP)
A messaging I am doing just for fun. It has a very specific purpose that I will not spoil quite yet

# Installation
1. Clone the repository
```git clone https://github.com/6u5t4v/chatspan.git```
2. Install the dependencies
```npm install```

# Configuration
1. Create a `.env` file and add your Cloudinary credentials

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret
```

2. Configure the MongoDB connection also in `.env`
```
MONGODB_URL: 'mongodb://your-username:your-password@your-host:your-port/your-database'
```

# Usage
1. Start the backend by navigating to the `server` directory and start the server
```
npm start
```

2. Start the frontend by navigating to the `client` directory in a new terminal and run the following command
```
npx expo start
```

# Endpoints
## `GET /api/v1/users`

# Dependencies
- expo
- axios
- cloudinary
- dotenv
- express
- mongoose
