import PDFMerger from "pdf-merger-js";

let merger = new PDFMerger();
const mergerPDF = async (p1, p2) => {
    let a = await merger.add(p1); //merge all pages. parameter is the path to file and filename.
    let b = await merger.add(p2); // merge only page 2
  // let c = await merger.add("pdf2.pdf", [1, 3]); // merge the pages 1 and 3
  // let e = await merger.add("pdf2.pdf", "4, 7, 8"); // merge the pages 4, 7 and 8
  // let f = await merger.add("pdf3.pdf", "3 to 5"); //merge pages 3 to 5 (3,4,5)
  // let g = await merger.add("pdf3.pdf", "3-5"); //merge pages 3 to 5 (3,4,5)
  let d = new Date().getTime();
  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d;
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};

export { mergerPDF };
