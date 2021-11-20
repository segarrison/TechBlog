const newFormHandler = async (event) => {
    event.preventDefault();
  
    const post_title = document.querySelector('#post-title').value.trim();
    const post_content = document.querySelector('#post-content').value.trim();
  
    if (post_title && post_content) {
        console.log(post_title);
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({ post_title, post_content }),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      console.log(response);
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      }
    }
  };
  const updateButtonHandler = async (event) => {
    //I think I'm going a different route with this
    
    // if (event.target.hasAttribute('data-id')) {
    //   const id = event.target.getAttribute('data-id');
  
    //   const response = await fetch(`/api/posts/${id}`, {
    //     method: 'GET',
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/dashboard');
    //   } else {
    //     alert('Failed to update post');
    //   }
    // }
  };
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id-del')) {
      const id = event.target.getAttribute('data-id-del');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
  document
    .querySelector('.new-post-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.post-list')
    .addEventListener('click', delButtonHandler);

    document
    .querySelector('.post-list')
    .addEventListener('click', updateButtonHandler);