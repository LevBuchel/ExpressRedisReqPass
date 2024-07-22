# Node.js Express Inner Request

This project contains two services, `primary` and `secondary`, both implemented using Node.js with TypeScript. The `primary` service makes an HTTP request to the `secondary` service using Axios and returns a formatted response.

**Note: Edit the .env in each folder to replace the localhost hostname.**

For quick run, from the root folder use this command: ```docker-compose up --build```

## Routes

### Primary Service
- **GET /api/request**
  - Makes a request to the secondary service and returns the response in the format: `The inner context is: ${inner}`.

### Secondary Service
- **GET /api/request**
  - Returns the string `inner context`.

## Running Services Individually

### Primary Service

1. Navigate to the `primary` directory:

    ```sh
    cd primary
    ```

2. Build the Docker image:

    ```sh
    docker build -t primary-service .
    ```

3. Run the Docker container:

    ```sh
    docker run -p 3000:3000 -e SECONDARY_HOST=http://localhost:3001 primary-service
    ```

### Secondary Service

1. Navigate to the `secondary` directory:

    ```sh
    cd secondary
    ```

2. Build the Docker image:

    ```sh
    docker build -t secondary-service .
    ```

3. Run the Docker container:

    ```sh
    docker run -p 3001:3001 secondary-service
    ```

## Pushing Images to a Docker Registry

1. Tag the images with your registry name:

    ```sh
    docker tag primary-service your-registry/primary-service
    docker tag secondary-service your-registry/secondary-service
    ```

2. Log in to your Docker registry:

    ```sh
    docker login your-registry
    ```

3. Push the images to the registry:

    ```sh
    docker push your-registry/primary-service
    docker push your-registry/secondary-service
    ```

Replace `your-registry` with the URL of your Docker registry.

## Environment Variables

- `SECONDARY_HOST`: The host URL of the secondary service. Default is `http://localhost:3001`.

## Building the Project

To build the TypeScript project, run the following commands in both `primary` and `secondary` directories:

```sh
npm run build
```
