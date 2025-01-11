# KoinX Backend - Cryptocurrency Data Fetching and Analysis

This is a backend service that fetches data of three cryptocurrencies (Bitcoin, Matic, and Ethereum) from the CoinGecko API, stores it in a MongoDB database, and exposes APIs to query the latest data and perform statistical analysis.

---

## Features

1. **Background Job**: Fetches the current price, market cap, and 24-hour price change of Bitcoin, Matic, and Ethereum every 2 hours using the CoinGecko API.
2. **`/stats` API**: Provides the latest cryptocurrency data (price, market cap, and 24-hour change) based on the requested coin.
3. **`/deviation` API**: Calculates the standard deviation of the price of a cryptocurrency from the last 100 records stored in the database.
4. **Cron Job**: Periodically runs the background job every 2 hours to update the cryptocurrency data.

---

## Tech Stack

- **Node.js**: JavaScript runtime for building the backend application.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing cryptocurrency data.
- **Axios**: HTTP client for fetching data from CoinGecko API.
- **Cron Jobs**: Scheduling background tasks to fetch and update cryptocurrency data every 2 hours.
- **Mongoose**: ODM for interacting with MongoDB.
- **CoinGecko API**: Source of cryptocurrency data.

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas or local MongoDB instance
- CoinGecko API access (free)

### Setup

1. Clone this repository:

```bash
git clone https://github.com/your-username/koinx-backend.git
cd koinx-backend
```
2. install Dependencies :

``` bash
npm i
```

3.Create a .env file in the root directory and add the following variables:
```env
MONGODB_URI=Your MongoDB-URI
COINX_API_KEY=https://api.coingecko.com/api/v3 
PORT=
```

4. Start your MongoDB service (if using a local instance) or make sure MongoDB Atlas is set up properly.

5 .Run the application:

```bash
npm start
```

