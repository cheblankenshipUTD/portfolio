import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Markdown from 'markdown-to-jsx';
import { Button } from 'react-bootstrap';


const BlogDetail = ({ blog }) => {

    const [post, setPost] = useState("");

    useEffect(() => {

        fetch(blog.fileUrl)
            .then(res => res.text())
            .then(res => setPost(res))

    })
    
    return (
        <div className="markdown-design">
            <Link href="/blog">
                <Button variant="dark" style={{"color": "white"}}>Back</Button>
            </Link>
            <div>
                <Markdown>
                    {post}
                </Markdown>
            </div>
        </div>
    )

}

BlogDetail.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`http://localhost:3000/api/blogs/${id}`);
    const { data } = await res.json();

    return { blog: data }
}

export default BlogDetail;