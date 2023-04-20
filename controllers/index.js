displayQuote = (req, res) => {
    const data =
      "Back to school. Back to school, to prove to Dad that I'm not a fool. I got my lunch packed up, my boots tied tight, I hope I don't get in a fight. Ohhhh, back to school. Back to school. Back to school. Well, here goes nothing.";
    res.status(200).send(data);
  };
  
  module.exports = {
    displayQuote,
  };