import dns from "dns/promises";

const address = await dns.lookup("www.programmerzamannow.com");
const ns = await dns.resolveNs("www.programmerzamannow.com");

console.info(address);
console.info(address.address);
console.info(address.family);
console.info(ns);
