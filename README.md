KoinX Backend - Cryptocurrency Data Fetching and Analysis
This is a backend service that fetches data of three cryptocurrencies (Bitcoin, Matic, and Ethereum) from the CoinGecko API, stores it in a MongoDB database, and exposes APIs to query the latest data and perform statistical analysis.

Features
Background Job: Fetches the current price, market cap, and 24-hour price change of Bitcoin, Matic, and Ethereum every 2 hours using the CoinGecko API.
/stats API: Provides the latest cryptocurrency data (price, market cap, and 24-hour change) based on the requested coin.
/deviation API: Calculates the standard deviation of the price of a cryptocurrency from the last 100 records stored in the database.
Cron Job: Periodically runs the background job every 2 hours to update the cryptocurrency data.
Tech Stack
Node.js: JavaScript runtime for building the backend application.
Express.js: Web framework for Node.js.
MongoDB: NoSQL database for storing cryptocurrency data.
Axios: HTTP client for fetching data from CoinGecko API.
Cron Jobs: Scheduling background tasks to fetch and update cryptocurrency data every 2 hours.
Mongoose: ODM for interacting with MongoDB.
CoinGecko API: Source of cryptocurrency data.
Getting Started
Prerequisites
Node.js (v14 or higher)
MongoDB Atlas or local MongoDB instance
CoinGecko API access (free)
Setup
Clone this repository:
bash
Copy code
git clone https://github.com/your-username/koinx-backend.git
cd koinx-backend
Install the dependencies:
bash
Copy code
npm install
Create a .env file in the root directory and add the following variables:
env
Copy code
MONGODB_URI=mongodb://localhost:27017/koinx  # Your MongoDB connection string
COINX_API_KEY=https://api.coingecko.com/api/v3  # CoinGecko API URL
PORT=8088  # Port to run the server on
Start your MongoDB service (if using a local instance) or make sure MongoDB Atlas is set up properly.

Run the application:

bash
Copy code
npm start
Your application should now be running at http://localhost:8088.

API Endpoints
1. Fetch Cryptocurrency Data (/api/v1/crypto/crypto-data)
Method: GET
Description: Fetches the current data of Bitcoin, Matic, and Ethereum and stores it in the database.
Response:
json
Copy code
{
  "message": "Data fetched successfully",
  "data": [
    {
      "coin": "bitcoin",
      "price": 40000,
      "marketCap": 800000000,
      "change24h": 3.4
    },
    {
      "coin": "ethereum",
      "price": 2000,
      "marketCap": 250000000,
      "change24h": 2.5
    },
    {
      "coin": "matic-network",
      "price": 1.5,
      "marketCap": 10000000,
      "change24h": 1.0
    }
  ]
}
2. Get Cryptocurrency Stats (/api/v1/crypto/stats?coin=bitcoin)
Method: GET
Query Params: coin - Name of the cryptocurrency (bitcoin, matic-network, ethereum)
Description: Returns the latest price, market cap, and 24-hour change for the requested cryptocurrency.
Response:
json
Copy code
{
  "price": 40000,
  "marketCap": 800000000,
  "24hChange": 3.4
}
3. Get Price Deviation (/api/v1/crypto/deviation?coin=bitcoin)
Method: GET
Query Params: coin - Name of the cryptocurrency (bitcoin, matic-network, ethereum)
Description: Returns the standard deviation of the price for the last 100 records stored in the database.
Response:
json
Copy code
{
  "deviation": 4082.48
}
Cron Job
A background cron job is set to run every 2 hours to fetch the latest cryptocurrency data from CoinGecko and store it in the database. You can modify the cron schedule in the services/cronjobs.services.js file.
Deployment
You can deploy this application to platforms like Heroku, AWS, GCP, Railway, or Render.

Deployment Steps on Heroku
Install the Heroku CLI if you don't have it.
Login to Heroku via CLI:
bash
Copy code
heroku login
Create a Heroku app:
bash
Copy code
heroku create koinx-backend
Set the environment variables on Heroku:
bash
Copy code
heroku config:set MONGODB_URI=your-mongodb-uri COINX_API_KEY=https://api.coingecko.com/api/v3
Push your code to Heroku:
bash
Copy code
git push heroku master
Open your deployed app:
bash
Copy code
heroku open
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
CoinGecko API for providing the cryptocurrency data.
Express.js for building the REST API.
MongoDB for database storage.
Feel free to modify and extend this README.md to match your specific project setup or add any other necessary information related to your deployment process or app configuration.




