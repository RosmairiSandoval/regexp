/**Al usar . permitimos cualquier carácter (sea número, letra, símbolo...), por lo que no
 * concretamos. En lugar de esto, nos interesa especificar un rango de carácteres
 * específico. En lugar de . usaremos [0-9] (cualquier dígito del 0 al 9). Intenta ahora
 * seleccionar sólo los personajes de tez clara.
 */

<input pattern="[0-9]+A"></input>