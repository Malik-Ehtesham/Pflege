import React from "react";
import "./vollmacht.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faDownload } from "@fortawesome/free-solid-svg-icons";
import Header from "../common/header/Header";

const DocumentItem = ({ title, downloadLink }) => {
  const handleDownload = async () => {
    try {
      const response = await fetch(downloadLink);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = title; // or extract the filename from the content-disposition header if present
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  return (
    <div className="document-card p-1 py-2">
      <FontAwesomeIcon icon={faFileAlt} className="document-icon" />
      <h3>{title}</h3>
      <button onClick={handleDownload} className="download-button">
        <FontAwesomeIcon icon={faDownload} className="download-icon" />
        HERUNTERLADEN
      </button>
    </div>
  );
};

const Documents = () => {
  const documents = [
    {
      title: "Vorsorgevollmacht",
      downloadLink: "./images/malik_vorsogerVollmacht.pdf",
    },
    {
      title: "Konto- und Depotvollmacht",
      downloadLink: "/images/Konto_und_Depotvollmacht.pdf",
    },
    {
      title: "Broschüre Patientenverfügung",
      downloadLink: "/images/Patientenverfuegung_Broschuere-1.pdf",
    },
    {
      title: "Betreuungsverfügung",
      downloadLink: "/images/Betreuungsverfuegung_Muster-1.pdf",
    },
    {
      title: "Patientenverfügung",
      downloadLink: "/images/Patientenverfuegung_Textbausteine-1.pdf",
    },

    // ... other documents
  ];

  return (
    <>
      <Header />
      <div className="documents-container my-10">
        {documents.map((doc, index) => (
          <DocumentItem
            key={index}
            title={doc.title}
            downloadLink={doc.downloadLink}
          />
        ))}
      </div>
    </>
  );
};

export default Documents;
