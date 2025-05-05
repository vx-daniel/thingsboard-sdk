# VX Olympus TypeScript SDK

A TypeScript SDK for interacting with the VX Olympus REST API. This SDK provides type-safe access to all API endpoints with built-in authentication handling and request/response validation using Zod.

## Features

- 🔒 Built-in authentication handling (token-based and username/password)
- 🔄 Automatic token refresh
- ✨ Type-safe API methods
- 📝 Request/response validation using Zod schemas
- 📚 Comprehensive TypeScript definitions
- 🚀 Modern ES6+ syntax

## Installation

```bash
npm install thingsboard-sdk
```

## Quick Start

### Using with a Token

```typescript
import VXOlympusClient from 'thingsboard-sdk';

const client = new VXOlympusClient('http://your-api-url', 'your-token');

// Make API calls
const response = await client.someEndpoint({
  // Type-safe parameters
});
```

### Using with Username/Password

```typescript
import VXOlympusClient from 'thingsboard-sdk';

const client = new VXOlympusClient('http://your-api-url');

// Login
await client.login('username', 'password');

// Make API calls
const response = await client.someEndpoint({
  // Type-safe parameters
});

// Check authentication status
if (client.isAuthenticated()) {
  // Do something
}

// Logout when done
client.logout();
```

## API Documentation

For detailed API documentation, see the [generated documentation](./docs/index.html).

## Development

1. Clone the repository:
```bash
git clone https://github.com/vx-daniel/thingsboard-sdk.git
cd thingsboard-sdk
```

2. Install dependencies:
```bash
npm install
```

3. Generate the SDK from the OpenAPI spec:
```bash
npm run generate
```

4. Build the SDK:
```bash
npm run build
```

5. Generate documentation:
```bash
npm run docs
```

## License

MIT
