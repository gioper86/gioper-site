export const posts = [
  {
    id: "JX0KOB8q",
    title: "White gorgonian",
    location: {
      name: "Sa Tuna, Costa Brava, Spain",
      coordinates: [41.960583, 3.229857]
    },
    intro: "While freediving in Costa Brava I came across some beautiful soft corals that can be found in the western Mediterranean: Eunicella singularis, known as white gorgonian.",
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
          text: "Last autumn, while casually snorkelling and freediving in one of my favourite places in Costa Brava, I saw what it looked like a \"gorgonian\", essentially a soft coral. I had seen similar corals many times while scuba diving and free diving along the coast near my home town (Palmi, Italy), but what surprised me this time was the shallow depth at which those corals grew. In other places across the Mediterranean, I was more used to seeing those corals beyond 20 meters depth, while in this specific cliff they start growing at around 10 metres (The shallowest I found was actually at only 8m!) When I saw the first specimens I immediately realised that those corals where part of the \"gorgonians\" family (scientific name being Alcyonacea), but I wasn't sure which exact species they belonged to. That afternoon, after some research, I nailed down the exact species, which is Eunicella singularis, informally known as \"White gorgonian\". According to Wikipedia, Eunicella singularis is found in the Western Mediterranean, at depth between 10m and 65m, which confirms that is not entirely unusual to see it at that shallow depth. Even though Eunicella Singularis is not as beautiful as its more widely known relative Paramuricea clavata, it is still a very nice and interesting coral which, in some places, can be observed and admired easily while freediving.",
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
        type: "markdown",
        parameters: {
          text: "Lorem ipsum **dolor** sit amet, **consectetur** adipisicing elit. \n\nQuos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.",
        }, 
      },
      {
        type: "video",
        parameters: {
          url: "https://www.youtube.com/embed/QlAJSdJIBqU",
          description: "some description",
        }
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