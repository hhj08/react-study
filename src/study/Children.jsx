import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/a11y-dark.css";

export default function Children() {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch("./markdown/children.md")
            .then((response) => response.text())
            .then((text) => setMarkdown(text));
    }, []);

    return(
        <>
            <div style={{maxWidth: "768px", width: "100%"}}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}>
                    {markdown}
                </ReactMarkdown>
            </div>
        </>
    );
}