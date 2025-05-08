import ClipboardJS from 'clipboard';

const copyToClipboard = () => {
  const clipboard = new ClipboardJS('.copy-btn', {
    text: () => generateReadme(), // Use the generated README content
  });

  clipboard.on('success', (e) => {
    alert('Copied to Clipboard!');
    clipboard.destroy(); // Clean up the clipboard instance after success
  });
};


const downloadReadme = () => {
    const blob = new Blob([generateReadme()], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${userData.name}-README.md`;
    link.click();
  };
  