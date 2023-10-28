# Dexie Presentation

It is a simple project to just show how [Dexie][Dexie] works.

## Dexie

### What it is

Basically [Dexie][Dexie] is a minimalistic but very powerfull wrapper for browser [IndexedDB][IndexedDB] API.

### Why Dexie

- Usage: More than [17.000 repos][repos-using] using it

- Easy to implement: This repo is a proof of how simple it is to use, you'll need only to declare your model like in [*db.js*][db] and do your business logic with it like i did in [*actions.js*][actions]

## Dependencies

- Required
    - dexie: Gives all the functionality of the [IndexedDB][IndexedDB].
    - dexie-react-hooks: Updates query result whenever the database is updated.
- Optional
    - @emotion/react: Styling
    - @emotion/styled: Styling
    - @mui/icons-material: Icons
    - @mui/material: Components/styling with [Material UI][MUI]
    - vite: This example is build on top of [Vite][Vite]
    - @vitejs/plugin-react: This example uses [React][React], so Vite needs this plugin to work

## Testing

### Server

This project is hosted for free thanks to [Vercel][Vercel] <3.

So you can access and test it [here][presentation].

### Locally

#### Dependencies

To run this project locally you'll need the dependencies around [Vite][Vite] and [React][React], which is [NodeJS][Node] and [NPM][NPM], and i recommend to use [NVM][NVM] to manage their version.

#### Steps

1. Clone this repo using one of those 2 commands in your preferred terminal:

    SSH:
    ```sh
    git clone git@github.com:MallarDev/dexie-presentation.git
    ```
    HTTPS:

    ```sh
    git clone https://github.com/MallarDev/dexie-presentation.git
    ```

2. Now go to the created folder with:

    
    ```sh
    cd dexie-presentation
    ```

3. Install the dependencies using:

    ```sh
    npm install
    ```

4. Run the project:

    ```sh
    npm run dev
    ```

5. Access the page on [localhost](http://localhost:3000).



[Dexie]: https://dexie.org
[IndexedDB]: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
[repos-using]: https://github.com/dexie/Dexie.js/network/dependents?dependent_type=REPOSITORY&package_id=UGFja2FnZS0xMzg0ODIyOQ%3D%3D
[db]: /src/database/db.js
[actions]: /src/database/actions.js
[MUI]: https://mui.com
[Vercel]: https://vercel.com
[presentation]: https://dexie-presentation.vercel.app
[Vite]: https://vitejs.dev
[React]: https://react.dev
[Node]: https://nodejs.org
[NPM]: https://www.npmjs.com
[NVM]: https://github.com/nvm-sh/nvm