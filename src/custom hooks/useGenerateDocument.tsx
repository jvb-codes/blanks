import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { saveAs } from "file-saver";
import { FormData } from "../components/WorkSheet";
import { useWorkSheetContext } from "./useWorkSheetContext";

const loadFile = async (url: string) => {
  const response = await fetch(url);
  return await response.arrayBuffer();
};

const useGenerateDocument = () => {
  const { wordBank } = useWorkSheetContext();

  const generateDocument = async (data: FormData) => {
    try {
      // Load the template file from the public folder
      const templateData = await loadFile("/blanks/WorkSheetTemplate.docx");

      // Initialize PizZip and Docxtemplater with the template data
      const zip = new PizZip(templateData);
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      // Set the dynamic data for your placeholders

      doc.setData({
        title: data.wkSheetTitle,
        date: data.wkSheetDate ? "Date: " : "",
        name: data.wkSheetName ? "Name: " : "",
        preview: data.wkSheetPreview,
        wordBank: data.wkSheetVocab
          ? wordBank?.join("     ")
          : "No Words Added",
        // Add more data as needed
      });

      // Render the document (replace placeholders with data)
      doc.render();

      // Generate the document as a Blob
      const out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });

      // Save the document to the user’s computer
      saveAs(out, "generated_worksheet.docx");
    } catch (error) {
      console.error("Error generating document", error);
    }
  };

  return { generateDocument };
};

export default useGenerateDocument;
