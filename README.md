# ThingsBoard TypeScript SDK

This SDK provides TypeScript bindings for the ThingsBoard API.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Place your OpenAPI specification file as `openapi.yaml` in the root directory

3. Generate the SDK:
```bash
npm run generate
```

4. Build the SDK:
```bash
npm run build
```

## Usage

```typescript
import { ThingsBoardApi } from './dist';

// Initialize the client
const client = new ThingsBoardApi({
    basePath: 'YOUR_API_BASE_URL'
});
```
