function personalizarErro(err) {
  throw new Error('Ops, algo deu errado!');
}

function imprimeNomeMaiusculo(objErr) {
 try {
  console.log(objErr.name.toUpperCase() + '!!!');
 } catch(err) {
   personalizarErro(err);
 } finally {
   console.log('Final');
 }
}

const objName = {
  name: 'Ana'
}
imprimeNomeMaiusculo(objName);