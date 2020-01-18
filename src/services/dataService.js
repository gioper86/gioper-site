export const posts = [
  {
    id: "JX0KOB8q",
    title: "White gorgonian",
    location: {
      name: "Sa Tuna, Costa Brava, Spain",
      coordinates: [41.960583, 3.229857]
    },
    intro: "some intro in **markdown** here",
    date: "15/10/2019",
    publishingDate: "02/01/2020",
    thumbnail: "url-to-thumbnail",
    content: [
      {
        type: "video",
        parameters: {
          url: "https://www.youtube.com/embed/QlAJSdJIBqU",
          description: "some description",
        }
      },
      {
        type: "markdown",
        parameters: {
          text: "Lorem ipsum **dolor** sit amet, **consectetur** adipisicing elit. \n\nQuos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
        },
      },
    ]
  },
  {
    id: "vrcFhczN",
    title: "Looking for Pinna Nobilis",
    location: {
      name: "Marinella, Palmi, Italy",
      coordinates: [38.351650, 15.835617]
    },
    intro: "some intro in **markdown** here",
    date: "20/08/2019",
    publishingDate: "03/01/2020",
    thumbnail: "url-to-thumbnail",
    content: [
      {
        type: "video",
        parameters: {
          url: "https://www.youtube.com/embed/QlAJSdJIBqU",
          description: "some description",
        }
      },
      {
        type: "markdown",
        parameters: {
          text: "Lorem ipsum **dolor** sit amet, **consectetur** adipisicing elit. \n\nQuos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
        }, 
      },
    ]
  },
];

export const getPostById = (postId) => {
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];
    if(post.id === postId) {
      return post;
    }
  }
  throw new Error("Post not found");
}