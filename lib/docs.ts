import fs from "fs";
import path from "path";

export interface DocItem {
  id: string;
  title: string;
  content: string;
  category?: string;
}

export interface DocTab {
  id: string;
  label: string;
  items: DocItem[];
}

function extractTitle(content: string, defaultTitle: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  if (match) {
    // Remove markdown links inside heading if any, e.g. [Title](url) -> Title
    return match[1].replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").trim();
  }
  return defaultTitle;
}

function getMarkdownData(filePath: string, defaultTitle: string, category?: string): DocItem | null {
  try {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const content = fs.readFileSync(filePath, "utf-8");
      const title = extractTitle(content, defaultTitle);
      const id = path.basename(filePath, ".md") === "index" 
        ? path.basename(path.dirname(filePath)) 
        : path.basename(filePath, ".md");
      return {
        id,
        title,
        content,
        category,
      };
    }
  } catch (error) {
    console.error(`Error reading doc file at ${filePath}:`, error);
  }
  return null;
}

export function getAllDocs(): DocTab[] {
  const baseDir = path.join(process.cwd(), "docs", "vi");

  // 1. Lectures Tab
  const lecturesItems: DocItem[] = [];
  // Welcome page of lectures
  const indexDoc = getMarkdownData(path.join(baseDir, "index.md"), "Chào mừng");
  if (indexDoc) {
    lecturesItems.push({
      ...indexDoc,
      id: "welcome",
      title: "Welcome",
    });
  }

  // Load Harness Engineering là gì substack doc làm bài khái niệm nền tảng
  const substackDoc = getMarkdownData(
    path.join(baseDir, "goonnguyen.substack.com_p_harness-engineering-la-gi.md"),
    "Harness Engineering là gì?"
  );
  if (substackDoc) {
    lecturesItems.push({
      ...substackDoc,
      id: "harness-engineering-la-gi",
      title: "Harness Engineering là gì?",
    });
  }

  // Load each lecture folder
  const lecturesDir = path.join(baseDir, "lectures");
  if (fs.existsSync(lecturesDir)) {
    const folders = fs.readdirSync(lecturesDir)
      .filter(f => fs.statSync(path.join(lecturesDir, f)).isDirectory())
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    folders.forEach(folder => {
      const lectureDoc = getMarkdownData(
        path.join(lecturesDir, folder, "index.md"),
        folder
      );
      if (lectureDoc) {
        lecturesItems.push(lectureDoc);
      }
    });
  }

  // 2. Projects Tab
  const projectsItems: DocItem[] = [];
  const projectsIndexDoc = getMarkdownData(path.join(baseDir, "projects", "index.md"), "Tổng quan");
  if (projectsIndexDoc) {
    projectsItems.push({
      ...projectsIndexDoc,
      id: "overview",
      title: "Tổng quan dự án",
    });
  }

  const projectsDir = path.join(baseDir, "projects");
  if (fs.existsSync(projectsDir)) {
    const folders = fs.readdirSync(projectsDir)
      .filter(f => fs.statSync(path.join(projectsDir, f)).isDirectory())
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    folders.forEach(folder => {
      const projectDoc = getMarkdownData(
        path.join(projectsDir, folder, "index.md"),
        folder
      );
      if (projectDoc) {
        projectsItems.push(projectDoc);
      }
    });
  }

  // 3. Library Tab
  const libraryItems: DocItem[] = [];
  const resourcesIndexDoc = getMarkdownData(path.join(baseDir, "resources", "index.md"), "Tổng quan");
  if (resourcesIndexDoc) {
    libraryItems.push({
      ...resourcesIndexDoc,
      id: "overview",
      title: "Tổng quan thư viện",
    });
  }

  // Load templates
  const templatesDir = path.join(baseDir, "resources", "templates");
  if (fs.existsSync(templatesDir)) {
    const files = fs.readdirSync(templatesDir)
      .filter(f => f.endsWith(".md") || f.endsWith(".json") || f.endsWith(".sh"))
      .sort();

    files.forEach(file => {
      if (file === "index.md") return;
      const filePath = path.join(templatesDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      // For JSON or Shell script, make it a code block in markdown
      let displayContent = content;
      if (file.endsWith(".json")) {
        displayContent = `# ${file}\n\n\`\`\`json\n${content}\n\`\`\``;
      } else if (file.endsWith(".sh")) {
        displayContent = `# ${file}\n\n\`\`\`bash\n${content}\n\`\`\``;
      }
      const title = extractTitle(displayContent, file);
      libraryItems.push({
        id: file,
        title,
        content: displayContent,
        category: "Templates (Mẫu sẵn dùng)",
      });
    });
  }

  // Load reference documents
  const referenceDir = path.join(baseDir, "resources", "reference");
  if (fs.existsSync(referenceDir)) {
    const files = fs.readdirSync(referenceDir)
      .filter(f => f.endsWith(".md"))
      .sort();

    files.forEach(file => {
      if (file === "index.md") return;
      const refDoc = getMarkdownData(path.join(referenceDir, file), file, "References (Tài liệu tham khảo)");
      if (refDoc) {
        libraryItems.push(refDoc);
      }
    });
  }

  // Load advanced
  const advancedDoc = getMarkdownData(
    path.join(baseDir, "resources", "openai-advanced", "index.md"),
    "OpenAI Advanced Guide",
    "Advanced (Nâng cao)"
  );
  if (advancedDoc) {
    libraryItems.push(advancedDoc);
  }

  // Load skills
  const skillsIndexDoc = getMarkdownData(
    path.join(baseDir, "skills", "index.md"),
    "Kỹ năng đối thoại với AI",
    "Kỹ năng (Skills)"
  );
  if (skillsIndexDoc) {
    libraryItems.push(skillsIndexDoc);
  }

  return [
    {
      id: "lectures",
      label: "Lectures",
      items: lecturesItems,
    },
    {
      id: "projects",
      label: "Projects",
      items: projectsItems,
    },
    {
      id: "library",
      label: "Library",
      items: libraryItems,
    },
  ];
}
