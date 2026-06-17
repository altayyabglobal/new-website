// Al-Tayyab Career Consultancy — lead intake.
// Deploy as Web App: Execute as "Me", Access "Anyone".
//
// Required sheet header row (in this exact order):
// submittedAt | name | phone | program | city | source | userAgent | waLink

const HEADERS = [
  "submittedAt",
  "name",
  "phone",
  "program",
  "city",
  "source",
  "userAgent",
  "waLink",
];

// Customise the auto-WA greeting you want your team to send.
function buildWaLink(body) {
  const firstName = (body.name || "").split(" ")[0] || "there";
  const program = body.program || "MBBS / Engineering";
  const text =
    `Asalamu alaikum ${firstName}, this is Al-Tayyab Career Consultancy from Srinagar. ` +
    `Thanks for your interest in ${program} in Bangladesh. ` +
    `I'm your assigned counsellor — when's a good time to talk?`;

  // Strip non-digits from the phone (keep + handled implicitly by wa.me).
  const digits = (body.phone || "").replace(/[^0-9]/g, "");
  if (!digits) return "";
  const number = digits.length === 10 ? "91" + digits : digits; // assume India if 10 digits
  return "https://wa.me/" + number + "?text=" + encodeURIComponent(text);
}

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    body.waLink = buildWaLink(body);

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const row = HEADERS.map((k) => body[k] || "");
    sheet.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, waLink: body.waLink }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
