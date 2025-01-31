import fs from 'fs';

const read = () => {
  if (fs.existsSync('favorites.json')) {
    return JSON.parse(fs.readFileSync('favorites.json', 'utf8'));
  } else {
    return {};
  }
};

const write = (favorites) => {
  fs.writeFileSync('favorites.json', JSON.stringify(favorites));
};

export default {
  read,
  write,
};
