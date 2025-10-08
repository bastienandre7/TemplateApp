export default function CodePreview({ sourceCode }: { sourceCode: string }) {
  return (
    <pre className="text-sm text-gray-300 font-mono leading-relaxed">
      <code>{sourceCode}</code>
    </pre>
  );
}
