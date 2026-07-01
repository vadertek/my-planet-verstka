# Optimized Styles template

This is a sample project utilizing Tailwind CSS for styling.

## Prerequisites

- Node.js (v18.x or later)

## Installation

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd simple-template-for-optimized-styles
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```
3. Add the following github secrets for

    ```sh
        server: ${{ secrets.ftp_server }}
        username: ${{ secrets.ftp_username }}
        password: ${{ secrets.ftp_password }}
        server-dir: ${{ secrets.ftp_directory }}
    ```
4. Change sample to your domain name in .htaccess file

    ```sh
        RewriteRule ^(.+)$ https://your-domain-name.com/$1/ [R=301,L]
    ```
5. Have fun!

## Development

To start the development server and watch for changes, run:

```sh
npm run dev
```

it will run a development server on http://localhost:3000/

## Website checklist

- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Favicon added
- [ ] Website sitemap
- [ ] .htaccess
- [ ] json+ld schema
- [ ] 404 page
- [ ] Desktop and mobile versions no visual artifacts
- [ ] (EU) GDRP Compliance

## TODO
- [ ] Automatic sitemap generation
- [ ] Preinstalled cookies banner
- [ ] Preview link before merging into main branch
- [x] Localhost serving
- [ ] Vite?
