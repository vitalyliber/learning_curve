// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json({ first_name: "John", last_name: "Doe", age: 143 });
};
