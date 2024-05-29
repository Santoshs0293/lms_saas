import axios from "axios";
import { LANGUAGE_VERSIONS } from "../CodeEditor/constants";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode) => {
  try {
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    
    // Check if response is valid and contains output
    if (response?.data?.run?.output !== undefined) {
      return {
        output: response.data.run.output.trim(),
        stderr: response.data.run.stderr.trim() || "",
      };
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("Error executing code:", error);
    // Return a consistent structure in case of error
    return {
      output: "",
      stderr: error.response?.data?.message || error.message || "Unknown error",
    };
  }
};
