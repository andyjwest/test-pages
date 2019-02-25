import React from 'react';
import './home.css';
import Headliner from './Headliner';
import Layout from "../components/Layout";

export default ({pageContext: {posts}}) =>
    (<Layout>
        {posts.map(post => (<Headliner post={post} />))}
    </Layout>);
