// Asynchronous
// 1. Callbacks
const posts = [];

function getPosts() {
  setTimeout(() => {
    posts.forEach(post => {
      console.log(post);
    });
  }, 1000);
}

function addPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

addPost({}, getPosts);

// 2. AJAX and XHR object
const xhr = new XMLHttpRequest();
xhr.open('GET', './posts.json');

// readyState values
// 0: Request not initialized
// 1: Server connection established
// 2: Request received
// 3: Processing request
// 4: Request finished and response is ready
xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(JSON.parse(this.responseText));
  }
};

xhr.send();

// 3. Promises
const getNewPosts = new Promise((resolve, reject) => {
  setTimeout(() => {
    const error = false;
    if (!error) {
      resolve({ title: '', body: '' });
    } else {
      reject('Something went wrong');
    }
  }, 1000);
});

getNewPosts
  .then(post => {
    console.log(post);
    return post.title;
  })
  .then(title => {
    console.log(title);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log('Promise resolved or rejected');
  });

// 4. Fetch API
// Structure
fetch('./posts.json')
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

// Options
function addNewPost(post) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: post.title,
      body: post.body,
    }),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
}

addNewPost({});

// 5. Errors handling
// HTTP status codes
// 100 range: Continue
// 200 range: Success
// 300 range: Redirects
// 400 range: Client error
// 500 range: Server error
fetch('http://httpstat.us/400')
  .then(response => {
    if (response.status === 400) {
      throw new Error('Client error');
    }
    if (response.status === 500) {
      throw new Error('Server error');
    }
    if (response.status !== 200) {
      throw new Error('Request failed');
    }

    return response;
  })
  .then(() => {
    console.log('success');
  })
  .catch(error => {
    console.log(error);
  });

// 6. Async & Await
async function getUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
}

getUsers();

// 7. Async & Await errors handling
async function getData() {
  try {
    const response = await fetch('http://httpstat.us/400');
    if (!response.ok) {
      throw new Error('Client error');
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData();
