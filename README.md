# Matières des matières

0. Installation et démarrage
1. Types
2. Assertion de types
3. Narrowing
4. Custom types
5. Generics
6. Classes
7. Decarator

# Partie d'installation et démarrage

## Installation et configuration
Installez [nodeJS](https://nodejs.org/en/) en version LTS ou https://nodejs.org/en/

Une fois que nodeJS a été installé, vous pouvez installer les différentes dépendances en lcoal.
- `npm install typescript`
- `npm install ts-loader`
- `npm install webpack`
- `npm install webpack-cli`
ou 
- `npm install typescript ts-loader webpack webpack-cli`


Ensuite, créer deux fichiers à la racine du projet :
- tsconfig.js
- webpack.config.js

---

**tsconfig.js :**

```json
{
    "compilerOptions": {
        "outDir": "dist",
        "target": "ES2015",
        "noEmitOnError": true,
        "strict": true
    },
    "files": [
        "src/app.ts"
    ]
}
```

`compilerOptions` : 
* objet de props pour la compilation voir : [Documentation TypeScript](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

`outDir` : 
* dossier de finaliter de compilation

`target` : 
* permet de définir la version de js visée lors de la compilation
* es3, es5, es6/es2015, es2016, es2017, es2018, es2019, es2020, es2021, or esnext

`noEmitOnError` : 
* permet de dire si true que le code ne doit pas compiler en cas d'erreur

`strict` : 
* utilise la version strict de TS

`files[]` : 
* permet de dire au compilateur qu'il doit aller lire dans le dossier le fichier src/index.ts pour compiler 

---

**webpack.config.js :**
```js
const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    devtool: 'inline-source-map',
    entry: './src/app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
```

## Lancement
Pour lancer la compilation de votre projet : `npx webpack --watch`

- npx (Node Package eXecute) : conçu pour l'exécution de paquets
