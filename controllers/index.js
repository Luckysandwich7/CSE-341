displayJoke = (req, res) => {
    const data =
      'What is a dogs favorite food? ...Pawsta.';
    res.status(200).send(data);
  };
  
  module.exports = {
    displayJoke,
  };