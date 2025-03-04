const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "signatures");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
const employees = [
    { name: "Bernadette Marconi", position: "Senior Designer", phone: "440-523-9455", email: "bernadette@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Bernadette%20Marconi_400x400Transparent.png" },
    { name: "Brad Hendrickson", position: "CRO", phone: "818-231-7580", email: "brad@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Brad%20Hendrickson_400x400Transparent.png" },
    { name: "Brett Lorenz", position: "Videographer", phone: "865-323-0916", email: "brett@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Brett%20Lorenz_400x400Transparent.png" },
    { name: "Brittany Carlson", position: "Account Manager", phone: "951-225-5607", email: "Brittany@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Brittany%20Carlson_400x400Transparent.png" },
    { name: "Dave Korinek", position: "CEO - Partner", phone: "858-395-6726", email: "dave@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Dave%20Korinek_400x400Transparent.png" },
    { name: "David Carrillo", position: "ECD - Partner", phone: "858-334-9855", email: "dc@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/David%20Carillo_400x400Transparent.png" },
    { name: "Eric Kroupa", position: "ACD - Head of Content Strategy", phone: "636-236-8584", email: "eric@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Eric%20Kroupa_400x400Transparent.png" },
    { name: "Gabriel Arias", position: "Junior Web Developer", phone: "584242038467", email: "gabriel@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Gabriel%20Arias_400x400Transparent.png" },
    { name: "Jorge Ramirez", position: "Head of Development", phone: "50258748315", email: "jorge@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Jorge%20Ramirez_400x400Transparent.png" },
    { name: "Lauren Spinelli", position: "Account Manager", phone: "951-775-2078", email: "lauren@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Lauren%20Spinelli_400x400Transparent.png" },
    { name: "Mani Salazar", position: "Design Director", phone: "858-610-5380", email: "mani@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Manuel%20Salazar_400x400Transparent.png" },
    { name: "Matt Simpson", position: "COO - Partner", phone: "858-705-2490", email: "matt@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Matt%20Simpson_400x400Transparent.png" },
    { name: "Mia Pitino", position: "HR/Operations Manager", phone: "858-395-7142", email: "mia@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Mia%20Pitino_400x400Transparent.png" },
    { name: "Noah Korinek", position: "Junior Designer", phone: "951-553-5340", email: "noah@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Noah%20Korinek_400x400Transparent.png" },
    { name: "Paul Venter", position: "Partner", phone: "858-999-7975", email: "paul@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Paul%20Venter_400x400Transparent.png" },
    { name: "Thomas Condry", position: "Senior Designer", phone: "909-210-7305", email: "thomas@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Thomas%20Condry_400x400Transparent.png" },
    { name: "Tommy Eggert", position: "Producer", phone: "858-243-1246", email: "tommy@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/US/Thomas%20Eggert_400x400Transparent.png" }
];

employees.forEach(employee => {
    const fileName = `${employee.name.replace(/\s+/g, '_')}.html`;
    const filePath = path.join(outputDir, fileName);

    const htmlContent =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${employee.name} - Signature</title>
    <style>
        body { font-family: Arial, sans-serif; display: flex; flex-direction: column; align-items: center; }
        .steps { display: flex; flex-direction: column; gap: 30px; }
        .steps span { font-size: 20px; }
    </style>
</head>
<body>
    <div id="content">
    <table style="font-family: Arial, Helvetica, sans-serif; width: 504px; border-collapse: collapse; height: 151px;">
        <tbody>
            <tr style="height: 151px;">
                <td style="vertical-align: top; padding-top: 5px; padding-right: 5px; width: 150.297px; height: 151px;">
                    <img src="${employee.image}" alt="${employee.name}" width="150" height="149" />
                </td>
                <td style="vertical-align: top; width: 342.703px; height: 151px;">
                    <span style="font-size: 28px; color: black; font-family: 'Times New Roman', serif;">${employee.name}</span><br />
                    <span style="color: #b59756;">${employee.position}</span> 
                    <br />
                    <table style="margin-top: 10px;">
                        <tbody>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <img src="https://magneticcreative.com/hubfs/2025-emailsignatures/mail.png" alt="" width="18" />
                                </td>
                                <td style="vertical-align: middle; padding-left: 5px;">
                                    <a style="text-decoration: none; border-bottom: none; color: #333333;" href="mailto:${employee.email}">${employee.email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <img src="https://magneticcreative.com/hubfs/2025-emailsignatures/globe.png" alt="" width="18" />
                                </td>
                                <td style="vertical-align: middle; padding-left: 5px;">
                                    <a style="text-decoration: none; border-bottom: none; color: #333333;" href="https://www.mag.cr">Mag.cr</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="vertical-align: middle;">
                                    <img src="https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/smartphone.png" alt="" width="18" />
                                </td>
                                <td style="vertical-align: middle; padding-left: 5px;">
                                    <a style="text-decoration: none; border-bottom: none; color: #333333;" href="tel:${employee.phone}">${employee.phone}</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<br><br>
    <span>Step 1</span>
<button id="btn">Click here to copy</button>
<br><br>

<div class="steps">
    <span>Step 2: Go to <a href="https://mail.google.com/mail" target="_blank">Gmail.com</a> and click on settings</span>

    <img src="./assets/step 2.png" alt="">
    <span>Click on See all settings</span>
    <img src="./assets/step 3.png" alt="">
    <span>Scroll down and click on Create new button</span>
    <img src="./assets/step 4.png" alt="">
    <span>Add name, click on Create</span>
    <img src="./assets/step 5.png" alt="">
    <span>Paste the signature and select it on "For New emails use" and "On reply/forward use" then save changes</span>
    <img src="./assets/step 6.png" alt="">
</div>
</body>

<style>
    body{
        display: flex;
    flex-direction: column;
    align-items: center;
    }
    .steps{
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    .steps span{
        font-size: 28px;
    }
    
</style>
<script>
    document.getElementById("btn").addEventListener("click", async function() {
        const content = document.getElementById("content").outerHTML;
        
        try {
            await navigator.clipboard.write([
                new ClipboardItem({
                    "text/html": new Blob([content], { type: "text/html" })
                })
            ]);
            alert("Copied");
        } catch (err) {
            console.error("Error: ", err);
            alert("Error. Ask Gabo");
        }
    });
</script>
</body>
</html>`;

fs.writeFileSync(filePath, htmlContent);
});
