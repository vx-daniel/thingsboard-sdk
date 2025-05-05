# ThingsBoard TypeScript SDK

A strongly-typed TypeScript SDK for interacting with the ThingsBoard REST API.

## Features

- 🔒 Type-safe API calls with TypeScript
- 🔄 Automatic request/response serialization
- ✨ Modern Fetch API for making requests
- 📦 Modular client structure based on API domains
- 🔍 Zod schema validation for responses

## Installation

```bash
npm install thingsboard-sdk
```

## Usage

The SDK is organized into domain-specific clients, each handling a specific area of the ThingsBoard API. Here's how to use them:

```typescript
import { 
  UserControllerClient, 
  DeviceControllerClient,
  DashboardControllerClient 
} from 'thingsboard-sdk';

// Initialize clients for different API domains
const userClient = new UserControllerClient('http://localhost:8080');
const deviceClient = new DeviceControllerClient('http://localhost:8080');
const dashboardClient = new DashboardControllerClient('http://localhost:8080');

// Set authentication token (after login)
userClient.setAuthToken('YOUR_JWT_TOKEN');
deviceClient.setAuthToken('YOUR_JWT_TOKEN');
dashboardClient.setAuthToken('YOUR_JWT_TOKEN');

// Example: Login
const loginResult = await userClient.loginPost({
  username: 'admin@thingsboard.org',
  password: 'admin'
});

// Example: Get devices
const devices = await deviceClient.getTenantDevicesUsingGET({
  pageSize: 10,
  page: 0
});

// Example: Get dashboards
const dashboards = await dashboardClient.getTenantDashboardsUsingGET({
  pageSize: 10,
  page: 0
});
```

## Available Clients

The SDK provides the following client classes, each corresponding to a specific API domain:

- `AdminControllerClient` - System administration operations
- `AlarmControllerClient` - Alarm management
- `AssetControllerClient` - Asset management
- `AuthControllerClient` - Authentication and authorization
- `CustomerControllerClient` - Customer management
- `DashboardControllerClient` - Dashboard operations
- `DeviceControllerClient` - Device management
- `EntityGroupControllerClient` - Entity group operations
- `TenantControllerClient` - Tenant management
- `UserControllerClient` - User management
- And many more...

Each client extends the `BaseVXOlympusClient` class and inherits common functionality like:
- Authentication token management
- HTTP request handling
- Error handling
- Response validation

## Error Handling

The SDK uses standard error handling mechanisms:

```typescript
try {
  const result = await userClient.loginPost({
    username: 'admin@thingsboard.org',
    password: 'wrong-password'
  });
} catch (error) {
  if (error instanceof Error) {
    console.error('API Error:', error.message);
  }
}
```

## Type Safety

All request and response types are fully typed:

```typescript
// TypeScript will show all available properties and their types
const deviceInfo = await deviceClient.getDeviceInfoByIdUsingGET({
  deviceId: 'your-device-id'
});

// deviceInfo will be fully typed with all properties
console.log(deviceInfo.name);
console.log(deviceInfo.type);
```

## Contributing

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Build the SDK: `npm run build`
5. Run tests: `npm test`

## License

MIT
