export function typesTypesDevices(): string {
  return 'types-types-devices';
}

export type Device = {
  name: string;
  serialNumber: string | number;
  vendorId: number;
  getName: () => Device['name'];
};
