## Overview

A simple user management system build using React and Redux.

The application provides following functions :
 * List users profiles
 * Create user profiles
 * Edit user profiles
 * Delete user profiles

 **Demo: http://riverview.akeelameen.com/**

## Quick start

1. Clone this repo using `git clone https://github.com/akeel26/react-user-management.git`
2. Move to the appropriate directory: `cd react-user-management`.<br />
3. Run `npm install` in order to install.<br />
4. `npm run start` will start the development server running on `http://localhost:3000`.

## Building

```Shell
npm run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the build folder

## Production

```Shell
npm run start:production
```

 * Runs tests (see `npm test`)
 * Builds your app (see `npm run build`)
 * Starts the production server (see `npm run start:prod`)

The app is built for optimal performance: assets are minified and served gzipped.

## Backend

Firebase is used as the backend. Firebase setting can be found in `app/database/index.js`

## License

This project is licensed under the MIT license, Copyright (c) 2017 Maximilian Stoiber. For more information see `LICENSE.md`.
