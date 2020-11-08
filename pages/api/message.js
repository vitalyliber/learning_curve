export default (req, res) => {
  res.statusCode = 200;
  // send data to db
  // sql.create('Message', {text: req.body.message})
  res.json({ status: `created message with text: ${req.body.message}` });
};
