const newCommentHandler = async (event) => {
    event.preventDefault();
  
    const comment_content = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#post_id').innerHTML;
    console.log(post_id);
    if (comment_content && post_id) {
        console.log(post_id);
        
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ comment_content, post_id}),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      console.log(response);
      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to create post');
      }
    }
  };

  document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler);