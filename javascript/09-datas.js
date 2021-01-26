const D1 = new Date();

console.log(D1.getFullYear());

dayName = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab');

monName = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez');

console.log(`Olá, hoje é ${dayName[D1.getDay()]} dia ${D1.getDate()} de ${monName[D1.getMonth()]} de ${D1.getFullYear()}`);