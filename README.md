# Boilerplate

## Prerequisites

| **Package** | **Version** |
| ----------- | ----------- |
| Node        | v20.16.0    |
| Pnpm        | 1.22.x      |
| Postgres    | 14.0        |
| Liquibase   | 4.17.0      |

## Development Environment Setup

### Set required Node Version

```sh
nvm install --lts
```

```sh
nvm use --lts
```

### Install dependencies

```sh
pnpm i # to install dependencies
```

### ENV Update

- Create .env from .env.example file and place required values

### DB Setup

- Create new DB Application manually.
- Update `liquibase.properties` file for DB credentials
- Run migrations for your local DB using `yarn liquibase`

### Start development server

```sh
pnpm dev # live reloading
```

```sh
pnpm start # without live reloading
```

### Create a build

```sh
pnpm build # output will be in the dist folder
```
