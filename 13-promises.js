function uploadSongs() {
  return new Promise((resolve, reject) => {
    const depender = Math.floor(Math.random() * 10);
    if (depender > 4) {
      setTimeout(() => {
        resolve("hello folks");
      }, 0);
    } else {
      setTimeout(() => {
        reject(new Error("we got error folks"));
      }, 0);
    }
  });
}

const songs = uploadSongs();

console.log(songs);
setTimeout(() => {
  console.log("status : ", songs);
}, 0);

songs
  .then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    }
  )
  .finally(() => {
    console.log("This is the final funtion finally");
  });
