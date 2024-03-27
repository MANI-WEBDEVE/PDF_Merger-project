import express from "express";
import { mergerPDF } from "./merge.js";
import { mergerPDF2 } from "./merge2.js";
// Assuming mergerPDF.js exports the mergerPDFs function
import path from "path";
import multer from "multer";
import url from "url";
const app = express();
const port = 3000;
const upload = multer({ dest: "uploads/" });
app.use("/static", express.static("public"));
global.__dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});
app.post("/merge", upload.array("pdfs", 2), async function (req, res) {
  console.log(req.files);
  let d = await mergerPDF(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect(`http://localhost:3000/static/${d}.pdf`);

  // res.send({ data: req.files });
});

app.post("/merge2", upload.array("pdfs", 2), async function (req, res) {
  console.log(req.files);
  let d = await mergerPDF2(
    path.join(__dirname, req.files[0].path),
    path.join(__dirname, req.files[1].path)
  );
  res.redirect(`http://localhost:3000/static/${d}.pdf`);

  // res.send({ data: req.files });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
