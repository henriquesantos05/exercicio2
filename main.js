import { Conversor } from './conversor.js';

const conversor = new Conversor();

const fahrenheit = conversor.celsiusParaFahrenheit(25);
const milhas = conversor.quilometrosParaMilhas(10);
const horas = conversor.minutosParaHoras(150);

console.log(`25°C = ${fahrenheit}°F`);
console.log(`10 km = ${milhas} milhas`);
console.log(`150 minutos = ${horas} horas`);