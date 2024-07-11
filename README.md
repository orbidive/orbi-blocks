# Orbi Blocks - Gutenberg Blocks, Patterns & Templates

Create pixel-perfect, modern WordPress websites with ease using our advanced yet user-friendly Gutenberg editor page builder blocks. Craft a masterpiece website effortlessly.

## Plugin Development

This plugin uses npm and webpack to build the production files. To build the files yourself, follow these steps:

### Requirements

Node.js = 21.6.1.x

### Install

Clone the repository:

```bash
git clone https://github.com/orbidive/orbi-blocks.git
```

Navigate to the plugin directory: "cd your-plugin"

Install dependencies:

```bash
npm install
```

## Development

Orbi Blocks using @wordpress/scripts to handle compiling assets and watching for changes.

See the [Official Gutenberg Developer Documentation](https://developer.wordpress.org/block-editor/#develop-for-the-block-editor) for extensive tutorials, documentation, and API references.

### NPM Scripts

Use the following commands to get started:

Watch for changes:

```bash
npm start
```

Build a production version of WDS Blocks:

```bash
npm run build
```