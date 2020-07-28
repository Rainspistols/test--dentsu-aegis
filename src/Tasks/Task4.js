fetch(
  'https://baconipsum.com/api/?type=all-meat&amp;paras=3&amp;start-with-lorem=1&amp;format=json'
)
  .then((res) => res.json())
  .then((data) => console.log('TASK4', JSON.stringify(data)))
  .catch((err) => console.log(err));
