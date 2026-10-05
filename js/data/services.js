// Dados dos serviços. Para editar/adicionar um serviço, mexa só aqui.
const s = (d) => `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
window.SERVICES = [
  { nome: "Consultas veterinárias", icone: s('<path d="M14 8v12a8 8 0 0016 0V8M12 8h4M28 8h4M22 28v6a6 6 0 006 6 6 6 0 006-6v-2"/><circle cx="34" cy="30" r="3"/>') },
  { nome: "Vacinação", icone: s('<path d="M30 8l10 10M26 12l10 10-14 14-10-10zM22 26l-9 9M10 38l-3 3"/>') },
  { nome: "Exames laboratoriais", icone: s('<path d="M19 6h10M21 6v14L11 38a3 3 0 003 5h20a3 3 0 003-5L27 20V6M16 32h16"/>') },
  { nome: "Cirurgias", icone: s('<circle cx="24" cy="31" r="6"/><circle cx="12" cy="22" r="3.5"/><circle cx="20" cy="13" r="3.5"/><circle cx="30" cy="13" r="3.5"/><circle cx="37" cy="22" r="3.5"/>') },
  { nome: "Internação", icone: s('<path d="M6 40V16M6 32h36v8M42 32v-6a6 6 0 00-6-6H20v12M34 8v8M30 12h8"/>') },
  { nome: "Banho e tosa", icone: s('<path d="M24 6c1 9 5 13 14 14-9 1-13 5-14 14-1-9-5-13-14-14 9-1 13-5 14-14zM38 34c.5 3 2 4.5 5 5-3 .5-4.5 2-5 5-.5-3-2-4.5-5-5 3-.5 4.5-2 5-5z"/>') },
];
