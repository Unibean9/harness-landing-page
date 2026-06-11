import { markdownToHtml } from "./lib/markdown";

const testLine = `> Dự án thực hành: [Dự án 01. Chỉ Prompt vs. Ưu tiên Quy tắc](./../../projects/project-01-baseline-vs-minimal-harness/index.md)`;

console.log("Output HTML:", markdownToHtml(testLine));
