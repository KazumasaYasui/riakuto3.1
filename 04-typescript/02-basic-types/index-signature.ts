interface Color {
  readonly rgb: string;
  opacity: number;
  name?: string;
}

const turquoise: Color = { rgb: '00afcc', opacity: 1 };
turquoise.name = 'Turquoise Blue';
// turquoise.rgb = '03c1ff'; // readonlyなのでエラー

console.log(turquoise);

interface Status {
  level: number;
  maxHP: number;
  maxMP: number;
  [attr: string]: number;
}

const myStatus: Status = {
  level: 99,
  maxHP: 999,
  maxMP: 999,
  attack: 999,
  defence: 999,
}

console.log(myStatus);