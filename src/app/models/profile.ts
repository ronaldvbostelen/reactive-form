export interface Profile {
  firstName: string;
  lastName: string;
  address: {
    street: string,
    city: string
  };
  aliases: string[];
}
