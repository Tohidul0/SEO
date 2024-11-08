// src/components/AttachmentModal.jsx
import React, { useState, useEffect } from 'react';
import { PaperclipIcon } from 'lucide-react';
import Modal from '../ui/Modal';
import CustomDropdownMenu from '../ui/DropdownMenu';
import { api } from '../utils/api';

const AttachmentModal = () => {
  const [files, setFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileCount, setFileCount] = useState(0);

  useEffect(() => {
    const fetchFileCount = async () => {
      try {
        const response = await api.get('/api/file-count');
        setFileCount(response.data.fileCount);
      } catch (error) {
        console.error('Error fetching file count:', error);
      }
    };
    fetchFileCount();
  }, []);

  const handleFileUpload = (e) => {
    setFiles([...files, ...e.target.files]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...files];
    updatedFiles.splice(index, 1);
    setFiles(updatedFiles);
  };

  const handleUploadFiles = async () => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await api.post('/api/upload', formData);
      console.log(response.data.message);
      setFiles([]);
      setFileCount((prevCount) => prevCount + files.length);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <>
      <CustomDropdownMenu>
        <CustomDropdownMenu.Item
          className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <PaperclipIcon className="w-5 h-5" />
          <span>Attach File</span>
        </CustomDropdownMenu.Item>
      </CustomDropdownMenu>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-blue-500 hover:text-blue-700"
            >
              <PaperclipIcon className="w-5 h-5 inline-block mr-2" />
              Upload Files
            </label>
            <input
              id="file-upload"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
          {files.length > 0 && (
            <div className="overflow-y-auto max-h-48">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left">Filename</th>
                    <th className="text-left">Extension</th>
                    <th className="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2">{file.name}</td>
                      <td className="py-2">
                        {file.name.split('.').pop()}
                      </td>
                      <td className="py-2 text-right">
                        <button
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleRemoveFile(index)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>
            {fileCount} file(s) uploaded
          </span>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
            onClick={handleUploadFiles}
          >
            Upload
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AttachmentModal;