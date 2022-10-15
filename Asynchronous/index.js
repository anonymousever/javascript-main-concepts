// Asynchronous
// 1. Definition
// Asynchronous programming is a programming paradigm that uses a programming model
// in which the program is divided into a sequence of steps that are executed one at a time, in some order,
// and may be interleaved with other activities

// 2. Patterns to be used in asynchronous programming in JavaScript
// Callback functions
// Promises
// Async/Await

// 3. Callback functions
function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from a database...');
    callback({ id: id, gitHubUsername: 'johndoe' });
  }, 1000);
}

getUser(1, user => {
  console.log('User:', user);
});

// 4. Patterns to be used to prevent nested callbacks (callback hell)
// Named functions (check the documentations for more details)
// Promises

// 5. Promises
function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

getRepositories('johndoe')
  .then(repos => {
    console.log('Repos:', repos);
  })
  .catch(error => {
    console.log('Error:', error);
  });

// 6. Promises in parallel mode
function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit1', 'commit2', 'commit3']);
    }, 3000);
  });
}

Promise.all([getRepositories('johndoe'), getCommits('repo1')])
  .then(result => {
    console.log('Result:', result);
  })
  .catch(error => {
    console.log('Error:', error);
  });

// 7. Async/Await
async function displayCommits() {
  try {
    const repos = await getRepositories('johndoe');
    const commits = await getCommits(repos[0]);
    console.log('Commits:', commits);
  } catch (error) {
    console.log('Error:', error);
  }
}

displayCommits();
