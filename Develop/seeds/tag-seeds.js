const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'rap music',
  },
  {
    tag_name: 'r&b music',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'hip hop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
