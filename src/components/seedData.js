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
      },
      {
        name: "Alice's Road Trip",
        songs: [
          { name: "Sweet Child O' Mine", artist: { name: "Guns N' Roses" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Imagine", artist: { name: "John Lennon" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
    ],
    joined: "02.10.2024",
    playlistCount: 2,
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
      },
      {
        name: "Chill Vibes",
        songs: [
          { name: "Sunflower", artist: { name: "Post Malone" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Electric Feel", artist: { name: "MGMT" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
    ],
    joined: "10.10.2024",
    playlistCount: 2,
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
      },
      {
        name: "Summer Party",
        songs: [
          { name: "Levitating", artist: { name: "Dua Lipa" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Blinding Lights", artist: { name: "The Weeknd" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
      {
        name: "Workout Energy",
        songs: [
          { name: "Stronger", artist: { name: "Kanye West" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Eye of the Tiger", artist: { name: "Survivor" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
    ],
    joined: "12.10.2024",
    playlistCount: 3,
  },
  {
    id: 4,
    first_name: 'Audrey',
    last_name: "Ball",
    email: 'audrey@example.com',
    playlists: [
      {
        name: "Monthly Playlist",
        songs: [
          { name: "Style", artist: { name: "Taylor Swift" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Too Sweet", artist: { name: "Hozier" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      },
      {
        name: "Late Night Drive",
        songs: [
          { name: "Midnight City", artist: { name: "M83" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Nightcall", artist: { name: "Kavinsky" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
      {
        name: "Feel-Good Hits",
        songs: [
          { name: "Happy", artist: { name: "Pharrell Williams" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Uptown Funk", artist: { name: "Mark Ronson ft. Bruno Mars" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
    ],
    joined: "20.10.2024",
    playlistCount: 3,
  },
  {
    id: 5,
    first_name: 'Stewart',
    last_name: "Hamilton",
    email: 'stewart@example.com',
    playlists: [
      {
        name: "Stewart's Playlist",
        songs: [
          { name: "Metamorphosis", artist: { name: "emi" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "One of Your Girls", artist: { name: "Troye Sivan" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      },
      {
        name: "Rainy Day Mood",
        songs: [
          { name: "Rhiannon", artist: { name: "Fleetwood Mac" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Dreams", artist: { name: "The Cranberries" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
      {
        name: "Acoustic Sunday",
        songs: [
          { name: "The A Team", artist: { name: "Ed Sheeran" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Let Her Go", artist: { name: "Passenger" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
    ],
    joined: "01.10.2024",
    playlistCount: 2,
  },
  {
    id: 6,
    first_name: 'Evan',
    last_name: "Glover",
    email: 'evan@example.com',
    playlists: [
      {
        name: "Evan's Playlist",
        songs: [
          { name: "Please Please Please", artist: { name: "Sabrina Carpenter" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Casual", artist: { name: "Chappell Roan" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      },
      {
        name: "Epic Gaming",
        songs: [
          { name: "Centuries", artist: { name: "Fall Out Boy" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Legends Never Die", artist: { name: "Against The Current" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
    ],
    joined: "11.10.2024",
    playlistCount: 2,
  },
  {
    id: 7,
    first_name: 'Diane',
    last_name: "Henderson",
    email: 'diane@example.com',
    playlists: [
      {
        name: "Diane's playlist",
        songs: [
          { name: "bye", artist: { name: "Ariana Grande" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Guilty as Sin?", artist: { name: "Taylor Swift" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      },
      {
        name: "Throwback Classics",
        songs: [
          { name: "Billie Jean", artist: { name: "Michael Jackson" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Take On Me", artist: { name: "A-ha" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
      {
        name: "Cinematic Soundscapes",
        songs: [
          { name: "Time", artist: { name: "Hans Zimmer" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Adagio in D Minor", artist: { name: "John Murphy" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
      {
        name: "Festival Anthems",
        songs: [
          { name: "Wake Me Up", artist: { name: "Avicii" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Don't You Worry Child", artist: { name: "Swedish House Mafia" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      }
    ],
    joined: "02.09.2024",
    playlistCount: 4,
  },
  {
    id: 8,
    first_name: 'Audrey',
    last_name: "Mackay",
    email: 'stewart@example.com',
    playlists: [
      {
        name: "Audrey's playlist",
        songs: [
          { name: "Metamorphosis", artist: { name: "emi" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "One of Your Girls", artist: { name: "Troye Sivan" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      },
      {
        name: "Indie Discoveries",
        songs: [
          { name: "Mountain Sound", artist: { name: "Of Monsters and Men" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "The Less I Know the Better", artist: { name: "Tame Impala" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
      {
        name: "90s Nostalgia",
        songs: [
          { name: "Smells Like Teen Spirit", artist: { name: "Nirvana" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "No Scrubs", artist: { name: "TLC" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
    ],
    joined: "12.10.2024",
    playlistCount: 3,
  },
  {
    id: 9,
    first_name: 'Ruth',
    last_name: "White",
    email: 'ruth@example.com',
    playlists: [
      {
        name: "Ruth's playlist",
        songs: [
          { name: "Watch Say", artist: { name: "Jason Derulo" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "One of Your Girls", artist: { name: "Troye Sivan" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
        ]
      },
      {
        name: "Classical Relaxation",
        songs: [
          { name: "Clair de Lune", artist: { name: "Claude Debussy" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] },
          { name: "Moonlight Sonata", artist: { name: "Ludwig van Beethoven" }, image: [null, null, { "#text": "https://via.placeholder.com/150" }] }
        ]
      },
    ],
    joined: "02.10.2023",
    playlistCount: 2,
  },
  // ..

  // ... Add playlists for other users similarly
];
