declare module "defaultTypes" {
  interface Icontact {
    id: number;
    first_name: string;
    last_name: string;
    number: number;
    city: string;
    email: string;
  }

  interface Idata {
    data: Icontact;
  }
}

module.exports = {
  Icontact,
  Idata,
};
