export const initialUsers = [
  { id: 1, first_name: 'Alice', last_name:"Smith", email: 'alice@example.com' },
  { id: 2, first_name:  'Bob',  last_name:"Williams", email: 'bob@example.com' },
  { id: 3, first_name: 'Charlie', last_name:"David", email: 'charlie@example.com' },
  { id: 4, first_name: 'Audrey', last_name:"Ball", email: 'alice@example.com' },
  { id: 5, first_name:  'Stewart',  last_name:"Hamilton", email: 'bob@example.com' },
  { id: 6, first_name: 'Evan', last_name:"Glover", email: 'charlie@example.com' },
  { id: 7, first_name: 'Diane', last_name:"Henderson", email: 'alice@example.com' },
  { id: 8, first_name:  'Audrey',  last_name:"Mackay", email: 'bob@example.com' },
  { id: 9, first_name: 'Ruth', last_name:"White", email: 'charlie@example.com' },
];

export const initialUsers = [
  {
    id: 1,
    first_name: 'Alice',
    last_name: "Smith",
    email: 'alice@example.com',
    playlists: [
      {
        name: "Alice's Favorites",
        songs: [
          { name: "Bohemian Rhapsody", artist: { name: "Queen" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Imagine", artist: { name: "John Lennon" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      }
    ]
  },
  {
    id: 2,
    first_name: 'Bob',
    last_name: "Williams",
    email: 'bob@example.com',
    playlists: [
      {
        name: "Bob's Rock Mix",
        songs: [
          { name: "Sweet Child O' Mine", artist: { name: "Guns N' Roses" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Stairway to Heaven", artist: { name: "Led Zeppelin" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      }
    ]
  },
  {
    id: 3,
    first_name: 'Charlie',
    last_name: "David",
    email: 'charlie@example.com',
    playlists: [
      {
        name: "Running's playlist",
        songs: [
          { name: "Risk", artist: { name: "Gracie Abrams" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Water", artist: { name: "Tyla" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      }
    ]
  },
  {
    id: 4,
    first_name: 'Audrey',
    last_name: "Ball",
    email: 'audrey@example.com',
    playlists: [
      {
        name: "Bob's Rock Mix",
        songs: [
          { name: "Style", artist: { name: "Taylor Swift" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Too Sweet", artist: { name: "Hozier" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      }
    ]
  },
  {
    id: 2,
    first_name: 'Bob',
    last_name: "Williams",
    email: 'bob@example.com',
    playlists: [
      {
        name: "Bob's Rock Mix",
        songs: [
          { name: "Sweet Child O' Mine", artist: { name: "Guns N' Roses" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Stairway to Heaven", artist: { name: "Led Zeppelin" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      }
    ]
  },
  // ... Add playlists for other users similarly
];
