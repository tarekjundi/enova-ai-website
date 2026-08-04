import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SCRIPT = `function doPost(e) {
  var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getSheetByName('Submissions');
  var data = JSON.parse(e.postData.contents);

  var HEADERS = [
    'Submitted At',
    'Full Name',
    'Work Email',
    'Company Name',
    'Phone Number',
    'Company Website',
    'Project Type',
    'Estimated Budget',
    'Preferred Start Time',
    'Project Details',
    'Status'
  ];

  // Create headers once, without touching existing data
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
  } else {
    var existing = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    HEADERS.forEach(function (h) {
      if (existing.indexOf(h) === -1) {
        sheet.getRange(1, sheet.getLastColumn() + 1).setValue(h);
        existing.push(h);
      }
    });
  }

  // Explicit field mapping, keyed by header name (not column position)
  var VALUES = {
    'Submitted At': data.submittedAt || new Date().toISOString(),
    'Full Name': data.fullName || '',
    'Work Email': data.workEmail || '',
    'Company Name': data.companyName || '',
    'Phone Number': data.phoneNumber || '',
    'Company Website': data.companyWebsite || '',
    'Project Type': data.projectType || '',
    'Estimated Budget': data.estimatedBudget || '',
    'Preferred Start Time': data.preferredStartTime || '',
    'Project Details': data.projectDetails || '',
    'Status': 'New'
  };

  var headerRow = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  var row = headerRow.map(function (h) {
    return VALUES.hasOwnProperty(h) ? VALUES[h] : '';
  });

  sheet.appendRow(row);
  return ContentService.createTextOutput('Success');
}`;

const GoogleSheetsSetup = () => {
  return (
    <Card className="bg-[#3A2915]/50 border-[#F6D3A2]/20 text-[#FDEED8] max-w-4xl mx-auto my-8">
      <CardHeader>
        <CardTitle className="text-[#F6D3A2]">Google Sheets Integration Setup</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>The contact form posts JSON to a Google Apps Script web app. To include the new fields:</p>

        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-[#F6D3A2]">1. Sheet columns</h4>
            <p className="text-[#D8C4A8]">
              Submitted At · Full Name · Work Email · Company Name · Phone Number · Company Website ·
              Project Type · Estimated Budget · Preferred Start Time · Project Details · Status
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-[#F6D3A2]">2. Apps Script (script.google.com)</h4>
            <pre className="bg-[#1B1207] p-3 rounded text-sm overflow-x-auto">{SCRIPT}</pre>
          </div>

          <div>
            <h4 className="font-semibold text-[#F6D3A2]">3. Redeploy</h4>
            <p className="text-[#D8C4A8]">
              Deploy as a web app (execute as you, access: anyone). Keep the same deployment URL so the
              site keeps working. Existing rows are never modified — missing headers are appended safely.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GoogleSheetsSetup;
