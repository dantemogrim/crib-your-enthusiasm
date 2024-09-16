export interface Crib {
  id: number;
  address: string;
  city: string;
  state: string;
  photo: string;
  alt: string;
  knownFrom: string;
  wifi: boolean;
  laundry: boolean;
}

const imgPath = '/photos';
export const cribData: Crib[] = [
  {
    id: 0,
    address: '1234 Elm St',
    city: 'Springfield',
    state: 'IL',
    photo: `${imgPath}/1-arr.webp`,
    alt: 'Example house',
    knownFrom: 'Friend',
    wifi: true,
    laundry: true,
  },
  {
    id: 1,
    address: '1234 Elm St',
    city: 'Springfield',
    state: 'IL',
    photo: `${imgPath}/2-roy.jpg`,
    alt: 'Example house',
    knownFrom: 'Friend',
    wifi: true,
    laundry: true,
  },
  {
    id: 2,
    address: '1234 Elm St',
    city: 'Springfield',
    state: 'IL',
    photo: `${imgPath}/3-vill.jpg`,
    alt: 'Example house',
    knownFrom: 'Friend',
    wifi: true,
    laundry: true,
  },
  {
    id: 3,
    address: '1234 Elm St',
    city: 'Springfield',
    state: 'IL',
    photo: `${imgPath}/4-edw.jpg`,
    alt: 'Example house',
    knownFrom: 'Friend',
    wifi: true,
    laundry: true,
  },
  {
    id: 4,
    address: '1234 Elm St',
    city: 'Springfield',
    state: 'IL',
    photo: `${imgPath}/5-sfu.jpeg`,
    alt: 'Example house',
    knownFrom: 'Friend',
    wifi: true,
    laundry: true,
  },
  {
    id: 5,
    address: '1234 Elm St',
    city: 'Springfield',
    state: 'IL',
    photo: `${imgPath}/6-bre.jpg`,
    alt: 'Example house',
    knownFrom: 'Friend',
    wifi: true,
    laundry: true,
  },
  {
    id: 6,
    address: '1234 Elm St',
    city: 'Springfield',
    state: 'IL',
    photo: `${imgPath}/7-dex.jpg`,
    alt: 'Example house',
    knownFrom: 'Friend',
    wifi: true,
    laundry: true,
  },
  {
    id: 7,
    address: '1234 Elm St',
    city: 'Springfield',
    state: 'IL',
    photo: `${imgPath}/8-gil.jpg`,
    alt: 'Example house',
    knownFrom: 'Friend',
    wifi: true,
    laundry: true,
  },
  {
    id: 8,
    address: '1234 Elm St',
    city: 'Springfield',
    state: 'IL',
    photo: '/photos/9-ghd.jpg',
    alt: 'Example house',
    knownFrom: 'Friend',
    wifi: true,
    laundry: true,
  },
  {
    id: 9,
    address: '1234 Elm St',
    city: 'Springfield',
    state: 'IL',
    photo: `${imgPath}/10-oza.jpg`,
    alt: 'Example house',
    knownFrom: 'Friend',
    wifi: true,
    laundry: true,
  },
];
