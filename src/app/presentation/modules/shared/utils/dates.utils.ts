
export function diffBetDates(fecha1: Date, fecha2: Date): number {



  const fecha1Mapped = new Date(fecha1.toISOString().split('T')[0]);
  const fecha2Mapped = new Date(fecha2.toISOString().split('T')[0]);


  // Convertir las fechas a timestamps
  const fecha1Timestamp = fecha1Mapped.getTime();
  const fecha2Timestamp = fecha2Mapped.getTime();

  // Calcular la diferencia en milisegundos
  const diferenciaEnMilisegundos = Math.abs(fecha2Timestamp - fecha1Timestamp);

  // Convertir la diferencia en milisegundos a días
  const milisegundosEnUnDia = 1000 * 60 * 60 * 24;
  const diferenciaEnDias = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnDia);

  return diferenciaEnDias +1;
}
