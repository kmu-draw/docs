# DRAW Documentation

DRAW project documentation website created using [Nextra](https://nextra.site/).

## Deploy Guide

This project can be deployed with Docker & docker-compose.

### 1. First, Edit the [docker-compose.yml](./docker-compose.yml)

```yml
services:
  draw-docs:
    container_name: draw-docs
    build:
      dockerfile: Dockerfile
    restart: always
    ports:
      # (Optional) Change here if you want to change the port number
      # DO NOT CHANGE THE LAST PORT NUMBER because it is used inside of docker container
      # Example: 8080:3000
      - 3000:3000
    # (Required) Change here according to your docker network configuration
    # This lines can be removed if you are not using static ip
    networks:
      default:
        ipv4_address: 172.22.0.6

# (Required) Change here according to your docker network configuration
networks:
  default:
    name: nginx_network
    external: true
```

### 2. Build and Run docker container

```bash
docker-compose up -d --build
```

## Local Development Setup Guide

### Prerequisites

- [NodeJS](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/installation)

#### 1. Clone this repository

```bash
git clone https://github.com/kmu-draw/docs.git
cd docs
```

#### 2. Install dependencies using `pnpm`

```bash
pnpm install
```

#### 3. Start development website by running this command

```bash
pnpm start:dev
```

#### 4. Check out the docs website in your browser!

- Default location of development server: http://localhost:20232
  
  
#### 5. Edit markdown using your own editor in the `pages` directory

## Authors

- Jaewook Ahn
- Seungjin Han

## License

This project is licensed under the [MIT License](./LICENSE).