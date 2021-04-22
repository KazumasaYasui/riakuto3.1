{
  type Unit = 'USD' | 'EUR' | 'JPY' | 'GBP';

  interface Currency {
    unit: Unit;
    amount: number;
  }

  interface IPayment extends Currency {
    date: Date;
  }

  type TPayment = Currency & {
    date: Date;
  };

  const date = new Date('2021-04-23T12:34+0900');
  const payA: IPayment = {unit: 'JPY', amount: 10000, date};
  const payB: TPayment = {unit: 'USD', amount: 100, date};

  console.log(payA, payB);
}