import React, { useState } from 'react';
import { X, Upload, FileText } from 'lucide-react';

const FileUploadModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [attachments, setAttachments] = useState([]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleFileSelection = (e) => {
    const files = Array.from(e.target.files);
    setAttachments([...attachments, ...files]);
  };

  const removeFile = (indexToRemove) => {
    setAttachments(attachments.filter((_, index) => index !== indexToRemove));
  };

  const uploadFiles = () => {
    // Handle file upload logic here
    console.log('Uploading files:', attachments);
    // Reset attachments and close modal after successful upload
    setAttachments([]);
    setShowModal(false);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div>
      {/* Upload Button to Open Modal */}
      <button
        onClick={toggleModal}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        <Upload size={20} />
        Upload Files
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-96 max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Upload Attachments</h3>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* File Input */}
            <div className="mb-4">
              <label className="block w-full cursor-pointer">
                <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500">
                  <FileText size={24} className="text-gray-400 mb-2" />
                  <span className="text-sm text-gray-500">
                    Click to select files or drag and drop
                  </span>
                </div>
                <input
                  type="file"
                  multiple
                  onChange={handleFileSelection}
                  className="hidden"
                />
              </label>
            </div>

            {/* File List */}
            <div className="flex-1 overflow-auto">
              <h4 className="font-medium mb-2">Selected Files:</h4>
              <ul className="space-y-2">
                {attachments.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between bg-gray-50 p-2 rounded"
                  >
                    <div className="flex items-center space-x-2 overflow-hidden">
                      <FileText size={16} className="text-gray-400 flex-shrink-0" />
                      <div className="truncate">
                        <span className="text-sm text-gray-700">{file.name}</span>
                        <span className="text-xs text-gray-500 block">
                          {formatFileSize(file.size)}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700 ml-2 flex-shrink-0"
                    >
                      <X size={16} />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2 mt-4 pt-4 border-t">
              <button
                onClick={toggleModal}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={uploadFiles}
                disabled={attachments.length === 0}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
              >
                Upload {attachments.length > 0 && `(${attachments.length})`}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploadModal;