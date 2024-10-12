async function main() {
  const pyodide = await loadPyodide();
  console.log("Pyodide geladen");

  const runButton = document.getElementById("run-code");
  const outputElement = document.getElementById("output");

  // CodeMirror-Editor initialisieren
  const editor = CodeMirror.fromTextArea(document.getElementById("python-code"), {
      mode: "python",
      theme: "default",
      lineNumbers: true,
      indentUnit: 4,
      matchBrackets: true,
  });

  // Output-Handling: Standard-Output abfangen
  let output = "";
  const originalConsoleLog = console.log;

  console.log = (...args) => {
      output += args.join(" ") + "\n"; // Ausgabe in die Variable speichern
      originalConsoleLog(...args); // Zum Debugging in die echte Konsole loggen
  };

  runButton.addEventListener("click", async () => {
      const code = editor.getValue();
      outputElement.textContent = "Code wird ausgeführt...\n";

      // Clear previous output
      output = "";  // Reset output before execution

      try {
          // Ausführen des Codes
          await pyodide.runPythonAsync(code);
          outputElement.textContent += output || "Kein Rückgabewert.";
      } catch (error) {
          outputElement.textContent += `Fehler: ${error.message}\n`;
          console.error("Fehler beim Ausführen des Codes:", error);
      }
  });
}

main();
