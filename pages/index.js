import 'bootstrap/dist/css/bootstrap.min.css';
import List from '../components/List';
import axios from 'axios'
import React, { useState,useEffect } from 'react';

export default function FormPost() {

  const [posts, setAllPosts] = useState('');
  const [action,setAction] = useState('add');
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [created, setCreated] = useState('');

  const now = new Date().toLocaleString();


  useEffect(() => {
    listPosts();
  }, []);

  const listPosts = () => {
      const endPoint = "api/get-posts"
      axios.get(endPoint)
      .then((response)=>{
          const postsData = response.data
          setAllPosts(postsData)

          const date = response.data[4].created
          console.log(new Date(date).toLocaleString())
      })
      .catch(error=>console.log(`Error: ${error}`))
  }

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  }
  const handleChangeContent = (event) => {
      setContent(event.target.value);
  }
  const handleChangeAuthor = (event) => {
      setAuthor(event.target.value);
  }
  const savePost = async (event) => {
    event.preventDefault()

    const btnAction = event.target.btnAction.value
    let endPoint = '';
    if(btnAction=='add')
    {
        endPoint = '/api/create'
    }
    else{
        endPoint = '/api/update'
    }

    axios.post(endPoint, {
        id: id,
        title: title,
        content: content,
        author: author,
        created: now,
    })
    .then(function (response) {
        setId('')
        setTitle('')
        setContent('')
        setAuthor('')
        setCreated('')
        listPosts()
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  const  handleDeletePost = (postid)=>{

    if(!confirm("Are you sure want to delete ?"))
    return false

    axios.post('/api/delete', {
        uid: postid,
    })
    .then(function (response) {
        setAction('add')
        setId('')
        setTitle('')
        setContent('')
        setAuthor('')
        listPosts()
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  const  handleEditPost = (postid)=>{
    axios.post('/api/get-post', {
        uid: postid,
    })
    .then(function (response) {
        setAction('update')
        setId(response.data[0].id)
        setTitle(response.data[0].title)
        setContent(response.data[0].content)
        setAuthor(response.data[0].author)
    })
    .catch(function (error) {
    console.log(error);
    });
  }

  return (
    <div className='container'>
      <h1>Next.js Mysql Crud</h1>
      <div>
        <h2>Post List</h2>
        <List posts={posts} handleDelete={(postid)=>{handleDeletePost(postid)}} handleEdit={(postid)=>{handleEditPost(postid)}} />
      </div>
      <div>
        <h2>New Post</h2>
        <form onSubmit={savePost}>
          <input type="hidden" value={id} />
          <div>
            <label>title</label>
            <input type="text" value={title} onChange={handleChangeTitle} name="title" className='form-control'/>
          </div>
          <div>
            <label>content</label>
            <input type="text" value={content} onChange={handleChangeContent} name="content" className='form-control'/>
          </div>
          <div>
            <label>author</label>
            <input type="text" value={author} onChange={handleChangeAuthor} name="author" className='form-control'/>
          </div>
          <button type="submit" name="btnAction" value={action} className='btn btn-primary'>{action}</button>
        </form>
      </div>
    </div>
  );
}
