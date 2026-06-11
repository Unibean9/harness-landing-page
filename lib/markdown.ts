export function markdownToHtml(markdown: string): string {
  const lines = markdown.split("\n");
  let htmlResult = "";
  let inCodeBlock = false;
  let codeLanguage = "";
  let codeContent: string[] = [];
  let inList = false;
  let inTable = false;
  let tableRows: string[][] = [];
  let inBlockquote = false;
  let blockquoteLines: string[] = [];

  const flushList = () => {
    if (inList) {
      htmlResult += "</ul>\n";
      inList = false;
    }
  };

  const flushTable = () => {
    if (inTable) {
      if (tableRows.length > 0) {
        let tableHtml = '<div class="overflow-x-auto my-6"><table class="min-w-full border-collapse border border-border text-sm text-left">';
        
        // Header
        const headers = tableRows[0];
        tableHtml += '<thead class="bg-brand-neutral font-semibold border-b border-border">';
        tableHtml += '<tr>';
        headers.forEach(h => {
          tableHtml += `<th class="px-4 py-3 border border-border">${inlineStyles(h)}</th>`;
        });
        tableHtml += '</tr></thead>';

        // Body
        tableHtml += '<tbody class="divide-y divide-border">';
        const bodyRows = tableRows.slice(1);
        bodyRows.forEach(row => {
          // Skip alignment separator row like |---|---|
          if (row.every(cell => /^[:-|-]+$/.test(cell.trim()))) {
            return;
          }
          tableHtml += '<tr>';
          row.forEach(cell => {
            tableHtml += `<td class="px-4 py-3 border border-border">${inlineStyles(cell)}</td>`;
          });
          tableHtml += '</tr>';
        });
        tableHtml += '</tbody></table></div>\n';
        htmlResult += tableHtml;
      }
      tableRows = [];
      inTable = false;
    }
  };

  const flushBlockquote = () => {
    if (inBlockquote) {
      const quoteText = blockquoteLines.join("\n");
      // Check for alert boxes like > [!NOTE], > [!IMPORTANT]
      const alertMatch = quoteText.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*([\s\S]*)$/i);
      
      if (alertMatch) {
        const type = alertMatch[1].toUpperCase();
        const content = alertMatch[2].trim();
        let alertStyles = "border-l-4 p-4 rounded-[12px] my-6 ";
        let alertHeader = "";

        switch (type) {
          case "NOTE":
            alertStyles += "bg-blue-500/10 border-blue-500 text-blue-200";
            alertHeader = "Lưu ý";
            break;
          case "TIP":
            alertStyles += "bg-green-500/10 border-green-500 text-green-200";
            alertHeader = "Mẹo";
            break;
          case "IMPORTANT":
            alertStyles += "bg-amber-500/10 border-amber-500 text-amber-200";
            alertHeader = "Quan trọng";
            break;
          case "WARNING":
            alertStyles += "bg-red-500/10 border-red-500 text-red-200";
            alertHeader = "Cảnh báo";
            break;
          case "CAUTION":
            alertStyles += "bg-red-600/20 border-red-600 text-red-100";
            alertHeader = "Thận trọng";
            break;
        }

        htmlResult += `<div class="${alertStyles}">`;
        htmlResult += `<p class="font-bold text-xs uppercase tracking-wider mb-1">${alertHeader}</p>`;
        htmlResult += `<div>${markdownToHtml(content)}</div>`;
        htmlResult += `</div>\n`;
      } else {
        htmlResult += `<blockquote class="border-l-4 border-brand-tertiary bg-brand-neutral pl-4 pr-2 py-3 italic my-6 text-brand-primary/80 rounded-r-[8px]">\n${markdownToHtml(quoteText)}\n</blockquote>\n`;
      }
      blockquoteLines = [];
      inBlockquote = false;
    }
  };

  const inlineStyles = (text: string): string => {
    let result = text;
    // Escape HTML tags to prevent broken rendering (except custom class divs if any)
    result = result
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Restore safe inline tags we want to support
    result = result
      .replace(/&lt;br\s*\/?&gt;/gi, "<br/>")
      .replace(/&lt;strong&gt;([\s\S]*?)&lt;\/strong&gt;/gi, "<strong>$1</strong>")
      .replace(/&lt;em&gt;([\s\S]*?)&lt;\/em&gt;/gi, "<em>$1</em>");

    // Code inline: `code`
    result = result.replace(/`([^`]+)`/g, '<code class="bg-brand-neutral border border-border px-1.5 py-0.5 rounded-[6px] font-mono text-sm text-brand-tertiary">$1</code>');

    // Bold: **text**
    result = result.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

    // Images: ![alt](url)
    result = result.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, url) => {
      return `<img src="${url}" alt="${alt}" class="rounded-xl my-6 max-w-full mx-auto" />`;
    });

    // Links: [text](url)
    result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      if (url.includes("/lectures/")) {
        const item = url.split("/lectures/")[1].replace(/\/$/, "");
        return `<a href="/khai-niem?tab=lectures&item=${item}" class="text-brand-tertiary hover:underline transition">${text}</a>`;
      }
      if (url.includes("/projects/")) {
        const parts = url.split("/projects/");
        const item = parts[1] ? parts[1].replace(/\/$/, "") : "overview";
        return `<a href="/du-an?tab=projects&item=${item || "overview"}" class="text-brand-tertiary hover:underline transition">${text}</a>`;
      }
      if (url.includes("/resources/")) {
        const parts = url.split("/resources/");
        const item = parts[1] ? parts[1].replace(/\/$/, "") : "overview";
        return `<a href="/tai-nguyen?tab=library&item=${item || "overview"}" class="text-brand-tertiary hover:underline transition">${text}</a>`;
      }
      if (url.endsWith(".md") && !url.startsWith("http")) {
        const cleanItem = url.replace(/\.md$/, "");
        return `<a href="/khai-niem?tab=lectures&item=${cleanItem}" class="text-brand-tertiary hover:underline transition">${text}</a>`;
      }
      return `<a href="${url}" class="text-brand-tertiary hover:underline transition">${text}</a>`;
    });

    // Italic: *text* or _text_ (run after links and images to protect underscores inside URLs, and use boundary checks)
    result = result.replace(/(^|\s)\*([^*]+)\*(?=$|\s|[.,!?;:])/g, '$1<em>$2</em>');
    result = result.replace(/(^|\s)_([^_]+)_(?=$|\s|[.,!?;:])/g, '$1<em>$2</em>');

    return result;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // 1. Code Blocks
    if (trimmed.startsWith("```")) {
      if (inCodeBlock) {
        // End code block
        const escapedCode = codeContent.join("\n")
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        htmlResult += `<pre class="bg-brand-neutral border border-border p-5 rounded-[16px] font-mono text-sm overflow-x-auto my-6 text-foreground"><code class="language-${codeLanguage}">${escapedCode}</code></pre>\n`;
        codeContent = [];
        inCodeBlock = false;
      } else {
        // Start code block
        flushList();
        flushTable();
        flushBlockquote();
        inCodeBlock = true;
        codeLanguage = trimmed.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      continue;
    }

    // 2. Blockquotes
    if (trimmed.startsWith(">")) {
      flushList();
      flushTable();
      inBlockquote = true;
      const quoteText = line.replace(/^\s*>\s?/, "");
      blockquoteLines.push(quoteText);
      continue;
    } else if (inBlockquote && trimmed !== "") {
      // Continuation of blockquote
      blockquoteLines.push(trimmed);
      continue;
    } else {
      flushBlockquote();
    }

    // 3. Lists (unordered)
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      flushTable();
      if (!inList) {
        htmlResult += '<ul class="space-y-2.5 my-5 list-none">\n';
        inList = true;
      }
      const itemContent = line.replace(/^\s*[-*]\s+/, "");
      htmlResult += `<li class="flex items-start gap-2.5 text-brand-primary/80"><span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-tertiary"></span><span>${inlineStyles(itemContent)}</span></li>\n`;
      continue;
    } else if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || /^\d+\.\s+/.test(trimmed)) {
      flushTable();
      if (!inList) {
        htmlResult += '<ol class="space-y-2.5 my-5 list-decimal pl-6">\n';
        inList = true;
      }
      const itemContent = line.replace(/^\s*\d+\.\s+/, "");
      htmlResult += `<li class="text-brand-primary/80">${inlineStyles(itemContent)}</li>\n`;
      continue;
    } else {
      flushList();
    }

    // 4. Tables
    if (trimmed.startsWith("|")) {
      inTable = true;
      const cells = line.split("|").map(cell => cell.trim()).filter((_, index, arr) => index > 0 && index < arr.length - 1);
      tableRows.push(cells);
      continue;
    } else {
      flushTable();
    }

    // 5. Headings
    const slugify = (text: string) => {
      return text.toLowerCase()
        .replace(/đ/g, "d")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // remove Vietnamese diacritics
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .trim();
    };

    if (trimmed.startsWith("# ")) {
      const titleText = trimmed.slice(2);
      const id = slugify(titleText);
      htmlResult += `<h1 id="${id}" class="font-display text-4xl md:text-5xl leading-tight tracking-[-0.025em] text-brand-primary mt-12 mb-6 border-b border-border pb-4 font-bold">${inlineStyles(titleText)}</h1>\n`;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      const titleText = trimmed.slice(3);
      const id = slugify(titleText);
      htmlResult += `<h2 id="${id}" class="font-display text-3xl md:text-4xl leading-tight tracking-[-0.02em] text-brand-primary mt-12 mb-5 font-bold">${inlineStyles(titleText)}</h2>\n`;
      continue;
    }
    if (trimmed.startsWith("### ")) {
      const titleText = trimmed.slice(4);
      const id = slugify(titleText);
      htmlResult += `<h3 id="${id}" class="font-display text-2xl md:text-3xl leading-snug tracking-[-0.015em] text-brand-primary mt-10 mb-4 font-semibold">${inlineStyles(titleText)}</h3>\n`;
      continue;
    }

    // 6. Horizontal rule
    if (trimmed === "---" || trimmed === "___" || trimmed === "***") {
      htmlResult += '<hr class="my-10 border-t border-border" />\n';
      continue;
    }

    // 7. Empty line
    if (trimmed === "") {
      continue;
    }

    // 8. Paragraph (fallback)
    // Avoid enclosing custom html container tags in <p> tags
    const isHtmlTag = /^\s*<\/?([a-zA-Z0-9]+)(?:\s+[^>]*)?>/.test(line);
    if (isHtmlTag) {
      htmlResult += `${line}\n`;
    } else {
      htmlResult += `<p class="my-4.5 text-base md:text-lg leading-relaxed text-brand-primary/80">${inlineStyles(line)}</p>\n`;
    }
  }

  // Cleanup remaining blocks
  flushList();
  flushTable();
  flushBlockquote();

  return htmlResult;
}
