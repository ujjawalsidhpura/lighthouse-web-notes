const posts = [
  { title: 'Post 1', body: 'This is a post 1' },
  { title: 'Post 2', body: 'This is a post 2' },
  { title: 'Post 3', body: 'This is a post 3' }
]
let output = [];

function getPosts(p) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      p.forEach((post) => {
        output.push(post.body);
      })
      let err = false;
      if (!err) {
        resolve(output);
      } else {
        reject('Error')
      }
    }, 2000);
  })
}

getPosts(posts)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))