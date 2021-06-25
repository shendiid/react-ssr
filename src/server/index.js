import express from 'express';
import Home from '../Components/Home';
import React from 'react';
import { renderToString } from 'react-dom/server';

const app = express();
const content = renderToString(<Home />);
app.get('*', function(req, res) {
    res.send(`
        <html>
            <body>${content}</body>
        </html>
    `);
})

var server = app.listen(3000);