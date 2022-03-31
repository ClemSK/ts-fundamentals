const profile = {
  name: 'clem',
  age: 29,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// need to write out the expected property of profile
const { age }: { age: number } = profile;

// you need to type the variables when destructuring
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
