import React from 'react';

function FileTab({ fileUrl }) {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Check out this file: ${fileUrl}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent('File to download');
    const body = encodeURIComponent(`Click the link to download the file: ${fileUrl}`);
    window.open(`mailto:?subject=${subject}&body=${body}`);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'file-to-download';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button onClick={handleWhatsApp}>Send on WhatsApp</button>
      <button onClick={handleEmail}>Send via Email</button>
      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default FileTab;
