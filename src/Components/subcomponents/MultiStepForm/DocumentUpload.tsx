import { useState } from "react";
import { useFormStore } from "../../../GlobalStore/FormStore";

type FileInfo = {
  id: string;
  format: string;
  downloadLink: string;
};

type DocumentGroup = {
  option: string;
  files: FileInfo[];
};

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
};

type SelectorProps = {
  selected: string;
  onSelect: (value: string) => void;
};

type FileUploaderProps = {
  uploadedFile: File | null;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

type DocumentListProps = {
  groups: DocumentGroup[];
  onDelete: (option: string, id: string) => void;
};


const DOCUMENT_OPTIONS = ["ADJAM@CADIO", "XII MARGINET"];
const FILE_SIZE_LIMIT = 200 * 1024;

const generateId = (): string => Math.random().toString(36).substr(2, 9);


const DocumentSelector: React.FC<SelectorProps> = ({ selected, onSelect }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Name of Document
    </label>
    <select
      value={selected}
      onChange={(e) => onSelect(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded-md"
    >
      <option value="">Please select</option>
      {DOCUMENT_OPTIONS.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const FileUploader: React.FC<FileUploaderProps> = ({
  uploadedFile,
  onFileChange,
  error,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Upload Document
    </label>
    <div className="flex items-center gap-4">
      <input
        type="file"
        id="file-upload"
        className="hidden"
        accept="image/png, image/jpeg, image/gif, .pdf"
        onChange={onFileChange}
      />
      <label
        htmlFor="file-upload"
        className="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        ☐ Browse...
      </label>
      {uploadedFile && (
        <span className="text-sm text-gray-600">{uploadedFile.name}</span>
      )}
    </div>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const DocumentList: React.FC<DocumentListProps> = ({ groups, onDelete }) => {
  if (groups.length === 0) return null;
  return (
    <div className="border-t border-gray-200 pt-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-3">
        Document List
      </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 text-sm font-medium text-gray-700">
                Document Option
              </th>
              <th className="text-left py-2 text-sm font-medium text-gray-700">
                File Format
              </th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) =>
              group.files.map((file) => (
                <tr key={file.id} className="border-b border-gray-200">
                  <td className="py-3 text-sm text-gray-600">{group.option}</td>
                  <td className="py-3 text-sm text-gray-600">{file.format}</td>
                  <td className="py-3 flex gap-3">
                    <a
                      href={file.downloadLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Download
                    </a>
                    <button
                      onClick={() => onDelete(group.option, file.id)}
                      className="text-red-600 hover:text-red-800 text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => (
  <button onClick={onClick} className={`px-6 py-2 rounded-md ${className}`}>
    {children}
  </button>
);
export const DocumentUploadForm = () => {
  const [selectedDoc, setSelectedDoc] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [documentGroups, setDocumentGroups] = useState<DocumentGroup[]>([]);
  const [fileError, setFileError] = useState("");
  const { ActiveFormStep, setActiveFormStep } = useFormStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const file = e.target.files?.[0];
    if (file) {
      if (file.size <= FILE_SIZE_LIMIT) {
        setUploadedFile(file);
      } else {
        setFileError("File exceeds maximum allowed size of 200 KB.");
        setUploadedFile(null);
      }
    }
  };

  const handleAdd = () => {
    if (!uploadedFile) {
      setFileError("Please upload the file!");
      return;
    }
    if (!selectedDoc) {
      setFileError("Please select a document option!");
      return;
    }
    const fileExtension = uploadedFile.name.split(".").pop() || "";
    const newFile: FileInfo = {
      id: generateId(),
      format: fileExtension.toUpperCase(),
      downloadLink: URL.createObjectURL(uploadedFile),
    };

    setDocumentGroups((prevGroups) => {
      const existingGroup = prevGroups.find(
        (group) => group.option === selectedDoc
      );
      if (existingGroup) {
        return prevGroups.map((group) =>
          group.option === selectedDoc
            ? { ...group, files: [...group.files, newFile] }
            : group
        );
      } else {
        return [...prevGroups, { option: selectedDoc, files: [newFile] }];
      }
    });
    setSelectedDoc("");
    setUploadedFile(null);
    setFileError("");
  };

  const handleDelete = (option: string, id: string) => {
    setDocumentGroups((prevGroups) =>
      prevGroups
        .map((group) =>
          group.option === option
            ? { ...group, files: group.files.filter((file) => file.id !== id) }
            : group
        )
        .filter((group) => group.files.length > 0)
    );
  };

  const handleNext = () => {
    setActiveFormStep(ActiveFormStep + 1);
  };

  return (
    <div className="w-full mx-auto p-6 rounded-lg text-gray-500">
      <h1 className="font-[Kajiro] text-[5vw]">Document Upload</h1>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <DocumentSelector selected={selectedDoc} onSelect={setSelectedDoc} />
          <FileUploader
            uploadedFile={uploadedFile}
            onFileChange={handleFileChange}
            error={fileError}
          />
        </div>
        <div className="text-xs text-gray-500 space-y-1">
          <p>* Please select a valid file (e.g. PNG, JPEG, GIF, PDF)</p>
          <p>* Maximum size 200 KB</p>
        </div>
        <Button
          onClick={handleAdd}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800 bg-transparent"
        >
          <span className="text-xl">+</span> Add
        </Button>
        <DocumentList groups={documentGroups} onDelete={handleDelete} />
        <div className="pt-6">
          <Button
            onClick={handleNext}
            className="bg-green-600 text-white hover:bg-green-700"
          >
            Save &amp; Next
          </Button>
        </div>
      </div>
    </div>
  );
};