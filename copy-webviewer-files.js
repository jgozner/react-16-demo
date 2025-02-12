const fs = require("fs-extra");

const copyFiles = async () => {
  try {
    //Copy Apryse WebViewer
    await fs.copy(
      "./node_modules/@pdftron/webviewer/public",
      "./public/apryse"
    );

    console.log("WebViewer files copied over successfully");
  } catch (err) {
    console.error(err);
  }
};

copyFiles();
