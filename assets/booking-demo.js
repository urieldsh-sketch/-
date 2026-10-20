"use strict";
(() => {
 const dialog = document.getElementById("intake-dialog");
 const open = document.querySelector(".demo-open");
 const form = document.getElementById("intake-demo-form");
 const preview = document.getElementById("intake-preview");
 const summary = document.getElementById("intake-summary");
 if (!dialog || !open) return;
 open.addEventListener("click", () => dialog.showModal());
 dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
 dialog.addEventListener("close", () => {
  form.reset(); form.hidden = false; preview.hidden = true;
  summary.replaceChildren(); open.focus();
 });
 form.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = [
   ["שם", document.getElementById("intake-name").value],
   ["דוא״ל", document.getElementById("intake-email").value],
   ["נושא", document.getElementById("intake-topic").selectedOptions[0].text],
   ["סיבת הפנייה", document.getElementById("intake-reason").value]
  ];
  summary.replaceChildren();
  for (const [label, value] of fields) {
   const term = document.createElement("dt"), description = document.createElement("dd");
   term.textContent = label; description.textContent = value;
   summary.append(term, description);
  }
  form.hidden = true; preview.hidden = false; preview.focus();
 });
 dialog.querySelector(".demo-back").addEventListener("click", () => {
  preview.hidden = true; form.hidden = false; document.getElementById("intake-name").focus();
 });
 document.getElementById("demo-fields").disabled = false;
})();
