interface Question {
  question: string;
  type: string;
  name: string;
  options: string[];
  dependsOn?: string[];
  required: string;
  order: number;
}
