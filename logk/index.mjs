import fs from 'fs';
import path from 'path';
function criarLog(name, dirPath) {
  const diretorio = path.resolve(dirPath);
  fs.mkdir(diretorio, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    const filePath = path.join(diretorio, name);
    fs.writeFile(filePath, "utf8", (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
}
function registrarLog(name, dirPath, logMessage) {
  const diretorio = path.resolve(dirPath);
  const filePath = path.join(diretorio, name);
  fs.mkdir(diretorio, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.appendFile(filePath, logMessage + "\n", (err) => {
      if (err) {
        console.error(err);
      }
    });
  });
}
export default {
  criarLog,
  registrarLog
};
