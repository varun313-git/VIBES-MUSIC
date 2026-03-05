// ----------------------------------------------------
// DATASET & LOCAL STORAGE INITIALIZATION
// ----------------------------------------------------

const defaultArtists = [
    { id: 'a1', name: 'Anirudh Ravichander', genre: 'Tamil Pop', region: 'tamil', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg' },
    { id: 'a2', name: 'A.R. Rahman', genre: 'Hindi/Tamil', region: 'hindi', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/56/ac/41/56ac41f7-99f3-3eae-3b07-443167292c4e/8902894697408_cover.jpg/600x600bb.jpg' },
    { id: 'a3', name: 'Devi Sri Prasad', genre: 'Telugu', region: 'telugu', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/57/74/19/577419be-99bc-4915-2611-660b4ed8354f/cover.jpg/600x600bb.jpg' },
    { id: 'a4', name: 'The Weeknd', genre: 'Pop/R&B', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg' },
    { id: 'a5', name: 'Taylor Swift', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3d/01/f2/3d01f2e5-5a08-835f-3d30-d031720b2b80/22UM1IM07364.rgb.jpg/600x600bb.jpg' },
    { id: 'a6', name: 'Sid Sriram', genre: 'Telugu/Tamil', region: 'telugu', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/53/98/c1/5398c1cf-7c16-24a6-bfa3-391dc6015376/cover.jpg/600x600bb.jpg' },
    { id: 'a7', name: 'Arijit Singh', genre: 'Hindi', region: 'hindi', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bb/23/ee/bb23eeed-0c35-4f1d-2b11-485622777ae4/8902894353007_cover.jpg/600x600bb.jpg' },
    { id: 'a8', name: 'Dua Lipa', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.jpg' },
    { id: 'a9', name: 'S. Thaman', genre: 'Telugu', region: 'telugu', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/46/aa/48/46aa4863-c1ec-4574-e98e-80b8c1f3ef69/cover.jpg/600x600bb.jpg' },
    { id: 'a10', name: 'Ed Sheeran', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/28/e0/d3/28e0d30a-2afe-66e4-ac03-69b6d779fecd/mzaf_7857615290499608693.plus.aac.p.m4a' },
    { id: 'a11', name: 'Anuv Jain', genre: 'Indie', region: 'hindi', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/fe/3e/8b/fe3e8be2-dc7d-92e0-827c-dda09361f21d/23UM1IM18353.rgb.jpg/600x600bb.jpg' },
    { id: 'a12', name: 'Lana Del Rey', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/74/79/c5/7479c518-a8ba-2054-b978-c87293194260/20UM1IM09851.rgb.jpg/600x600bb.jpg' },
    { id: 'a13', name: 'Miley Cyrus', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1d/9b/3c/1d9b3c9e-8f8a-4b9a-9b0e-8d8f8d8d8d8d/23UM1IM12345.rgb.jpg/600x600bb.jpg' },
    { id: 'a14', name: 'Sam Smith', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2e/3f/4d/2e3f4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg' },
    { id: 'a15', name: 'Harry Styles', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3f/4g/5e/3f4g5e6f-7g8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg' },
    { id: 'a16', name: 'Glass Animals', genre: 'Indie Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4h/5i/6f/4h5i6f7g-8h9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg' },
    { id: 'a17', name: 'The Kid LAROI', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5j/6k/7g/5j6k7g8h-9i0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg' },
    { id: 'a18', name: 'Olivia Rodrigo', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6l/7m/8h/6l7m8h9i-0j1a-2b3c-4d5e-6f7a8b9c0d1e/23UM1IM67890.rgb.jpg/600x600bb.jpg' },
    { id: 'a19', name: 'Lil Nas X', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7n/8o/9i/7n8o9i0j-1k2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg' },
    { id: 'a20', name: 'Justin Bieber', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8p/9q/0j/8p9q0j1k-2l3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg' },
    { id: 'a21', name: 'Ed Sheeran', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9r/0s/1k/9r0s1k2l-3m4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg' },
    { id: 'a22', name: 'Elton John', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg' },
    { id: 'a23', name: 'Imagine Dragons', genre: 'Rock', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg' },
    { id: 'a24', name: 'Coldplay', genre: 'Rock', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7q/8r/9c/7q8r9c0d-1e2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg' },
    { id: 'a25', name: 'Mark Ronson', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0t/1u/2l/0t1u2l3m-4n5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg' },
    { id: 'a26', name: 'Bruno Mars', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg' },
    { id: 'a27', name: 'OneRepublic', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg' },
    { id: 'a28', name: 'Imagine Dragons', genre: 'Rock', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg' },
    { id: 'a29', name: 'Marshmello', genre: 'Electronic', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg' },
    { id: 'a30', name: 'The Chainsmokers', genre: 'Electronic', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1k/2l/3w/1k2l3w4x-5y6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg' },
    { id: 'a31', name: 'The Weeknd', genre: 'Pop/R&B', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4n/5o/6z/4n5o6z7a-8b9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg' },
    { id: 'a32', name: 'The Weeknd', genre: 'Pop/R&B', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5o/6p/7a/5o6p7a8b-9c0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg' },
    { id: 'a33', name: 'Ed Sheeran', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg' },
    { id: 'a34', name: 'Halsey', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg' },
    { id: 'a35', name: 'benny blanco', genre: 'Pop', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg' },
    { id: 'a36', name: 'Calvin Harris', genre: 'Electronic', region: 'english', image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5d/6e/7q/5d6e7q8r-9s0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg' }
];

const defaultTracks = [
    // Tamil (Anirudh)
    { id: 1, title: "Naa Ready", artistId: "a1", artist: "Anirudh Ravichander", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b0/bf/d4/b0bfd46c-da95-2f95-1f7d-a75aa51c2465/196871252386.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a8/32/c8/a832c835-a3bb-02fb-f8ee-affbf922e4df/mzaf_8172757334851723076.plus.aac.p.m4a" }, // energetic club vibes
    { id: 2, title: "Hukum", artistId: "a1", artist: "Anirudh Ravichander", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2c/df/14/2cdf140e-6d11-a98d-bfbf-bc5e30c3c4a1/197189528187.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8e/92/8d/8e928d01-421f-b5fd-e550-6f78f65c0946/mzaf_12861274908972800573.plus.aac.p.m4a" }, // dark intense

    // Hindi/Tamil (A.R. Rahman)
    { id: 3, title: "Kun Faya Kun", artistId: "a2", artist: "A.R. Rahman", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/56/ac/41/56ac41f7-99f3-3eae-3b07-443167292c4e/8902894697408_cover.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2e/99/e2/2e99e2ff-1d1b-615c-9d87-1cd3b122ad7f/mzaf_4773314624008046164.plus.aac.p.m4a" }, // soulful/ethereal
    { id: 4, title: "Tere Bina", artistId: "a2", artist: "A.R. Rahman", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/42/e2/83/42e2830e-107c-19dd-0a94-a379bdb42599/886970389020.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/dd/37/75/dd3775fc-4c02-099d-b1aa-1c045758761a/mzaf_13811721860065911768.plus.aac.p.m4a" }, // romantic sunset

    // Telugu (DSP)
    { id: 5, title: "Srivalli", artistId: "a3", artist: "Devi Sri Prasad", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/57/74/19/577419be-99bc-4915-2611-660b4ed8354f/cover.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/b2/d4/2a/b2d42a64-0105-e9f5-527e-63fae7c1a0ab/mzaf_8554124213111102926.plus.aac.p.m4a" }, // acoustic/folk
    { id: 6, title: "Oo Antava", artistId: "a3", artist: "Devi Sri Prasad", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/59/19/65/591965d4-84b4-d62d-345f-88bd29ce0843/cover.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/59/5d/86/595d8694-c034-2040-9a11-2f117ed32ea4/mzaf_8961189800316643417.plus.aac.p.m4a" }, // party/club

    // English (The Weeknd)
    { id: 7, title: "Blinding Lights", artistId: "a4", artist: "The Weeknd", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/a6/6e/bf/a66ebf79-5008-8948-b352-a790fc87446b/19UM1IM04638.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/17/b4/8f/17b48f9a-0b93-6bb8-fe1d-3a16623c2cfb/mzaf_9560252727299052414.plus.aac.p.m4a" }, // purple neon lights
    { id: 8, title: "Starboy", artistId: "a4", artist: "The Weeknd", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/b5/92/bb/b592bb72-52e3-e756-9b26-9f56d08f47ab/16UMGIM67864.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3f/a0/ba/3fa0ba5b-088d-bcf2-e4bd-355a5d505617/mzaf_3355567893400963384.plus.aac.p.m4a" }, // red aesthetics

    // English (Taylor Swift)
    { id: 9, title: "Anti-Hero", artistId: "a5", artist: "Taylor Swift", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3d/01/f2/3d01f2e5-5a08-835f-3d30-d031720b2b80/22UM1IM07364.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1d/56/2a/1d562a07-dc5f-a9c0-1f36-2051a8c14eb7/mzaf_7214829135431340590.plus.aac.p.m4a" }, // midnight mood
    { id: 10, title: "Blank Space", artistId: "a5", artist: "Taylor Swift", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c1/31/18/c131181b-ca3e-d945-16b2-48ea6bcd64d4/23UM1IM11868.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/dd/3a/f1dd3add-0fc5-2e35-3460-923fb707f21e/mzaf_7924539200493199372.plus.aac.p.m4a" }, // bright/pop

    // Telugu/Tamil (Sid Sriram)
    { id: 11, title: "Samajavaragamana", artistId: "a6", artist: "Sid Sriram", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/53/98/c1/5398c1cf-7c16-24a6-bfa3-391dc6015376/cover.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/94/15/98/941598ae-7248-357a-1e07-be7d50ea7b08/mzaf_11251795343892643096.plus.aac.p.m4a" }, // romantic/blue
    { id: 12, title: "Srivalli", artistId: "a6", artist: "Sid Sriram", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/68/f1/52/68f1523b-3c40-f2cc-7d4a-376642897adb/cover.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/51/0e/57/510e5716-8142-ad57-7c81-c5f476086eeb/mzaf_9519867280777946477.plus.aac.p.m4a" }, // forest/nature

    // Hindi (Arijit Singh)
    { id: 13, title: "Tum Hi Ho", artistId: "a7", artist: "Arijit Singh", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/bb/23/ee/bb23eeed-0c35-4f1d-2b11-485622777ae4/8902894353007_cover.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/61/1d/3f/611d3f53-8d7b-8455-c66a-af21f28db1cb/mzaf_3524364971696240598.plus.aac.p.m4a" }, // rain/mood
    { id: 14, title: "Kesariya", artistId: "a7", artist: "Arijit Singh", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9f/13/ca/9f13ca3b-e533-03e0-f19a-f0aaa774581d/196589311191.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/4c/5c/384c5c8f-3ff8-e457-b2f7-3158ce108649/mzaf_12389299033886433185.plus.aac.p.m4a" }, // orange/sunset tones

    // English (Dua Lipa)
    { id: 15, title: "Levitating", artistId: "a8", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6c/11/d6/6c11d681-aa3a-d59e-4c2e-f77e181026ab/190295092665.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/59/dc/4d/59dc4dda-93ff-8f1c-c536-f005f6ea6af5/mzaf_3066686759813252385.plus.aac.p.m4a" }, // disco/glitter

    // Telugu (S. Thaman)
    { id: 16, title: "Butta Bomma", artistId: "a9", artist: "S. Thaman", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/46/aa/48/46aa4863-c1ec-4574-e98e-80b8c1f3ef69/cover.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/28/e0/d3/28e0d30a-2afe-66e4-ac03-69b6d779fecd/mzaf_7857615290499608693.plus.aac.p.m4a" }, // colorful

    // English (Ed Sheeran)
    { id: 17, title: "Shape of You", artistId: "a10", artist: "Ed Sheeran", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/28/e0/d3/28e0d30a-2afe-66e4-ac03-69b6d779fecd/mzaf_7857615290499608693.plus.aac.p.m4a", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/a8/32/c8/a832c835-a3bb-02fb-f8ee-affbf922e4df/mzaf_8172757334851723076.plus.aac.p.m4a" }, // club lights

    // Anuv Jain
    { id: 18, title: "Husn", artistId: "a11", artist: "Anuv Jain", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/b6/3d/12/b63d1218-7bc1-f4f2-5fdd-5d1909abda1c/23UM1IM56437.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/31/5d/58/315d5836-7db4-90fa-96c7-36fa4f3ceb96/mzaf_761014035866726482.plus.aac.p.m4a" },
    { id: 19, title: "Baarishein", artistId: "a11", artist: "Anuv Jain", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/81/d1/2e/81d12e71-c993-272a-d559-5a1411f8d8ed/23UM1IM11036.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/31/bd/c0/31bdc0d7-2ee6-74bc-b78c-a8be8723763c/mzaf_8072615351443966717.plus.aac.p.m4a" },
    { id: 23, title: "Alag Aasmaan", artistId: "a11", artist: "Anuv Jain", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/fe/3e/8b/fe3e8be2-dc7d-92e0-827c-dda09361f21d/23UM1IM18353.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e1/49/50/e1495025-5284-a4a8-ad1c-69a1b7f14e44/mzaf_12862430826759059478.plus.aac.p.m4a" },

    // Lana Del Rey
    { id: 20, title: "Summertime Sadness", artistId: "a12", artist: "Lana Del Rey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/5f/d9/63/5fd96387-45fa-6b94-afd8-7b2c4a24a93b/11UMGIM38959.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/f5/a3/d0/f5a3d08a-635d-dc15-4c3f-ad8a04246d80/mzaf_17059298264221524369.plus.aac.p.m4a" },
    { id: 21, title: "Young and Beautiful", artistId: "a12", artist: "Lana Del Rey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/e3/e3/13/e3e31393-abf5-e9b1-edc4-20ede35d0c75/13UMGIM43701.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/d7/0b/8a/d70b8adf-8a27-aafa-76a4-f59200be9ab0/mzaf_6008955516336655319.plus.aac.p.m4a" },
    { id: 22, title: "Chemtrails Over The Country Club", artistId: "a12", artist: "Lana Del Rey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/74/79/c5/7479c518-a8ba-2054-b978-c87293194260/20UM1IM09851.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/22/fd/87/22fd87b1-c46b-9da2-077d-44f95a41b2ce/mzaf_8089293523062255824.plus.aac.p.m4a" },

    // Additional Popular Songs
    { id: 24, title: "Flowers", artistId: "a13", artist: "Miley Cyrus", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1d/9b/3c/1d9b3c9e-8f8a-4b9a-9b0e-8d8f8d8d8d8d/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1d/9b/3c/1d9b3c9e-8f8a-4b9a-9b0e-8d8f8d8d8d8d/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 25, title: "Unholy", artistId: "a14", artist: "Sam Smith & Kim Petras", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2e/3f/4d/2e3f4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2e/3f/4d/2e3f4d5e-6f7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 26, title: "As It Was", artistId: "a15", artist: "Harry Styles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3f/4g/5e/3f4g5e6f-7g8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3f/4g/5e/3f4g5e6f-7g8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 27, title: "Heat Waves", artistId: "a16", artist: "Glass Animals", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4h/5i/6f/4h5i6f7g-8h9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4h/5i/6f/4h5i6f7g-8h9a-0b1c-2d3e-4f5a6b7c8d9e/mzaf_4567890123456789012.plus.aac.p.m4a" },
    { id: 28, title: "Stay", artistId: "a17", artist: "The Kid LAROI & Justin Bieber", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5j/6k/7g/5j6k7g8h-9i0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5j/6k/7g/5j6k7g8h-9i0a-1b2c-3d4e-5f6a7b8c9d0e/mzaf_5678901234567890123.plus.aac.p.m4a" },
    { id: 29, title: "Good 4 U", artistId: "a18", artist: "Olivia Rodrigo", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6l/7m/8h/6l7m8h9i-0j1a-2b3c-4d5e-6f7a8b9c0d1e/23UM1IM67890.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6l/7m/8h/6l7m8h9i-0j1a-2b3c-4d5e-6f7a8b9c0d1e/mzaf_6789012345678901234.plus.aac.p.m4a" },
    { id: 30, title: "Industry Baby", artistId: "a19", artist: "Lil Nas X & Jack Harlow", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7n/8o/9i/7n8o9i0j-1k2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7n/8o/9i/7n8o9i0j-1k2a-3b4c-5d6e-7f8a9b0c1d2e/mzaf_7890123456789012345.plus.aac.p.m4a" },
    { id: 31, title: "Peaches", artistId: "a20", artist: "Justin Bieber", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8p/9q/0j/8p9q0j1k-2l3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8p/9q/0j/8p9q0j1k-2l3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a" },
    { id: 32, title: "Bad Habits", artistId: "a21", artist: "Ed Sheeran", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9r/0s/1k/9r0s1k2l-3m4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9r/0s/1k/9r0s1k2l-3m4a-5b6c-7d8e-9f0a1b2c3d4e/mzaf_9012345678901234567.plus.aac.p.m4a" },
    { id: 33, title: "Shivers", artistId: "a21", artist: "Ed Sheeran", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0t/1u/2l/0t1u2l3m-4n5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0t/1u/2l/0t1u2l3m-4n5a-6b7c-8d9e-0f1a2b3c4d5e/mzaf_0123456789012345678.plus.aac.p.m4a" },
    { id: 34, title: "Cold Heart", artistId: "a22", artist: "Elton John & Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 35, title: "Enemy", artistId: "a23", artist: "Imagine Dragons & JID", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 36, title: "Believer", artistId: "a23", artist: "Imagine Dragons", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 37, title: "Levitating", artistId: "a8", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/mzaf_4567890123456789012.plus.aac.p.m4a" },
    { id: 38, title: "Don't Start Now", artistId: "a8", artist: "Dua Lipa", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5d/6e/7q/5d6e7q8r-9s0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5d/6e/7q/5d6e7q8r-9s0a-1b2c-3d4e-5f6a7b8c9d0e/mzaf_5678901234567890123.plus.aac.p.m4a" },
    { id: 39, title: "Watermelon Sugar", artistId: "a15", artist: "Harry Styles", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6e/7f/8r/6e7f8r9s-0t1a-2b3c-4d5e-6f7a8b9c0d1e/23UM1IM67890.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6e/7f/8r/6e7f8r9s-0t1a-2b3c-4d5e-6f7a8b9c0d1e/mzaf_6789012345678901234.plus.aac.p.m4a" },
    { id: 40, title: "Cardigan", artistId: "a5", artist: "Taylor Swift", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7g/8h/9s/7g8h9s0t-1u2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7g/8h/9s/7g8h9s0t-1u2a-3b4c-5d6e-7f8a9b0c1d2e/mzaf_7890123456789012345.plus.aac.p.m4a" },
    { id: 41, title: "Willow", artistId: "a5", artist: "Taylor Swift", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a" },
    { id: 42, title: "drivers license", artistId: "a18", artist: "Olivia Rodrigo", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/mzaf_9012345678901234567.plus.aac.p.m4a" },
    { id: 43, title: "Deja Vu", artistId: "a18", artist: "Olivia Rodrigo", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/mzaf_0123456789012345678.plus.aac.p.m4a" },
    { id: 44, title: "Montero (Call Me By Your Name)", artistId: "a19", artist: "Lil Nas X", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1k/2l/3w/1k2l3w4x-5y6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1k/2l/3w/1k2l3w4x-5y6a-7b8c-9d0e-1f2a3b4c5d6e/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 45, title: "THATS WHAT I WANT", artistId: "a19", artist: "Lil Nas X", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2l/3m/4x/2l3m4x5y-6z7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2l/3m/4x/2l3m4x5y-6z7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 46, title: "Ghost", artistId: "a20", artist: "Justin Bieber", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3m/4n/5y/3m4n5y6z-7a8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3m/4n/5y/3m4n5y6z-7a8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 47, title: "Hold On", artistId: "a20", artist: "Justin Bieber", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4n/5o/6z/4n5o6z7a-8b9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4n/5o/6z/4n5o6z7a-8b9a-0b1c-2d3e-4f5a6b7c8d9e/mzaf_4567890123456789012.plus.aac.p.m4a" },
    { id: 48, title: "Overpass Graffiti", artistId: "a21", artist: "Ed Sheeran", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5o/6p/7a/5o6p7a8b-9c0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5o/6p/7a/5o6p7a8b-9c0a-1b2c-3d4e-5f6a7b8c9d0e/mzaf_5678901234567890123.plus.aac.p.m4a" },
    { id: 49, title: "The Joker And The Queen", artistId: "a21", artist: "Ed Sheeran", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6p/7q/8b/6p7q8b9c-0d1a-2b3c-4d5e-6f7a8b9c0d1e/23UM1IM67890.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6p/7q/8b/6p7q8b9c-0d1a-2b3c-4d5e-6f7a8b9c0d1e/mzaf_6789012345678901234.plus.aac.p.m4a" },
    { id: 50, title: "My Universe", artistId: "a24", artist: "Coldplay & BTS", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7q/8r/9c/7q8r9c0d-1e2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7q/8r/9c/7q8r9c0d-1e2a-3b4c-5d6e-7f8a9b0c1d2e/mzaf_7890123456789012345.plus.aac.p.m4a" },

    // Additional Popular Songs for Discover
    { id: 51, title: "Anti-Hero", artistId: "a5", artist: "Taylor Swift", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3d/01/f2/3d01f2e5-5a08-835f-3d30-d031720b2b80/22UM1IM07364.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1d/56/2a/1d562a07-dc5f-a9c0-1f36-2051a8c14eb7/mzaf_7214829135431340590.plus.aac.p.m4a" },
    { id: 52, title: "Blank Space", artistId: "a5", artist: "Taylor Swift", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c1/31/18/c131181b-ca3e-d945-16b2-48ea6bcd64d4/23UM1IM11868.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f1/dd/3a/f1dd3add-0fc5-2e35-3460-923fb707f21e/mzaf_7924539200493199372.plus.aac.p.m4a" },
    { id: 53, title: "Love Story", artistId: "a5", artist: "Taylor Swift", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a" },
    { id: 54, title: "Shake It Off", artistId: "a5", artist: "Taylor Swift", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/mzaf_9012345678901234567.plus.aac.p.m4a" },
    { id: 55, title: "Uptown Funk", artistId: "a25", artist: "Mark Ronson ft. Bruno Mars", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0t/1u/2l/0t1u2l3m-4n5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0t/1u/2l/0t1u2l3m-4n5a-6b7c-8d9e-0f1a2b3c4d5e/mzaf_0123456789012345678.plus.aac.p.m4a" },
    { id: 56, title: "24K Magic", artistId: "a26", artist: "Bruno Mars", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 57, title: "Talking to the Moon", artistId: "a26", artist: "Bruno Mars", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 58, title: "Counting Stars", artistId: "a27", artist: "OneRepublic", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 59, title: "Apologize", artistId: "a27", artist: "OneRepublic", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/mzaf_4567890123456789012.plus.aac.p.m4a" },
    { id: 60, title: "Radioactive", artistId: "a28", artist: "Imagine Dragons", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5d/6e/7q/5d6e7q8r-9s0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5d/6e/7q/5d6e7q8r-9s0a-1b2c-3d4e-5f6a7b8c9d0e/mzaf_5678901234567890123.plus.aac.p.m4a", youtubeId: "ktvTqknDobU" },
    { id: 61, title: "Demons", artistId: "a23", artist: "Imagine Dragons", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6e/7f/8r/6e7f8r9s-0t1a-2b3c-4d5e-6f7a8b9c0d1e/23UM1IM67890.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6e/7f/8r/6e7f8r9s-0t1a-2b3c-4d5e-6f7a8b9c0d1e/mzaf_6789012345678901234.plus.aac.p.m4a" },
    { id: 62, title: "Thunder", artistId: "a23", artist: "Imagine Dragons", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7g/8h/9s/7g8h9s0t-1u2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7g/8h/9s/7g8h9s0t-1u2a-3b4c-5d6e-7f8a9b0c1d2e/mzaf_7890123456789012345.plus.aac.p.m4a" },
    { id: 63, title: "Happier", artistId: "a29", artist: "Marshmello", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a" },
    { id: 64, title: "Alone", artistId: "a29", artist: "Marshmello", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/mzaf_9012345678901234567.plus.aac.p.m4a" },
    { id: 65, title: "Silence", artistId: "a29", artist: "Marshmello ft. Khalid", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/mzaf_0123456789012345678.plus.aac.p.m4a" },
    { id: 66, title: "Closer", artistId: "a30", artist: "The Chainsmokers ft. Halsey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1k/2l/3w/1k2l3w4x-5y6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1k/2l/3w/1k2l3w4x-5y6a-7b8c-9d0e-1f2a3b4c5d6e/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 67, title: "Don't Let Me Down", artistId: "a30", artist: "The Chainsmokers ft. Daya", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2l/3m/4x/2l3m4x5y-6z7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2l/3m/4x/2l3m4x5y-6z7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 68, title: "Something Just Like This", artistId: "a30", artist: "The Chainsmokers ft. Coldplay", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3m/4n/5y/3m4n5y6z-7a8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3m/4n/5y/3m4n5y6z-7a8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 69, title: "Starboy", artistId: "a31", artist: "The Weeknd & Daft Punk", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4n/5o/6z/4n5o6z7a-8b9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4n/5o/6z/4n5o6z7a-8b9a-0b1c-2d3e-4f5a6b7c8d9e/mzaf_4567890123456789012.plus.aac.p.m4a", youtubeId: "34Na4j8AVgA" },
    { id: 70, title: "Blinding Lights", artistId: "a32", artist: "The Weeknd", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5o/6p/7a/5o6p7a8b-9c0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5o/6p/7a/5o6p7a8b-9c0a-1b2c-3d4e-5f6a7b8c9d0e/mzaf_5678901234567890123.plus.aac.p.m4a", youtubeId: "4NRXx6U8ABQ" },
    { id: 71, title: "The Hills", artistId: "a32", artist: "The Weeknd", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6p/7q/8b/6p7q8b9c-0d1a-2b3c-4d5e-6f7a8b9c0d1e/23UM1IM67890.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/6p/7q/8b/6p7q8b9c-0d1a-2b3c-4d5e-6f7a8b9c0d1e/mzaf_6789012345678901234.plus.aac.p.m4a" },
    { id: 72, title: "Can't Feel My Face", artistId: "a32", artist: "The Weeknd", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7q/8r/9c/7q8r9c0d-1e2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7q/8r/9c/7q8r9c0d-1e2a-3b4c-5d6e-7f8a9b0c1d2e/mzaf_7890123456789012345.plus.aac.p.m4a" },
    { id: 73, title: "Perfect", artistId: "a33", artist: "Ed Sheeran", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a", youtubeId: "2Vv-BfVoq4g" },
    { id: 74, title: "Photograph", artistId: "a33", artist: "Ed Sheeran", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/mzaf_9012345678901234567.plus.aac.p.m4a" },
    { id: 75, title: "Thinking Out Loud", artistId: "a33", artist: "Ed Sheeran", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/mzaf_0123456789012345678.plus.aac.p.m4a" },
    { id: 76, title: "Castle on the Hill", artistId: "a34", artist: "Halsey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 77, title: "Without Me", artistId: "a34", artist: "Halsey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 78, title: "Bad at Love", artistId: "a34", artist: "Halsey", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 79, title: "Eastside", artistId: "a35", artist: "benny blanco & Halsey & Khalid", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/mzaf_4567890123456789012.plus.aac.p.m4a" },
    { id: 80, title: "I Found You", artistId: "a36", artist: "benny blanco & Calvin Harris", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5d/6e/7q/5d6e7q8r-9s0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5d/6e/7q/5d6e7q8r-9s0a-1b2c-3d4e-5f6a7b8c9d0e/mzaf_5678901234567890123.plus.aac.p.m4a" }
];

// Initialize Data in Local Storage if not present
if (!localStorage.getItem('saregama_artists')) {
    localStorage.setItem('saregama_artists', JSON.stringify(defaultArtists));
} else {
    // Update existing artists with new ones
    const existingArtists = JSON.parse(localStorage.getItem('saregama_artists'));
    const mergedArtists = [...existingArtists];
    defaultArtists.forEach(newArtist => {
        if (!mergedArtists.find(a => a.id === newArtist.id)) {
            mergedArtists.push(newArtist);
        }
    });
    localStorage.setItem('saregama_artists', JSON.stringify(mergedArtists));
}

if (!localStorage.getItem('saregama_tracks')) {
    localStorage.setItem('saregama_tracks', JSON.stringify(defaultTracks));
} else {
    // Update existing tracks with new ones
    const existingTracks = JSON.parse(localStorage.getItem('saregama_tracks'));
    const mergedTracks = [...existingTracks];
    defaultTracks.forEach(newTrack => {
        if (!mergedTracks.find(t => t.id === newTrack.id)) {
            mergedTracks.push(newTrack);
        }
    });
    localStorage.setItem('saregama_tracks', JSON.stringify(mergedTracks));
}
if (!localStorage.getItem('saregama_history')) {
    localStorage.setItem('saregama_history', JSON.stringify([]));
}
if (!localStorage.getItem('saregama_favorites')) {
    localStorage.setItem('saregama_favorites', JSON.stringify([]));
}
if (!localStorage.getItem('saregama_play_counts')) {
    localStorage.setItem('saregama_play_counts', JSON.stringify({}));
}

// Retrieve Data
let dbArtists = JSON.parse(localStorage.getItem('saregama_artists'));
let dbTracks = JSON.parse(localStorage.getItem('saregama_tracks'));
let dbHistory = JSON.parse(localStorage.getItem('saregama_history'));
let dbFavorites = JSON.parse(localStorage.getItem('saregama_favorites'));
let dbPlayCounts = JSON.parse(localStorage.getItem('saregama_play_counts'));

// State Variables
let isPlaying = false;
let currentPlaylist = dbTracks; // The active list we are playing from
let currentTrackIndex = 0;
let audio = new Audio();

// Elements
const playIcon = document.getElementById('play-icon');
const playerArt = document.getElementById('player-art');
const playerTitle = document.getElementById('player-title');
const playerArtist = document.getElementById('player-artist');
const progressBar = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const volumeSlider = document.getElementById('volume-slider');
const volumeProgress = document.getElementById('volume-progress');
const favoriteIcon = document.getElementById('favorite-icon');

// View Switching Logic
const navItems = document.querySelectorAll('.nav-item');
const views = document.querySelectorAll('.view-section');

function switchView(targetId) {
    // Update active nav
    navItems.forEach(item => {
        if (item.dataset.target === targetId) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    let viewId = 'view-' + targetId;
    if (targetId.startsWith('chart-')) {
        viewId = 'view-charts';
    }

    // Show correct view
    views.forEach(view => {
        if (view.id === viewId) {
            view.classList.add('active');
        } else {
            view.classList.remove('active');
        }
    });

    // Render specific views on demand
    if (targetId === 'home') renderHome();
    if (targetId === 'search') renderDiscover();
    if (targetId === 'artists') renderArtists();
    if (targetId === 'recent') renderRecent();
    if (targetId === 'playlists') renderFavorites();
    if (targetId === 'liked-songs') renderLikedSongs();
    if (targetId === 'all-original-songs') renderAllOriginalSongs();
    if (targetId.startsWith('chart-')) renderChart(targetId.split('-')[1]);
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        switchView(item.dataset.target);
    });
});

// Utility Time Formatter
function formatTime(seconds) {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ----------------------------------------------------
// RENDERING FUNCTIONS
// ----------------------------------------------------

function renderHome() {
    // Render recent songs
    const recentSongsGrid = document.getElementById('recent-songs-grid');
    if (recentSongsGrid) {
        recentSongsGrid.innerHTML = '';
        const recentTracks = getTracksByIds(dbHistory.slice(0, 8));
        if (recentTracks.length === 0) {
            // Show some default tracks if no history
            dbTracks.slice(0, 6).forEach(track => {
                const card = createTrackCard(track, dbTracks);
                recentSongsGrid.appendChild(card);
            });
        } else {
            recentTracks.forEach(track => {
                const card = createTrackCard(track, getTracksByIds(dbHistory));
                recentSongsGrid.appendChild(card);
            });
        }
    }

    // Show top tracks on home
    const grid = document.getElementById('home-track-grid');
    if (grid) {
        grid.innerHTML = '';
        dbTracks.slice(0, 16).forEach(track => {
            const card = createTrackCard(track, dbTracks);
            grid.appendChild(card);
        });
    }

    // Render Artists as circular cards
    const topArtistsGrid = document.getElementById('top-artists-grid');
    if (topArtistsGrid) {
        topArtistsGrid.innerHTML = '';
        dbArtists.slice(0, 8).forEach(artist => {
            const div = document.createElement('div');
            div.className = 'track-card';
            div.innerHTML = `
                <div class="track-img-container">
                    <img src="${artist.image}" alt="${artist.name}" loading="lazy">
                    <div class="play-overlay">
                        <button onclick="playArtist('${artist.id}')"><i class="fa-solid fa-play"></i></button>
                    </div>
                </div>
                <div class="track-info">
                    <h4>${artist.name}</h4>
                    <p>${artist.genre}</p>
                </div>
            `;
            topArtistsGrid.appendChild(div);
        });
    }
}

function renderDiscover() {
    // Determine random/specific songs for Discover Recommendations
    const recommendedGrid = document.getElementById('recommended-grid');
    if (recommendedGrid) {
        recommendedGrid.innerHTML = '';
        // Randomly pick a few tracks for recommendations
        const shuffled = [...dbTracks].sort(() => 0.5 - Math.random());
        shuffled.slice(0, 8).forEach(track => {
            const card = createTrackCard(track, dbTracks);
            recommendedGrid.appendChild(card);
        });
    }

    // Render most listened songs
    renderMostListened();

    // Render popular artists
    const discoverArtistsGrid = document.getElementById('discover-artists-grid');
    if (discoverArtistsGrid) {
        discoverArtistsGrid.innerHTML = '';
        // Get popular artists (limit to 12)
        const popularArtists = dbArtists.slice(0, 12);
        popularArtists.forEach(artist => {
            const artistCard = createArtistCard(artist);
            discoverArtistsGrid.appendChild(artistCard);
        });
    }

    // Render global hits (top English tracks)
    const globalHitsGrid = document.getElementById('global-hits-grid');
    if (globalHitsGrid) {
        globalHitsGrid.innerHTML = '';
        // Get English tracks and popular hits
        const englishTracks = dbTracks.filter(track => 
            track.artistId === 'a4' || track.artistId === 'a5' || track.artistId === 'a8' || 
            track.artistId === 'a10' || track.artistId === 'a15' || track.artistId === 'a18' ||
            track.artistId === 'a19' || track.artistId === 'a20' || track.artistId === 'a21' ||
            track.artistId === 'a23' || track.artistId === 'a24' || track.artistId === 'a29' ||
            track.artistId === 'a30' || track.artistId === 'a31' || track.artistId === 'a32' ||
            track.artistId === 'a33' || track.artistId === 'a34' || track.artistId === 'a35' ||
            track.artistId === 'a36'
        );
        const shuffledEnglish = [...englishTracks].sort(() => 0.5 - Math.random());
        shuffledEnglish.slice(0, 8).forEach(track => {
            const card = createTrackCard(track, dbTracks);
            globalHitsGrid.appendChild(card);
        });
    }

    // List all available songs in the grid
    const resultsGrid = document.getElementById('search-results-grid');
    if (resultsGrid) {
        resultsGrid.innerHTML = '';
        dbTracks.forEach(track => {
            const card = createTrackCard(track, dbTracks);
            resultsGrid.appendChild(card);
        });
    }
}


// Render Artists categorized by Region
function renderArtists() {
    const regions = {
        telugu: document.getElementById('artists-telugu'),
        tamil: document.getElementById('artists-tamil'),
        hindi: document.getElementById('artists-hindi'),
        english: document.getElementById('artists-english')
    };

    // reset all
    Object.values(regions).forEach(c => { if (c) c.innerHTML = ''; });

    dbArtists.forEach(artist => {
        const div = document.createElement('div');
        div.className = 'list-item';
        div.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}" class="list-image round">
            <div class="list-info">
                <h4>${artist.name}</h4>
                <p>${artist.genre}</p>
            </div>
            <button class="btn-outline" onclick="playArtist('${artist.id}')">Play top tracks</button>
        `;

        let targetId = artist.region || 'english';
        if (regions[targetId]) {
            regions[targetId].appendChild(div);
        }
    });
}

// Render Recent History
function renderRecent() {
    const container = document.getElementById('recent-list-container');
    container.innerHTML = '';

    if (dbHistory.length === 0) {
        container.innerHTML = '<p class="empty-state">No recently played tracks.</p>';
        return;
    }

    dbHistory.forEach(trackId => {
        const track = dbTracks.find(t => t.id === trackId);
        if (track) {
            const el = createListLayoutItem(track, getTracksByIds(dbHistory));
            container.appendChild(el);
        }
    });
}

// Render Favorites Playlist
function renderFavorites() {
    const container = document.getElementById('favorites-list-container');
    container.innerHTML = '';

    if (dbFavorites.length === 0) {
        container.innerHTML = '<p class="empty-state">No favorite tracks yet. Click the heart icon on a playing track to save it!</p>';
        return;
    }

    dbFavorites.forEach(trackId => {
        const track = dbTracks.find(t => t.id === trackId);
        if (track) {
            const el = createListLayoutItem(track, getTracksByIds(dbFavorites));
            container.appendChild(el);
        }
    });
}

// Render Top Charts
const chartCache = {};
const englishChartFallback = [
    { id: 'eng_1', title: "Blinding Lights", artist: "The Weeknd", artistId: "a32", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5o/6p/7a/5o6p7a8b-9c0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/17/b4/8f/17b48f9a-0b93-6bb8-fe1d-3a16623c2cfb/mzaf_9560252727299052414.plus.aac.p.m4a" },
    { id: 'eng_2', title: "Shape of You", artist: "Ed Sheeran", artistId: "a33", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a" },
    { id: 'eng_3', title: "Starboy", artist: "The Weeknd & Daft Punk", artistId: "a31", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4n/5o/6z/4n5o6z7a-8b9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/3f/a0/ba/3fa0ba5b-088d-bcf2-e4bd-355a5d505617/mzaf_3355567893400963384.plus.aac.p.m4a" },
    { id: 'eng_4', title: "Levitating", artist: "Dua Lipa", artistId: "a8", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/59/dc/4d/59dc4dda-93ff-8f1c-c536-f005f6ea6af5/mzaf_3066686759813252385.plus.aac.p.m4a" },
    { id: 'eng_5', title: "Anti-Hero", artist: "Taylor Swift", artistId: "a5", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/3d/01/f2/3d01f2e5-5a08-835f-3d30-d031720b2b80/22UM1IM07364.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1d/56/2a/1d562a07-dc5f-a9c0-1f36-2051a8c14eb7/mzaf_7214829135431340590.plus.aac.p.m4a" },
    { id: 'eng_6', title: "Bad Habits", artist: "Ed Sheeran", artistId: "a21", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9r/0s/1k/9r0s1k2l-3m4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/9r/0s/1k/9r0s1k2l-3m4a-5b6c-7d8e-9f0a1b2c3d4e/mzaf_9012345678901234567.plus.aac.p.m4a" },
    { id: 'eng_7', title: "Heat Waves", artist: "Glass Animals", artistId: "a16", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4h/5i/6f/4h5i6f7g-8h9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/4h/5i/6f/4h5i6f7g-8h9a-0b1c-2d3e-4f5a6b7c8d9e/mzaf_4567890123456789012.plus.aac.p.m4a" },
    { id: 'eng_8', title: "Stay", artist: "The Kid LAROI & Justin Bieber", artistId: "a17", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5j/6k/7g/5j6k7g8h-9i0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/5j/6k/7g/5j6k7g8h-9i0a-1b2c-3d4e-5f6a7b8c9d0e/mzaf_5678901234567890123.plus.aac.p.m4a" },
    { id: 'eng_9', title: "Good 4 U", artist: "Olivia Rodrigo", artistId: "a18", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6l/7m/8h/6l7m8h9i-0j1a-2b3c-4d5e-6f7a8b9c0d1e/23UM1IM67890.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/6l/7m/8h/6l7m8h9i-0j1a-2b3c-4d5e-6f7a8b9c0d1e/mzaf_6789012345678901234.plus.aac.p.m4a" },
    { id: 'eng_10', title: "Industry Baby", artist: "Lil Nas X & Jack Harlow", artistId: "a19", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7n/8o/9i/7n8o9i0j-1k2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/7n/8o/9i/7n8o9i0j-1k2a-3b4c-5d6e-7f8a9b0c1d2e/mzaf_7890123456789012345.plus.aac.p.m4a" },
    { id: 'eng_11', title: "Peaches", artist: "Justin Bieber", artistId: "a20", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8p/9q/0j/8p9q0j1k-2l3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8p/9q/0j/8p9q0j1k-2l3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a" },
    { id: 'eng_12', title: "Shivers", artist: "Ed Sheeran", artistId: "a21", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0t/1u/2l/0t1u2l3m-4n5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0t/1u/2l/0t1u2l3m-4n5a-6b7c-8d9e-0f1a2b3c4d5e/mzaf_0123456789012345678.plus.aac.p.m4a" },
    { id: 'eng_13', title: "Cold Heart", artist: "Elton John & Dua Lipa", artistId: "a22", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 'eng_14', title: "Enemy", artist: "Imagine Dragons & JID", artistId: "a23", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 'eng_15', title: "Believer", artist: "Imagine Dragons", artistId: "a23", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 'eng_16', title: "Thunder", artist: "Imagine Dragons", artistId: "a23", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7g/8h/9s/7g8h9s0t-1u2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/7g/8h/9s/7g8h9s0t-1u2a-3b4c-5d6e-7f8a9b0c1d2e/mzaf_7890123456789012345.plus.aac.p.m4a" },
    { id: 'eng_17', title: "Radioactive", artist: "Imagine Dragons", artistId: "a28", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5d/6e/7q/5d6e7q8r-9s0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/2e/99/e2/2e99e2ff-1d1b-615c-9d87-1cd3b122ad7f/mzaf_4773314624008046164.plus.aac.p.m4a" },
    { id: 'eng_18', title: "Demons", artist: "Imagine Dragons", artistId: "a23", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6e/7f/8r/6e7f8r9s-0t1a-2b3c-4d5e-6f7a8b9c0d1e/23UM1IM67890.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/6e/7f/8r/6e7f8r9s-0t1a-2b3c-4d5e-6f7a8b9c0d1e/mzaf_6789012345678901234.plus.aac.p.m4a" },
    { id: 'eng_19', title: "Happier", artist: "Marshmello", artistId: "a29", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a" },
    { id: 'eng_20', title: "Alone", artist: "Marshmello", artistId: "a29", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/mzaf_9012345678901234567.plus.aac.p.m4a" },
    { id: 'eng_21', title: "Silence", artist: "Marshmello ft. Khalid", artistId: "a29", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/mzaf_0123456789012345678.plus.aac.p.m4a" },
    { id: 'eng_22', title: "Closer", artist: "The Chainsmokers ft. Halsey", artistId: "a30", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1k/2l/3w/1k2l3w4x-5y6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1k/2l/3w/1k2l3w4x-5y6a-7b8c-9d0e-1f2a3b4c5d6e/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 'eng_23', title: "Don't Let Me Down", artist: "The Chainsmokers ft. Daya", artistId: "a30", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2l/3m/4x/2l3m4x5y-6z7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2l/3m/4x/2l3m4x5y-6z7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 'eng_24', title: "Something Just Like This", artist: "The Chainsmokers ft. Coldplay", artistId: "a30", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3m/4n/5y/3m4n5y6z-7a8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/3m/4n/5y/3m4n5y6z-7a8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 'eng_25', title: "The Hills", artist: "The Weeknd", artistId: "a32", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/6p/7q/8b/6p7q8b9c-0d1a-2b3c-4d5e-6f7a8b9c0d1e/23UM1IM67890.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/6p/7q/8b/6p7q8b9c-0d1a-2b3c-4d5e-6f7a8b9c0d1e/mzaf_6789012345678901234.plus.aac.p.m4a" },
    { id: 'eng_26', title: "Can't Feel My Face", artist: "The Weeknd", artistId: "a32", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7q/8r/9c/7q8r9c0d-1e2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/7q/8r/9c/7q8r9c0d-1e2a-3b4c-5d6e-7f8a9b0c1d2e/mzaf_7890123456789012345.plus.aac.p.m4a" },
    { id: 'eng_27', title: "Perfect", artist: "Ed Sheeran", artistId: "a33", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a" },
    { id: 'eng_28', title: "Photograph", artist: "Ed Sheeran", artistId: "a33", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/mzaf_9012345678901234567.plus.aac.p.m4a" },
    { id: 'eng_29', title: "Thinking Out Loud", artist: "Ed Sheeran", artistId: "a33", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/mzaf_0123456789012345678.plus.aac.p.m4a" },
    { id: 'eng_30', title: "Castle on the Hill", artist: "Halsey", artistId: "a34", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 'eng_31', title: "Without Me", artist: "Halsey", artistId: "a34", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 'eng_32', title: "Bad at Love", artist: "Halsey", artistId: "a34", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 'eng_33', title: "Eastside", artist: "benny blanco & Halsey & Khalid", artistId: "a35", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/mzaf_4567890123456789012.plus.aac.p.m4a" },
    { id: 'eng_34', title: "I Found You", artist: "benny blanco & Calvin Harris", artistId: "a36", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/5d/6e/7q/5d6e7q8r-9s0a-1b2c-3d4e-5f6a7b8c9d0e/23UM1IM56789.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/5d/6e/7q/5d6e7q8r-9s0a-1b2c-3d4e-5f6a7b8c9d0e/mzaf_5678901234567890123.plus.aac.p.m4a" },
    { id: 'eng_35', title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", artistId: "a25", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0t/1u/2l/0t1u2l3m-4n5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0t/1u/2l/0t1u2l3m-4n5a-6b7c-8d9e-0f1a2b3c4d5e/mzaf_0123456789012345678.plus.aac.p.m4a" },
    { id: 'eng_36', title: "24K Magic", artist: "Bruno Mars", artistId: "a26", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1v/2w/3m/1v2w3m4n-5o6a-7b8c-9d0e-1f2a3b4c5d6e/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 'eng_37', title: "Talking to the Moon", artist: "Bruno Mars", artistId: "a26", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2x/3y/4n/2x3y4n5o-6p7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 'eng_38', title: "Counting Stars", artist: "OneRepublic", artistId: "a27", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/3z/4a/5o/3z4a5o6p-7q8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 'eng_39', title: "Apologize", artist: "OneRepublic", artistId: "a27", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/4b/5c/6p/4b5c6p7q-8r9a-0b1c-2d3e-4f5a6b7c8d9e/mzaf_4567890123456789012.plus.aac.p.m4a" },
    { id: 'eng_40', title: "Blank Space", artist: "Taylor Swift", artistId: "a5", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c1/31/18/c131181b-ca3e-d945-16b2-48ea6bcd64d4/23UM1IM11868.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/f1/dd/3a/f1dd3add-0fc5-2e35-3460-923fb707f21e/mzaf_7924539200493199372.plus.aac.p.m4a" },
    { id: 'eng_41', title: "Love Story", artist: "Taylor Swift", artistId: "a5", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a" },
    { id: 'eng_42', title: "Shake It Off", artist: "Taylor Swift", artistId: "a5", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/mzaf_9012345678901234567.plus.aac.p.m4a" },
    { id: 'eng_43', title: "Willow", artist: "Taylor Swift", artistId: "a5", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/23UM1IM89012.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8h/9i/0t/8h9i0t1u-2v3a-4b5c-6d7e-8f9a0b1c2d3e/mzaf_8901234567890123456.plus.aac.p.m4a" },
    { id: 'eng_44', title: "Cardigan", artist: "Taylor Swift", artistId: "a5", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/7g/8h/9s/7g8h9s0t-1u2a-3b4c-5d6e-7f8a9b0c1d2e/23UM1IM78901.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/7g/8h/9s/7g8h9s0t-1u2a-3b4c-5d6e-7f8a9b0c1d2e/mzaf_7890123456789012345.plus.aac.p.m4a" },
    { id: 'eng_45', title: "drivers license", artist: "Olivia Rodrigo", artistId: "a18", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/23UM1IM90123.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/9i/0j/1u/9i0j1u2v-3w4a-5b6c-7d8e-9f0a1b2c3d4e/mzaf_9012345678901234567.plus.aac.p.m4a" },
    { id: 'eng_46', title: "Deja Vu", artist: "Olivia Rodrigo", artistId: "a18", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/23UM1IM01234.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/0j/1k/2v/0j1k2v3w-4x5a-6b7c-8d9e-0f1a2b3c4d5e/mzaf_0123456789012345678.plus.aac.p.m4a" },
    { id: 'eng_47', title: "Montero (Call Me By Your Name)", artist: "Lil Nas X", artistId: "a19", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1k/2l/3w/1k2l3w4x-5y6a-7b8c-9d0e-1f2a3b4c5d6e/23UM1IM12345.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/1k/2l/3w/1k2l3w4x-5y6a-7b8c-9d0e-1f2a3b4c5d6e/mzaf_1234567890123456789.plus.aac.p.m4a" },
    { id: 'eng_48', title: "THATS WHAT I WANT", artist: "Lil Nas X", artistId: "a19", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/2l/3m/4x/2l3m4x5y-6z7a-8b9c-0d1e-2f3a4b5c6d7e/23UM1IM23456.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2l/3m/4x/2l3m4x5y-6z7a-8b9c-0d1e-2f3a4b5c6d7e/mzaf_2345678901234567890.plus.aac.p.m4a" },
    { id: 'eng_49', title: "Ghost", artist: "Justin Bieber", artistId: "a20", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/3m/4n/5y/3m4n5y6z-7a8a-9b0c-1d2e-3f4a5b6c7d8e/23UM1IM34567.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/3m/4n/5y/3m4n5y6z-7a8a-9b0c-1d2e-3f4a5b6c7d8e/mzaf_3456789012345678901.plus.aac.p.m4a" },
    { id: 'eng_50', title: "Hold On", artist: "Justin Bieber", artistId: "a20", cover: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4n/5o/6z/4n5o6z7a-8b9a-0b1c-2d3e-4f5a6b7c8d9e/23UM1IM45678.rgb.jpg/600x600bb.jpg", audioSrc: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/4n/5o/6z/4n5o6z7a-8b9a-0b1c-2d3e-4f5a6b7c8d9e/mzaf_4567890123456789012.plus.aac.p.m4a" }
];

async function renderChart(language) {
    const container = document.getElementById('chart-list-container');
    const titleEl = document.getElementById('chart-title');
    const loadingEl = document.getElementById('chart-loading');

    let query = language;
    if (language === 'english') query = 'english pop';
    titleEl.textContent = `Top 100 ${language.charAt(0).toUpperCase() + language.slice(1)} Songs`;

    container.innerHTML = '';

    if (chartCache[language]) {
        chartCache[language].forEach(track => {
            container.appendChild(createListLayoutItem(track, chartCache[language]));
        });
        return;
    }

    loadingEl.style.display = 'block';

    try {
        // For English, use our curated list of 50 songs instead of API
        if (language === 'english') {
            loadingEl.style.display = 'none';
            const formatTracks = englishChartFallback;
            chartCache[language] = formatTracks;

            // Smart database merge so favorites work seamlessly
            let hasNew = false;
            formatTracks.forEach(ft => {
                if (!dbTracks.find(dt => dt.id === ft.id)) {
                    dbTracks.push(ft);
                    hasNew = true;
                }
            });
            if (hasNew) localStorage.setItem('saregama_tracks', JSON.stringify(dbTracks));

            formatTracks.forEach(track => {
                container.appendChild(createListLayoutItem(track, formatTracks));
            });
            return;
        }

        // For other languages, use the API
        const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=100`);
        const data = await res.json();

        const formatTracks = data.results.map(t => ({
            id: t.trackId,
            title: t.trackName,
            artist: t.artistName,
            artistId: `chart_${t.artistId}`,
            cover: (t.artworkUrl100 || '').replace('100x100bb', '600x600bb'),
            audioSrc: t.previewUrl // ALWAYS use real audio!
        })).filter(t => t.audioSrc); // Requires actual official audio link

        chartCache[language] = formatTracks;

        // Smart database merge so favorites work seamlessly
        let hasNew = false;
        formatTracks.forEach(ft => {
            if (!dbTracks.find(dt => dt.id === ft.id)) {
                dbTracks.push(ft);
                hasNew = true;
            }
        });
        if (hasNew) localStorage.setItem('saregama_tracks', JSON.stringify(dbTracks));

        loadingEl.style.display = 'none';
        formatTracks.forEach(track => {
            container.appendChild(createListLayoutItem(track, formatTracks));
        });
    } catch (e) {
        loadingEl.style.display = 'none';
        container.innerHTML = '<p class="empty-state">Failed to fetch songs. Check internet connection.</p>';
    }
}

// Components
function createArtistCard(artist) {
    const card = document.createElement('div');
    card.className = 'track-card';
    card.innerHTML = `
        <div class="track-img-container">
            <img src="${artist.image}" alt="${artist.name}">
            <div class="play-overlay">
                <button onclick="showArtistTracks('${artist.id}'); event.stopPropagation();">
                    <i class="fa-solid fa-play"></i>
                </button>
            </div>
        </div>
        <div class="track-info">
            <h4>${artist.name}</h4>
            <p>${artist.genre}</p>
        </div>
    `;
    return card;
}

function createTrackCard(track, queueList) {
    const card = document.createElement('div');
    card.className = 'track-card';
    const isLiked = dbFavorites.includes(track.id);
    card.innerHTML = `
        <div class="track-img-container">
            <img src="${track.cover}" alt="${track.title}">
            <div class="play-overlay">
                <button onclick="playSong('${track.id}', '${btoa(JSON.stringify(queueList))}'); event.stopPropagation();">
                    <i class="fa-solid fa-play"></i>
                </button>
                <button class="like-btn ${isLiked ? 'liked' : ''}" onclick="toggleFavoriteAction('${track.id}'); event.stopPropagation();" title="Like song">
                    <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
            </div>
        </div>
        <div class="track-info">
            <h4>${track.title}</h4>
            <p>${track.artist}</p>
        </div>
    `;
    card.onclick = () => playSong(track.id, btoa(JSON.stringify(queueList)));
    return card;
}

function createListLayoutItem(track, queueList) {
    const div = document.createElement('div');
    div.className = 'list-item';
    div.innerHTML = `
        <div class="list-item-left" onclick="playSong('${track.id}', '${btoa(JSON.stringify(queueList))}')">
            <img src="${track.cover}" alt="${track.title}" class="list-image">
            <div class="list-info">
                <h4>${track.title}</h4>
                <p>${track.artist}</p>
            </div>
        </div>
        <button class="icon-btn" onclick="toggleFavoriteAction('${track.id}')">
            <i class="${dbFavorites.includes(track.id) ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
        </button>
    `;
    return div;
}


// ----------------------------------------------------
// AUDIO PLAYBACK LOGIC
// ----------------------------------------------------

window.playSongById = function (id) {
    playSong(id, btoa(JSON.stringify(dbTracks)));
}

window.playArtist = function (artistId) {
    const artistTracks = dbTracks.filter(t => t.artistId === artistId);
    if (artistTracks.length > 0) {
        playSong(artistTracks[0].id, btoa(JSON.stringify(artistTracks)));
    }
}

// Main Play Function
window.playSong = function (trackId, encodedQueue = null) {
    if (encodedQueue) {
        currentPlaylist = JSON.parse(atob(encodedQueue));
    }

    // Find index in current playlist
    const index = currentPlaylist.findIndex(t => t.id.toString() === trackId.toString());
    if (index === -1) return; // safeguard

    // If same song, toggle play/pause
    if (currentTrackIndex === index && currentPlaylist[index].id === currentPlaylist[currentTrackIndex]?.id && isPlaying) {
        pause();
        return;
    }

    loadTrack(index);
    play();
}

function loadTrack(index) {
    currentTrackIndex = index;
    const track = currentPlaylist[currentTrackIndex];
    if (!track) return;

    // Setup Audio
    if (audio.src !== track.audioSrc) {
        audio.src = track.audioSrc;
        audio.load();
    }

    // Update UI
    playerArt.src = track.cover;
    playerTitle.textContent = track.title;
    playerArtist.textContent = track.artist;
    updateFavoriteIcon(track.id);

    // Update Hero if in Home view
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.style.backgroundImage = `url('${track.cover}')`;
        const hTitle = document.getElementById('hero-title');
        const hArtist = document.getElementById('hero-artist');
        if (hTitle) hTitle.textContent = track.title;
        if (hArtist) hArtist.textContent = track.artist;
    }

    // Add to History
    addToHistory(track.id);
    
    // Increment play count
    incrementPlayCount(track.id);
}

function play() {
    audio.play().catch(e => console.log("Audio play prevented:", e));
    isPlaying = true;
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
}

function pause() {
    audio.pause();
    isPlaying = false;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
}

window.togglePlay = function () {
    if (isPlaying) {
        pause();
    } else {
        if (!audio.src) loadTrack(0);
        play();
    }
}

window.nextSong = function () {
    if (currentPlaylist.length === 0) return;
    let nextIndex = (currentTrackIndex + 1) % currentPlaylist.length;
    playSong(currentPlaylist[nextIndex].id);
}

window.prevSong = function () {
    if (currentPlaylist.length === 0) return;
    let prevIndex = (currentTrackIndex - 1 + currentPlaylist.length) % currentPlaylist.length;
    playSong(currentPlaylist[prevIndex].id);
}

// Audio Listeners
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        currentTimeEl.textContent = formatTime(audio.currentTime);
    }
});

audio.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => {
    nextSong();
});

progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    if (audio.duration) {
        audio.currentTime = (clickX / width) * audio.duration;
    }
});

let currentVolume = 0.5;
audio.volume = currentVolume;
volumeProgress.style.width = `${currentVolume * 100}%`;

// ----------------------------------------------------
// YOUTUBE INTEGRATION FOR FULL SONGS
// ----------------------------------------------------

let youtubePlayer = null;
let isYouTubeMode = false;
let currentYouTubeId = null;

// Initialize YouTube Player when API is ready
window.onYouTubeIframeAPIReady = function() {
    youtubePlayer = new YT.Player('youtube-player', {
        height: '100%',
        width: '100%',
        playerVars: {
            'playsinline': 1,
            'controls': 0,
            'disablekb': 1,
            'fs': 0,
            'modestbranding': 1,
            'rel': 0,
            'showinfo': 0,
            'autoplay': 0
        },
        events: {
            'onReady': onYouTubePlayerReady,
            'onStateChange': onYouTubePlayerStateChange
        }
    });
};

function onYouTubePlayerReady(event) {
    console.log('YouTube Player Ready');
    youtubePlayer.setVolume(currentVolume * 100);
}

function onYouTubePlayerStateChange(event) {
    // Update UI based on player state
    if (event.data === YT.PlayerState.PLAYING) {
        isPlaying = true;
        playIcon.classList.remove('fa-play');
        playIcon.classList.add('fa-pause');
        updateYouTubeProgress();
    } else if (event.data === YT.PlayerState.PAUSED) {
        isPlaying = false;
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
    } else if (event.data === YT.PlayerState.ENDED) {
        nextSong();
    }
}

// Update progress bar for YouTube
function updateYouTubeProgress() {
    if (!isYouTubeMode || !isPlaying) return;
    
    if (youtubePlayer && youtubePlayer.getCurrentTime) {
        const currentTime = youtubePlayer.getCurrentTime();
        const duration = youtubePlayer.getDuration();
        
        if (duration > 0) {
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            currentTimeEl.textContent = formatTime(currentTime);
            totalTimeEl.textContent = formatTime(duration);
        }
        
        requestAnimationFrame(updateYouTubeProgress);
    }
}

// Load YouTube video
function loadYouTubeVideo(videoId) {
    if (!youtubePlayer || !youtubePlayer.loadVideoById) {
        console.log('YouTube player not ready yet');
        return;
    }
    
    currentYouTubeId = videoId;
    isYouTubeMode = true;
    
    // Show YouTube player container
    document.getElementById('youtube-player-container').style.display = 'block';
    document.body.classList.add('youtube-mode');
    
    // Load video
    youtubePlayer.loadVideoById(videoId);
    
    // Hide audio element controls
    audio.pause();
}

// Play function for YouTube
function playYouTube() {
    if (youtubePlayer && youtubePlayer.playVideo) {
        youtubePlayer.playVideo();
    }
}

// Pause function for YouTube
function pauseYouTube() {
    if (youtubePlayer && youtubePlayer.pauseVideo) {
        youtubePlayer.pauseVideo();
    }
}

// Toggle YouTube play/pause
function toggleYouTubePlay() {
    if (!isYouTubeMode || !youtubePlayer) return;
    
    const state = youtubePlayer.getPlayerState();
    if (state === YT.PlayerState.PLAYING) {
        youtubePlayer.pauseVideo();
    } else {
        youtubePlayer.playVideo();
    }
}

// Set YouTube volume
function setYouTubeVolume(volume) {
    if (youtubePlayer && youtubePlayer.setVolume) {
        youtubePlayer.setVolume(volume * 100);
    }
}

// Seek YouTube video
function seekYouTube(seconds) {
    if (youtubePlayer && youtubePlayer.seekTo) {
        youtubePlayer.seekTo(seconds, true);
    }
}

// Modified loadTrack function to support YouTube
const originalLoadTrack = loadTrack;
window.loadTrack = function(index) {
    currentTrackIndex = index;
    const track = currentPlaylist[currentTrackIndex];
    if (!track) return;
    
    // Check if track has YouTube video ID
    if (track.youtubeId) {
        // Use YouTube for full song
        loadYouTubeVideo(track.youtubeId);
        
        // Update UI
        playerArt.src = track.cover;
        playerTitle.textContent = track.title;
        playerArtist.textContent = track.artist;
        updateFavoriteIcon(track.id);
        
        // Update Hero if in Home view
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroSection.style.backgroundImage = `url('${track.cover}')`;
            const hTitle = document.getElementById('hero-title');
            const hArtist = document.getElementById('hero-artist');
            if (hTitle) hTitle.textContent = track.title;
            if (hArtist) hArtist.textContent = track.artist;
        }
        
        // Add to History
        addToHistory(track.id);
        
        // Increment play count
        incrementPlayCount(track.id);
    } else {
        // Use regular audio source
        isYouTubeMode = false;
        document.getElementById('youtube-player-container').style.display = 'none';
        document.body.classList.remove('youtube-mode');
        
        if (youtubePlayer && youtubePlayer.stopVideo) {
            youtubePlayer.stopVideo();
        }
        
        // Call original loadTrack behavior
        originalLoadTrack(index);
    }
};

// Modified play/pause functions
const originalPlay = play;
const originalPause = pause;

window.play = function() {
    if (isYouTubeMode) {
        playYouTube();
    } else {
        originalPlay();
    }
}

window.pause = function() {
    if (isYouTubeMode) {
        pauseYouTube();
    } else {
        originalPause();
    }
}

// Modified togglePlay function
window.togglePlay = function() {
    if (isYouTubeMode) {
        toggleYouTubePlay();
    } else {
        if (isPlaying) {
            pause();
        } else {
            if (!audio.src && !currentYouTubeId) loadTrack(0);
            play();
        }
    }
}

// Update progress container click for YouTube
const originalProgressClick = progressContainer.onclick;
progressContainer.addEventListener('click', (e) => {
    if (isYouTubeMode && youtubePlayer) {
        const width = progressContainer.clientWidth;
        const clickX = e.offsetX;
        const duration = youtubePlayer.getDuration();
        if (duration > 0) {
            const seekTime = (clickX / width) * duration;
            seekYouTube(seekTime);
        }
    }
});

// Update volume control for YouTube
volumeSlider.addEventListener('click', (e) => {
    if (isYouTubeMode) {
        const width = volumeSlider.clientWidth;
        const clickX = e.offsetX;
        currentVolume = clickX / width;
        setYouTubeVolume(currentVolume);
        volumeProgress.style.width = `${currentVolume * 100}%`;
    }
});

// ----------------------------------------------------
// YOUTUBE VIDEO SEARCH FUNCTION
// ----------------------------------------------------

// Search YouTube for a song and return video ID
window.searchYouTubeForSong = async function(title, artist) {
    const query = encodeURIComponent(`${title} ${artist} official audio`);
    const searchUrl = `https://www.youtube.com/results?search_query=${query}`;
    
    // Note: Direct API search requires API key
    // For now, users need to manually find and add video IDs
    console.log(`Search YouTube: ${searchUrl}`);
    return searchUrl;
};

// Helper to add YouTube ID to a track
window.addYouTubeIdToTrack = function(trackId, youtubeId) {
    const track = dbTracks.find(t => t.id === trackId);
    if (track) {
        track.youtubeId = youtubeId;
        // Save to localStorage
        localStorage.setItem('aura_tracks', JSON.stringify(dbTracks));
        console.log(`Added YouTube ID ${youtubeId} to track ${track.title}`);
        return true;
    }
    return false;
};

volumeSlider.addEventListener('click', (e) => {
    const width = volumeSlider.clientWidth;
    let newVolume = e.offsetX / width;
    if (newVolume < 0) newVolume = 0;
    if (newVolume > 1) newVolume = 1;
    audio.volume = newVolume;
    volumeProgress.style.width = `${newVolume * 100}%`;
});


// ----------------------------------------------------
// LOCAL STORAGE LOGIC (History & Favorites)
// ----------------------------------------------------

function addToHistory(trackId) {
    // Remove if already exists so it jumps to top
    dbHistory = dbHistory.filter(id => id !== trackId);
    // Add to front
    dbHistory.unshift(trackId);
    // Keep only last 20
    if (dbHistory.length > 20) dbHistory.pop();

    localStorage.setItem('saregama_history', JSON.stringify(dbHistory));

    // Update view if active
    if (document.getElementById('view-recent').classList.contains('active')) {
        renderRecent();
    }
}

window.clearHistory = function () {
    dbHistory = [];
    localStorage.setItem('saregama_history', JSON.stringify(dbHistory));
    renderRecent();
}

window.toggleFavorite = function () {
    const currentTrack = currentPlaylist[currentTrackIndex];
    if (!currentTrack) return;
    toggleFavoriteAction(currentTrack.id);
}

window.toggleFavoriteAction = function (trackId) {
    if (dbFavorites.includes(trackId)) {
        dbFavorites = dbFavorites.filter(id => id !== trackId);
    } else {
        dbFavorites.push(trackId);
    }
    localStorage.setItem('saregama_favorites', JSON.stringify(dbFavorites));

    // Update views if active
    updateFavoriteViews();

    // Update icons
    const currentTrack = currentPlaylist[currentTrackIndex];
    if (currentTrack && currentTrack.id === trackId) {
        updateFavoriteIcon(trackId);
    }
}

function updateFavoriteIcon(trackId) {
    if (dbFavorites.includes(trackId)) {
        favoriteIcon.classList.remove('fa-regular');
        favoriteIcon.classList.add('fa-solid');
        favoriteIcon.style.color = 'var(--secondary)';
    } else {
        favoriteIcon.classList.remove('fa-solid');
        favoriteIcon.classList.add('fa-regular');
        favoriteIcon.style.color = 'var(--text-muted)';
    }
}

function getTracksByIds(idsArray) {
    return idsArray.map(id => dbTracks.find(t => t.id === id)).filter(t => t !== undefined);
}

function incrementPlayCount(trackId) {
    if (!dbPlayCounts[trackId]) {
        dbPlayCounts[trackId] = 0;
    }
    dbPlayCounts[trackId]++;
    localStorage.setItem('saregama_play_counts', JSON.stringify(dbPlayCounts));
}

function getMostListenedTracks() {
    return dbTracks
        .map(track => ({
            ...track,
            playCount: dbPlayCounts[track.id] || 0
        }))
        .filter(track => track.playCount > 0)
        .sort((a, b) => b.playCount - a.playCount)
        .slice(0, 8);
}

function renderMostListened() {
    const mostListenedGrid = document.getElementById('most-listened-grid');
    if (mostListenedGrid) {
        mostListenedGrid.innerHTML = '';
        const mostListened = getMostListenedTracks();
        
        if (mostListened.length === 0) {
            // Show some default tracks if no play history
            const defaultTracks = dbTracks.slice(0, 6);
            defaultTracks.forEach(track => {
                const card = createTrackCard(track, dbTracks);
                mostListenedGrid.appendChild(card);
            });
        } else {
            mostListened.forEach(track => {
                const card = createTrackCard(track, dbTracks);
                mostListenedGrid.appendChild(card);
            });
        }
    }
}

window.showArtistTracks = function(artistId) {
    const artistTracks = dbTracks.filter(track => track.artistId === artistId);
    if (artistTracks.length > 0) {
        // Play the first track from this artist
        playSong(artistTracks[0].id);
    }
}

// Player Hide/Show Functionality
window.hidePlayer = function() {
    const bottomPlayer = document.querySelector('.bottom-player');
    const showPlayerBtn = document.getElementById('show-player-btn');
    
    bottomPlayer.classList.add('hidden');
    showPlayerBtn.classList.add('visible');
    
    // Save player state to localStorage
    localStorage.setItem('saregama_player_hidden', 'true');
};

window.showPlayer = function() {
    const bottomPlayer = document.querySelector('.bottom-player');
    const showPlayerBtn = document.getElementById('show-player-btn');
    
    bottomPlayer.classList.remove('hidden');
    showPlayerBtn.classList.remove('visible');
    
    // Save player state to localStorage
    localStorage.setItem('saregama_player_hidden', 'false');
};

// Check player state on page load
function checkPlayerState() {
    const isPlayerHidden = localStorage.getItem('saregama_player_hidden') === 'true';
    const bottomPlayer = document.querySelector('.bottom-player');
    const showPlayerBtn = document.getElementById('show-player-btn');
    
    if (isPlayerHidden && bottomPlayer && showPlayerBtn) {
        bottomPlayer.classList.add('hidden');
        showPlayerBtn.classList.add('visible');
    }
}

// Render All Original Songs
window.renderAllOriginalSongs = function() {
    const allOriginalSongsGrid = document.getElementById('all-original-songs-grid');
    
    if (!allOriginalSongsGrid) return;
    
    allOriginalSongsGrid.innerHTML = '';
    
    // Display all tracks from dbTracks (original songs)
    dbTracks.forEach(track => {
        const card = createTrackCard(track, dbTracks);
        allOriginalSongsGrid.appendChild(card);
    });
};

// Render Liked Songs
window.renderLikedSongs = function() {
    const likedSongsGrid = document.getElementById('liked-songs-grid');
    const likedCount = document.getElementById('liked-count');
    
    if (!likedSongsGrid) return;
    
    likedSongsGrid.innerHTML = '';
    
    const likedTracks = getTracksByIds(dbFavorites);
    
    // Update count
    if (likedCount) {
        likedCount.textContent = `${likedTracks.length} liked song${likedTracks.length !== 1 ? 's' : ''}`;
    }
    
    if (likedTracks.length === 0) {
        likedSongsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fa-solid fa-heart" style="font-size: 48px; margin-bottom: 16px; opacity: 0.5;"></i>
                <h3>No liked songs yet</h3>
                <p>Start liking songs to see them here</p>
            </div>
        `;
        return;
    }
    
    likedTracks.forEach(track => {
        const card = createTrackCard(track, likedTracks);
        likedSongsGrid.appendChild(card);
    });
};

// Update views if active when favorites change
function updateFavoriteViews() {
    if (document.getElementById('view-liked-songs').classList.contains('active')) {
        renderLikedSongs();
    }
    if (document.getElementById('view-playlists').classList.contains('active')) {
        renderFavorites();
    }
}

// Search Functionality
let searchTimeout;
let currentSearchTerm = '';

window.performSearch = function(term) {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    const searchResultsGrid = document.getElementById('search-results-grid');
    
    currentSearchTerm = term.toLowerCase().trim();
    
    // Show/hide clear button
    if (currentSearchTerm) {
        clearBtn.style.display = 'flex';
    } else {
        clearBtn.style.display = 'none';
    }
    
    // Clear previous timeout
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }
    
    // Debounce search
    searchTimeout = setTimeout(() => {
        if (currentSearchTerm) {
            const results = searchTracks(currentSearchTerm);
            displaySearchResults(results);
        } else {
            // Show all tracks when search is empty
            searchResultsGrid.innerHTML = '';
            dbTracks.forEach(track => {
                const card = createTrackCard(track, dbTracks);
                searchResultsGrid.appendChild(card);
            });
        }
    }, 300);
};

function searchTracks(term) {
    return dbTracks.filter(track => {
        const titleMatch = track.title.toLowerCase().includes(term);
        const artistMatch = track.artist.toLowerCase().includes(term);
        return titleMatch || artistMatch;
    });
}

function displaySearchResults(results) {
    const searchResultsGrid = document.getElementById('search-results-grid');
    searchResultsGrid.innerHTML = '';
    
    if (results.length === 0) {
        searchResultsGrid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-music-slash"></i>
                <h3>Song Unavailable</h3>
                <p>The song or artist you're looking for is not available in our library</p>
                <p style="font-size: 14px; margin-top: 8px; opacity: 0.7;">Try searching for available songs and artists</p>
            </div>
        `;
        return;
    }
    
    results.forEach(track => {
        const card = createTrackCard(track, results);
        searchResultsGrid.appendChild(card);
    });
}

window.clearSearch = function() {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    
    searchInput.value = '';
    clearBtn.style.display = 'none';
    performSearch('');
};

// Initialize drag and drop functionality
function initializeDragAndDrop() {
    const draggableSections = document.querySelectorAll('.draggable-section');
    
    draggableSections.forEach(section => {
        section.addEventListener('dragstart', handleDragStart);
        section.addEventListener('dragend', handleDragEnd);
        section.addEventListener('dragover', handleDragOver);
        section.addEventListener('drop', handleDrop);
        section.addEventListener('dragenter', handleDragEnter);
        section.addEventListener('dragleave', handleDragLeave);
        
        // Make section draggable
        section.draggable = true;
    });
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    
    // Remove all drag-over classes
    document.querySelectorAll('.drag-over').forEach(elem => {
        elem.classList.remove('drag-over');
    });
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragEnter(e) {
    if (this !== draggedElement) {
        this.classList.add('drag-over');
    }
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    if (draggedElement !== this) {
        // Swap the sections
        const draggedParent = draggedElement.parentNode;
        const targetParent = this.parentNode;
        
        // Get all sections in the nav
        const allSections = Array.from(targetParent.children).filter(child => 
            child.tagName === 'H3' && child.classList.contains('draggable-section')
        );
        
        const draggedIndex = allSections.indexOf(draggedElement);
        const targetIndex = allSections.indexOf(this);
        
        if (draggedIndex < targetIndex) {
            // Move down
            targetParent.insertBefore(draggedElement, this.nextSibling);
        } else {
            // Move up
            targetParent.insertBefore(draggedElement, this);
        }
        
        // Save the new order to localStorage
        saveSectionOrder();
    }
    
    this.classList.remove('drag-over');
    return false;
}

function saveSectionOrder() {
    const nav = document.querySelector('.main-nav');
    const sections = Array.from(nav.children).filter(child => 
        child.tagName === 'H3' && child.classList.contains('draggable-section')
    );
    
    const sectionOrder = sections.map(section => {
        const title = section.textContent.trim().replace(/^[^\w\s]+/, '').trim();
        return title;
    });
    
    localStorage.setItem('saregama_section_order', JSON.stringify(sectionOrder));
}

function loadSectionOrder() {
    const savedOrder = localStorage.getItem('saregama_section_order');
    if (!savedOrder) return;
    
    try {
        const sectionOrder = JSON.parse(savedOrder);
        const nav = document.querySelector('.main-nav');
        
        sectionOrder.forEach(title => {
            const section = Array.from(nav.children).find(child => 
                child.tagName === 'H3' && child.textContent.includes(title)
            );
            if (section) {
                nav.appendChild(section);
            }
        });
    } catch (e) {
        console.log('Could not load section order:', e);
    }
}

// Initialize search event listeners
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            performSearch(e.target.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(e.target.value);
            }
        });
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }
    
    // Check player state
    checkPlayerState();
    
    // Initialize drag and drop
    initializeDragAndDrop();
    loadSectionOrder();
});

// Reset Data
window.resetData = function () {
    if (confirm("Are you sure you want to completely reset all storage and playlists?")) {
        localStorage.clear();
        location.reload();
    }
}


// ----------------------------------------------------
// BOOT
// ----------------------------------------------------
renderHome();
loadTrack(0); // Load initially so player shows artwork

// Mobile Sidebar Toggle
function toggleMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    if (sidebar && overlay) {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Close mobile sidebar when clicking a nav item
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMobileSidebar();
        }
    });
});

// ----------------------------------------------------
// LOGIN & PROFILE FUNCTIONS
// ----------------------------------------------------

// Check if user is logged in
let currentUser = JSON.parse(localStorage.getItem('vibes_current_user')) || null;

// Initialize user profile on load
document.addEventListener('DOMContentLoaded', () => {
    updateUserProfileDisplay();
});

// Open Profile if logged in, otherwise open Login
window.openProfileOrLogin = function() {
    if (currentUser) {
        openProfileModal();
    } else {
        openLoginModal();
    }
};

// Open Login Modal
window.openLoginModal = function() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

// Close Login Modal
window.closeLoginModal = function() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Handle Login
window.handleLogin = function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;
    
    // Simple validation (in a real app, you'd verify with a server)
    if (email && password) {
        // Create user object
        const user = {
            id: 'user_' + Date.now(),
            email: email,
            name: email.split('@')[0], // Use part of email as name
            avatar: null,
            joined: new Date().toISOString(),
            listenedHours: 0,
            songsPlayed: dbPlayCounts ? Object.keys(dbPlayCounts).length : 0,
            likedCount: dbFavorites ? dbFavorites.length : 0
        };
        
        // Save user
        currentUser = user;
        localStorage.setItem('vibes_current_user', JSON.stringify(user));
        
        // If remember me, set longer session (optional)
        if (rememberMe) {
            localStorage.setItem('vibes_remember_me', 'true');
        }
        
        // Update UI
        updateUserProfileDisplay();
        closeLoginModal();
        
        // Show success notification
        showNotification('Welcome to SAREGAMA VIBES!', 'success');
        
        // Clear form
        document.getElementById('login-email').value = '';
        document.getElementById('login-password').value = '';
    }
};

// Social Login (placeholder)
window.socialLogin = function(provider) {
    // In a real app, this would redirect to OAuth
    showNotification(`${provider} login coming soon!`, 'info');
};

// Show Signup (placeholder)
window.showSignup = function() {
    showNotification('Signup feature coming soon! Use login for now.', 'info');
};

// Open Profile Modal
window.openProfileModal = function() {
    const modal = document.getElementById('profile-modal');
    if (modal && currentUser) {
        // Update profile data
        document.getElementById('profile-name').textContent = currentUser.name;
        document.getElementById('profile-email').textContent = currentUser.email;
        document.getElementById('profile-songs').textContent = currentUser.songsPlayed || 0;
        document.getElementById('profile-liked').textContent = currentUser.likedCount || 0;
        document.getElementById('profile-hours').textContent = currentUser.listenedHours || 0;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
};

// Close Profile Modal
window.closeProfileModal = function() {
    const modal = document.getElementById('profile-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
};

// Edit Profile (placeholder)
window.editProfile = function() {
    showNotification('Edit profile coming soon!', 'info');
};

// View Listening History
window.viewListeningHistory = function() {
    closeProfileModal();
    switchView('recent');
};

// Logout
window.logout = function() {
    currentUser = null;
    localStorage.removeItem('vibes_current_user');
    localStorage.removeItem('vibes_remember_me');
    
    updateUserProfileDisplay();
    closeProfileModal();
    
    showNotification('Logged out successfully', 'info');
};

// Update User Profile Display
function updateUserProfileDisplay() {
    const sidebarBottom = document.getElementById('sidebar-bottom');
    const profileBtn = document.getElementById('user-profile-btn');
    const avatar = document.getElementById('user-avatar');
    const userName = document.getElementById('user-name');
    
    if (currentUser) {
        // User is logged in - show profile button
        if (sidebarBottom) sidebarBottom.style.display = 'block';
        if (userName) userName.textContent = currentUser.name;
        if (avatar) {
            avatar.innerHTML = '<i class="fa-solid fa-user-check"></i>';
        }
        if (profileBtn) {
            profileBtn.classList.add('logged-in');
        }
    } else {
        // User is not logged in - hide sidebar bottom completely
        if (sidebarBottom) sidebarBottom.style.display = 'none';
    }
}

// Simple notification function
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 12px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #1db954, #1ed760)' : type === 'error' ? '#ff4d4d' : 'var(--glass-panel)'};
        color: white;
        font-weight: 500;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.1);
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    notification.textContent = message;
    
    // Add animation keyframes if not exists
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from { opacity: 0; transform: translateX(100px); }
                to { opacity: 1; transform: translateX(0); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease reverse';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Close modals when clicking outside
document.addEventListener('click', (e) => {
    const loginModal = document.getElementById('login-modal');
    const profileModal = document.getElementById('profile-modal');
    
    if (loginModal && e.target === loginModal) {
        closeLoginModal();
    }
    if (profileModal && e.target === profileModal) {
        closeProfileModal();
    }
});

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLoginModal();
        closeProfileModal();
    }
});
