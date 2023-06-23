"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertWhatsappTextToHtml = exports.convertHtmlToWhatsappText = void 0;
function convertHtmlToWhatsappText(html) {
    const formatted = html
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\s*\/?\s*strong\s*?>/gi, "*")
        .replace(/<\s*\/?\s*em\s*?>/gi, "_")
        .replace(/<p\s*\/?>/gi, "")
        .replace(/<\/p>/gi, "\n");
    console.log({ formatted });
    return formatted.replace(/[\s\n]+$/, "");
}
exports.convertHtmlToWhatsappText = convertHtmlToWhatsappText;
const convertWhatsappTextToHtml = (whatsappText) => {
    const boldRegex = /\*([^*]+)\*/g;
    const italicRegex = /_([^_]+)_/g;
    const strikeRegex = /~([^~]+)~/g;
    const html = whatsappText
        .replace(/\n/g, "<br>")
        .replace(boldRegex, "<strong>$1</strong>")
        .replace(italicRegex, "<em>$1</em>")
        .replace(strikeRegex, "<del>$1</del>");
    return html;
};
exports.convertWhatsappTextToHtml = convertWhatsappTextToHtml;
//# sourceMappingURL=formatter.js.map