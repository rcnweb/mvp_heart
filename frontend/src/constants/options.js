export const options = {
  ChestPainType: [
    { value: 'ATA', label: 'Angina Típica (ATA)' },
    { value: 'NAP', label: 'Angina Atípica (NAP)' },
    { value: 'ASY', label: 'Assintomático (ASY)' },
    { value: 'TA', label: 'Dor Não Anginosa (TA)' }
  ],
  Sex: [
    { value: 'M', label: 'Masculino (M)' },
    { value: 'F', label: 'Feminino (F)' }
  ],
  RestingECG: [
    { value: 'Normal', label: 'Normal' },
    { value: 'ST', label: 'Alteração ST' },
    { value: 'LVH', label: 'Hipertrofia Ventricular' }
  ],
  ExerciseAngina: [
    { value: 'Y', label: 'Sim (Y)' },
    { value: 'N', label: 'Não (N)' }
  ],
  ST_Slope: [
    { value: 'Up', label: 'Subida (Up)' },
    { value: 'Flat', label: 'Estável (Flat)' },
    { value: 'Down', label: 'Descida (Down)' }
  ]
};
