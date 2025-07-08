
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GoogleSheetsSetup = () => {
  return (
    <Card className="bg-darkTeal/50 border-neonGreen/20 text-white max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-neonGreen">Google Sheets Integration Setup</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>To connect the contact form to Google Sheets, follow these steps:</p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-neonGreen">1. Create a Google Sheet</h4>
            <p className="text-gray-300">Create a new Google Sheet with headers: Name, Email, Company, Phone, Message, Timestamp</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-neonGreen">2. Create Google Apps Script</h4>
            <p className="text-gray-300">Go to script.google.com and create a new project with this code:</p>
            
            <pre className="bg-gray-800 p-3 rounded text-sm overflow-x-auto">
{`function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.name,
    data.email,
    data.company,
    data.phone,
    data.message,
    data.timestamp
  ]);
  
  return ContentService.createTextOutput('Success');
}`}
            </pre>
          </div>
          
          <div>
            <h4 className="font-semibold text-neonGreen">3. Deploy and Update URL</h4>
            <p className="text-gray-300">Deploy the script as a web app and replace the URL in Contact.tsx with your deployment URL.</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleSheetsSetup;
