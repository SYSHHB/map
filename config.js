// School Map settings. Edit this file only; no need to touch index.html.
window.SCHOOLMAP_CONFIG = {
  // Application (client) ID from the Azure app registration.
  // Leave empty to run in demo mode (data is saved in this browser only).
  CLIENT_ID: "598ea952-e9df-4684-a109-85832dc34e59",
  // Your Microsoft 365 tenant: the Directory (tenant) ID, or keep "organizations".
  TENANT: "d3ab4c65-3ba1-4c04-98fd-66a0c7730cdf",
  // The OneDrive that holds the records (data is saved here, not in the admin's own OneDrive).
  OWNER: "it.helpdesk@syayasan.edu.bn",
  FOLDER: "SYSHHB-School-Map",
  // Paste the OneDrive link of the SYSHHB-School-Map folder here (see README step 3).
  // This is what lets zulfa.zaini save into it.helpdesk's OneDrive.
  FOLDER_LINK: "",
  // People who may edit class names. Everyone else signed in can only view.
  ADMINS: [
    "zulfa.zaini@syayasan.edu.bn"
  ]
};
