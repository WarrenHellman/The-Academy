const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// function createPost(){
//   setTimeout(function(){
//     post.push(post);
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     post.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'})

// getPosts();

// Asynchronously with callback functions
// function createPost(post, callback){
//   setTimeout(function(){
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function(){
//     let output = '';
//     posts.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }
// createPost({title: 'Post Three', body: 'This is post three'}, getPosts);

//With Promises

function createPost(post){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      posts.push(post);
      const error = true;

      if(!error) {
        resolve();
      } else {
        reject('Error: something went wrong')
      }
      resolve();
    }, 2000);
  });
  
}

function getPosts(){
  setTimeout(function(){
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
createPost({title: 'Post Three', body: 'This is post three'}).then(getPosts).catch(function(err){
  console.log(err);
})