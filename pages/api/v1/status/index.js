function status(request, response) {
  response.status(200).json({ nome: "test do send" });
}

export default status;
