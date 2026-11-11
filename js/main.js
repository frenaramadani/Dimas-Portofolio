const skills = ["HTML", "CSS", "Git dan GitHub", "Desain Character"];
skills.push("JavaScript");

console.log(`Jumlah keahlian: ${skills.length}`);
console.log(`Keahlian pertama: ${skills[0]}`);

for (const skill of skills) {console.log(skill);}

console.table(skills)

console.log("Tingkat keahlian")

const skillss = [
 { nama: "HTML", level: "Menengah" },
 { nama: "CSS", level: "Menengah" },
 { nama: "Git dan GitHub", level: "Dasar" },
 { nama: "Desain Character", level: "Mahir" },
];
skillss.push({ nama: "JavaScript", level: "Dasar" });

const daftarSkill = document.querySelector("#daftar-skill");
const jumlahSkill = document.querySelector("#jumlah-skill");

skillss.forEach((skill) => {
 const item = document.createElement("li");
 item.textContent = `${skill.nama} (${skill.level})`;
 daftarSkill.appendChild(item);
});

jumlahSkill.textContent = `Ada ${skills.length} keahlian yang sedang
saya kembangkan.`;

const tombolTema = document.querySelector("#tombol-tema");
tombolTema.addEventListener("click", () => {
 document.body.classList.toggle("gelap");
 if (document.body.classList.contains("gelap")) {
 tombolTema.textContent = "Mode Terang";
 } else {
 tombolTema.textContent = "Mode Gelap";
 }
});
