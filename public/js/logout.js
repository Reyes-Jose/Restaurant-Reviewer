// logout code was taken directly from the UCB Bootcamp Gitlab Repo
//   https://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/UCB-VIRT-FSF-PT-05-2022-U-LOLC/-/blob/main/14-MVC/01-Activities/28-Stu_Mini-Project/Main/public/js/logout.js
const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  