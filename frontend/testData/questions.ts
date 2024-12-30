// Define a type for the question-answer structure
interface Question {
  id: number; // You can change this to string if you plan to use UUIDs
  question: string;
  answer: string;
}

// Array of questions and answers with IDs
const questions: Question[] = [
  {
    id: 1,
    question:
      'How do you define the type for component props in React with TypeScript?',
    answer:
      'You define an interface or type for the props and then pass it to the React component like this: `interface MyProps { title: string } const MyComponent: React.FC<MyProps> = ({ title }) => { return <h1>{title}</h1> }`.',
  },
  {
    id: 2,
    question:
      'What is the syntax for typing the state in a React component using TypeScript?',
    answer:
      'You can type the state by defining an interface for the state and use it in useState like this: `const [count, setCount] = useState<number>(0);`.',
  },
  {
    id: 3,
    question:
      'How do you type a functional component in React using TypeScript?',
    answer:
      'You can type a functional component using `React.FC` or explicitly by typing the props like this: `const MyComponent: React.FC<Props> = (props) => {}`.',
  },
  {
    id: 4,
    question:
      'What is the correct way to type event handlers in React with TypeScript?',
    answer:
      'For common event types like onClick, you can use built-in types like this: `const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {}`.',
  },
  {
    id: 5,
    question: 'How do you type children in a React component using TypeScript?',
    answer:
      'You can type children using `React.ReactNode` like this: `interface Props { children: React.ReactNode }`.',
  },
  {
    id: 6,
    question:
      'How do you ensure a prop is optional in a TypeScript React component?',
    answer:
      'To make a prop optional, use `?` in the type definition: `interface Props { title?: string }`.',
  },
  {
    id: 7,
    question:
      'How can you type default props in a React component with TypeScript?',
    answer:
      'You can define default props by using the `Partial` type utility for props: `type Props = { title: string; } & Partial<{ subtitle: string }>;`.',
  },
  {
    id: 8,
    question: 'What type should you use for ref in React with TypeScript?',
    answer:
      'You can use `React.RefObject` or `React.MutableRefObject` depending on the use case. For example: `const inputRef = useRef<HTMLInputElement>(null);`.',
  },
  {
    id: 9,
    question: 'How do you type the return value of `useEffect` in TypeScript?',
    answer:
      'The return value of `useEffect` is typed as `void | (() => void | undefined)` for cleanup purposes: `useEffect(() => { return () => { /* cleanup */ } }, []);`.',
  },
  {
    id: 10,
    question: 'How do you define generic components in TypeScript with React?',
    answer:
      'You can define a generic component like this: `interface Props<T> { items: T[] } const ListComponent = <T,>({ items }: Props<T>) => { return <>{items.map(item => <div>{item}</div>)}</>; };`.',
  },
];

// Export the questions for use in other files
export default questions;
