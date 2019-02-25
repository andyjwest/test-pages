import React from 'react';
import './home.css';
import Headliner from './Headliner';
import Layout from "../components/Layout";

export default ({pageContext: {posts, category}}) =>
    (<Layout breadCrumbs={category}>
        <div>
            <h1>{category.title}</h1>
        </div>
        {posts.map(post => (<Headliner post={post} />))}

    </Layout>);
