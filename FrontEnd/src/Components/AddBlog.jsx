import React, {useState} from "react";
import axios from 'axios';

function AddBlog(props){
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [body, setBody] = useState('');
    const [img, setImg] = useState('');

    function onSubmit (event) {
        event.preventDefault();
        const newBlog = {
            title: title,
            description: desc,
            body: body,
            imgLink: img
        };

        if(img===""){
            newBlog.imgLink="https://picsum.photos/200/100";
        }

        axios.post('http://localhost:4000/add', newBlog)
            .then(res => console.log(res.data));

        setTitle('');
        setDesc('');
        setBody('');
        setImg('');
        alert("The blog is published")
        props.history.push(`/home`);
    }
    return(
        <>
            <h2 className="sub-heading">Add a New Blog</h2>
            <form onSubmit={onSubmit}>
            <div className="form">
            <label>Title: <br/><input required type="text" placeholder="Enter here..." value = {title} onChange = {event => setTitle(event.target.value)}/></label>
            <label>Short Description: <br/><textarea required rows={2} cols={100} type="text" placeholder="Enter here..." value = {desc} onChange = {event => setDesc(event.target.value)}/></label> 
            <label>The Content: <br/><textarea required rows={13} cols={100} placeholder="Enter here..." value = {body} onChange = {event => setBody(event.target.value)}/></label>
            <label>Image for the Blog: <br/><input type="text" placeholder="Image Link (Optional)" value = {img} onChange = {event => setImg(event.target.value)}/></label>
            <button>Publish</button>
            </div>
            </form>
        </>
    );
}

export default AddBlog;