const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "signatures");

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}
const employees = [
    { name: "Althia Kapp", position: "Account Manager & Head of Accounts", phone: "082 922 6904", email: "althia@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Althia%20Kapp_400x400Transparent.png" },
    { name: "Annemarie Luck", position: "Content Strategist", phone: "084 999 5257", email: "annemarie@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Annemarie%20Luck_400x400Transparent.png" },
    { name: "Ashleigh van Loggerenberg", position: "Junior Copywriter", phone: "064 365 4467", email: "Ashleigh@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Ashleigh%20van%20Loggerenberg_400x400Transparent.png" },
    { name: "Candice Masson", position: "Director of Growth", phone: "078 544 7782", email: "candice@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Candice%20Masson_400x400Transparent.png" },
    { name: "Carla Engelbrecht", position: "Designer", phone: "084 729 3414", email: "carla@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Carla%20Engelbrecht_400x400Transparent.png" },
    { name: "Elizabeth Danjean", position: "Jr Researcher and Brand Strategist", phone: "-", email: "elizabeth@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Elizabeth%20Danjean_400x400Transparent.png" },
    { name: "Elizna Steyn", position: "Account Manager", phone: "083 950 5998", email: "Elizna@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Elizna%20Steyn_400x400Transparent.png" },
    { name: "Elran Meiring", position: "Director of Paid Media", phone: "071 494 5189", email: "Elran@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Elran%20Meiring_400x400Transparent.png" },
    { name: "Etienne Bruwer", position: "CEO", phone: "082 305 8213", email: "etienne@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Etienne%20Bruwer_400x400Transparent.png" },
    { name: "Eugene Bredenkamp", position: "Senior Art Director & Head of Studio", phone: "079 060 7844", email: "eugene@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Eugene%20Bredenkamp_400x400Transparent.png" },
    { name: "Fergus David Hannah", position: "Videographer/Editor", phone: "082 411 3920", email: "fergus@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Fergus%20David%20Hannah_400x400Transparent.png" },
    { name: "Gabrielle Zondagh", position: "Account Coordinator", phone: "072 225 4850", email: "Gabrielle@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Gabrielle%20Zondagh_400x400Transparent.png" },
    { name: "Gemma Persello", position: "Social Media & Community Manager", phone: "078 774 8835", email: "gemma@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Gemma%20Persello_400x400Transparent.png" },
    { name: "Gerhardus Van Niekerk", position: "CFO", phone: "084 200 0823", email: "gerrie@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Gerhardus%20Van%20Niekerk_400x400Transparent.png" },
    { name: "Greg Hall", position: "SEO/PPC Specialist", phone: "082 798 2660", email: "greg@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Greg%20Hall_400x400Transparent.png" },
    { name: "Guy Zack", position: "Animator", phone: "078 686 9971", email: "Guy@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Guy%20Zack_400x400Transparent.png" },
    { name: "Jean-Paul Brouard", position: "Designer", phone: "083 997 7987", email: "jp@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Jean-Paul%20Brouard_400x400Transparent.png" },
    { name: "Jess van Anraad", position: "Junior Designer", phone: "066 054 6464", email: "Jess@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Jess%20van%20Anraad_400x400Transparent.png" },
    { name: "Jomarie Voges", position: "Accountant", phone: "082 269 7542", email: "jomarie@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Jomarie%20Voges_400x400Transparent.png" },
    { name: "Kayla Spinelli", position: "Office Administration/PA", phone: "081 476 6721", email: "Kayla@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Kayla%20Spinelli_400x400Transparent.png" },
    { name: "Tshituku Ndadza", position: "Social Media & Community Manager", phone: "078 593 5815", email: "Tshituku@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Tshituku%20Ndadza_400x400Transparent.png" },
    { name: "Willem van der Merwe", position: "Intern Digital Marketer", phone: "082 799 5884", email: "Willem@mag.cr", image: "https://magneticcreative.com/hubfs/Email%20Signature%20Headshots/SA/Willem%20van%20der%20Merwe_400x400Transparent.png" }
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
