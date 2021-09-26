const log = console.log;

interface fileParts {
  name: string;
  ext: string;
}

export const getFileParts = (file: string): fileParts => {
  const lastIdx = file.lastIndexOf(".");
  if (lastIdx === 0) {
    return { name: file, ext: "" };
  } else if (lastIdx === file.length - 1) {
    return { name: file, ext: "" };
  }
  return {
    name: file.slice(0, lastIdx),
    ext: file.slice(lastIdx + 1, file.length),
  };
};
