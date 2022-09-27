const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#project-name').value.trim();
    const foodtype = document.querySelector('#food-type').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
    const pets = document.querySelector('#pets').value.trim();
    const review= document.querySelector('#review').value.trim();
  
    if (name && foodtype && description && pets && review) {
      const response = await fetch(`/api/review`, {
        method: 'POST',
        body: JSON.stringify({ name, foodtype, description, pets, review }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
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
  