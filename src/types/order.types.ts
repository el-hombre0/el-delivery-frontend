export interface IOrder {
  id: number;
  clientName: string;
  clientSurname: string;
  clientPhone: string;
  clientEmail: string;
  carModel: string;
  requiredKiloWatts: number;
  distanceToClient: number;
  address: string;
  cost: number;
  paymentMethod: string;
  status: string;
}

export interface IPaymentMethodsOptions {
  label: string;
  value: string;
}