import { useState } from 'react';

type Document = {
  id: string;
  name: string;
  file: File;
};

export const DocumentUploadForm = () => {
  const [selectedDoc, setSelectedDoc] = useState('');
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 200 * 1024) {
      setUploadedFile(file);
    }
  };

  const handleAdd = () => {
    if (selectedDoc && uploadedFile) {
      const newDocument: Document = {
        id: Math.random().toString(36).substr(2, 9),
        name: selectedDoc,
        file: uploadedFile,
      };
      setDocuments([...documents, newDocument]);
      setSelectedDoc('');
      setUploadedFile(null);
    }
  };

  const handleDelete = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md ">
    

      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name of Document
            </label>
            <select
              value={selectedDoc}
              onChange={(e) => setSelectedDoc(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Please select</option>
              <option value="ADJAM@CADIO">ADJAM@CADIO</option>
              <option value="XII MARGINET">XII MARGINET</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Document
            </label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*,.pdf"
                onChange={handleFileChange}
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
          </div>
        </div>

        <div className="text-xs text-gray-500 space-y-1">
          <p>* Please select valid image file (e.g. PNG, JPEG, GIF, PNG, PDF)</p>
          <p>* Maximum size 200 KB</p>
        </div>

        <button
          onClick={handleAdd}
          className="flex items-center gap-1 text-blue-600 hover:text-blue-800"
        >
          <span className="text-xl">+</span> Add
        </button>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Document List</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 text-sm font-medium text-gray-700">Document Name</th>
                  <th className="text-left py-2 text-sm font-medium text-gray-700">Name of Document</th>
                  <th className="py-2"></th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc) => (
                  <tr key={doc.id} className="border-b border-gray-200">
                    <td className="py-3 text-sm text-gray-600">{doc.name}</td>
                    <td className="py-3 text-sm text-gray-600">{doc.file.name}</td>
                    <td className="py-3 flex gap-3">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        Download
                      </button>
                      <button
                        onClick={() => handleDelete(doc.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Selected Document</h3>
          <div className="space-y-2">
            {documents.map((doc) => (
              <div key={doc.id} className="flex justify-between items-center bg-gray-50 p-3 rounded">
                <span className="text-sm text-gray-600">{doc.file.name}</span>
                <button
                  onClick={() => handleDelete(doc.id)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <button className="w-full md:w-auto px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};