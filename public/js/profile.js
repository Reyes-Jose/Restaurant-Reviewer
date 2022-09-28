const newFormHandler = async (event) => {
    event.preventDefault();
 
    const restaurant_id = document.querySelector('#project-name').value.trim();
    const comment = document.querySelector('#review').value.trim();
 
    if (restaurant_id && comment) {
      const response = await fetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify({ restaurant_id, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('profile response', response);
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create review');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/reviews/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete review');
      }
    }
  };
  
  document
    .querySelector('.new-project-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  