import React from "react";
import { reloadRoutes } from 'react-static/node'
import jdown from 'jdown'
import chokidar from 'chokidar'
import ExtractTextPlugin from 'extract-text-webpack-plugin';

chokidar.watch('content').on('all', () => reloadRoutes())

export default {
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
  },
   Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="pt-br">
      <Head>
        <meta charSet="UTF-8" />        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="author" content="Sidnei Simmon" />
        <meta name="description" content="Blog de estudos sobre Javascript e React" />
        <meta name="keywords" content="blog, static, react, javascript, webpack, html5, css3" />
        <meta name="reply-to" content="sidneisimmon@gmail.com"></meta>
        <title>{"<SidneiSimmon/>"}</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  getSiteData: async () => {
    const { posts } = await jdown('content')
    return ({
      title: 'React Static',
      posts: posts
    });
  },  
  getRoutes: async () => {
    const { posts } = await jdown('content')
    return [     
      {
        path: '/blog',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        })
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/styles/scss'] },
        },
      ]
      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }
    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    if (stage === 'prod') {
      config.entry = ['babel-polyfill', config.entry]
    } else if (stage === 'dev') {
      config.entry = ['babel-polyfill', ...config.entry]
    }
    return config
  },
}
