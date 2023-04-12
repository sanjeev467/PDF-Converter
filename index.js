const { PDFNet } = require("@pdftron/pdfnet-node");

async function main() {
  await PDFNet.addResourceSearchPath("./");

  // check if the module is available
  if (!(await PDFNet.StructuredOutputModule.isModuleAvailable())) {
    return;
  }

  await PDFNet.Convert.fileToWord("./iot.pdf", "output.docx");
}

PDFNet.runWithCleanup(
  main,
  "demo:1680417000004:7de77255030000000008adcc41bf29142906dabde8d7a6d5688487594c"
);
