import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src', 'posts');

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.json$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const data = JSON.parse(fileContents)
    // Combine the data with the id
    return {
      id,
      ...data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostsDataById(id) {
  // Get file names under /posts
  const fullPath = path.join(postsDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const data = JSON.parse(fileContents)
  return {
    id,
    ...data,
  }
}