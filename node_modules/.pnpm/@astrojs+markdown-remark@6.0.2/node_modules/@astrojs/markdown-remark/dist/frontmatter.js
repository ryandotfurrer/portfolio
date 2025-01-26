import yaml from "js-yaml";
function isFrontmatterValid(frontmatter) {
  try {
    JSON.stringify(frontmatter);
  } catch {
    return false;
  }
  return typeof frontmatter === "object" && frontmatter !== null;
}
const frontmatterRE = /(?:^\uFEFF?|^\s*\n)---([\s\S]*?\n)---/;
function extractFrontmatter(code) {
  return frontmatterRE.exec(code)?.[1];
}
function parseFrontmatter(code, options) {
  const rawFrontmatter = extractFrontmatter(code);
  if (rawFrontmatter == null) {
    return { frontmatter: {}, rawFrontmatter: "", content: code };
  }
  const parsed = yaml.load(rawFrontmatter);
  const frontmatter = parsed && typeof parsed === "object" ? parsed : {};
  let content;
  switch (options?.frontmatter ?? "remove") {
    case "preserve":
      content = code;
      break;
    case "remove":
      content = code.replace(`---${rawFrontmatter}---`, "");
      break;
    case "empty-with-spaces":
      content = code.replace(
        `---${rawFrontmatter}---`,
        `   ${rawFrontmatter.replace(/[^\r\n]/g, " ")}   `
      );
      break;
    case "empty-with-lines":
      content = code.replace(`---${rawFrontmatter}---`, rawFrontmatter.replace(/[^\r\n]/g, ""));
      break;
  }
  return {
    frontmatter,
    rawFrontmatter,
    content
  };
}
export {
  extractFrontmatter,
  isFrontmatterValid,
  parseFrontmatter
};
