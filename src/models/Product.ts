type CategoryType = "judaísmo" | "cristianismo" | "budismo";

export class Product {
  id: number;
  name: string;
  description: string;
  amount: number;
  url: string;
  installments: number;
  category: string;

  constructor(
    id: number,
    name: string,
    description: string,
    amount: number,
    url: string,
    category: CategoryType,
    installments: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.amount = amount;
    this.category = category;
    this.url = url;
    this.installments = installments ?? 1;
  }
}
