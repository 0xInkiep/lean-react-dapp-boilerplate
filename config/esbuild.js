import esbuildServe from 'esbuild-serve';
import cssModulesPlugin from 'esbuild-css-modules-plugin';

await esbuildServe(
    {
      define: {
        "process.env.NODE_ENV": `"${process.env.NODE_ENV || 'development'}"`,
        "global": "window",
      },
      bundle: true,
      target: ['chrome58', 'firefox57', 'safari11', 'edge18'],
      entryPoints: ['src/index.jsx'],
      outdir: 'dist',
      loader: {
        '.svg': 'file',
        '.jpg': 'file',
        '.png': 'file',
      },
      plugins: [cssModulesPlugin({ inject: false })],
      minify: process.env.NODE_ENV === "production",
    },
    {
        // serve options (optional)
        port: 8080,
        live: true,
        root: 'dist'
    }
);
