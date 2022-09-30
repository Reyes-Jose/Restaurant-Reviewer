// profile code was taken directly from the UCB Bootcamp Gitlab Repo
// and includes some modifications for the updated Routes
//   https://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/UCB-VIRT-FSF-PT-05-2022-U-LOLC/-/blob/main/14-MVC/01-Activities/28-Stu_Mini-Project/Main/public/js/profile.js
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
    .addEventListener('click', newFormHandler);
  
  document
    .querySelector('.project-list')
    .addEventListener('click', delButtonHandler);
  