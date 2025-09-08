import { useState } from 'react';

export default function Tool() {
  const [business, setBusiness] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ business, goal })
    });
    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-blue-600">AI Business Growth Tool</h1>
      <p className="mt-2 text-gray-600">Enter your business details and get instant strategies & content.</p>
      <div className="mt-6 w-full max-w-lg bg-white rounded-xl shadow p-6">
        <input
          type="text"
          placeholder="What is your business type? (e.g. Fashion, Food, Salon)"
          className="w-full p-3 border rounded-lg mb-4"
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
        />
        <input
          type="text"
          placeholder="What is your goal? (e.g. More customers, Boost online sales)"
          className="w-full p-3 border rounded-lg mb-4"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate Growth Plan"}
        </button>
      </div>
      {result && (
        <div className="mt-8 w-full max-w-2xl">
          <div className="bg-white rounded-xl shadow p-6 mb-4">
            <h2 className="text-2xl font-semibold text-blue-600">Growth Strategies</h2>
            <p className="mt-2 text-gray-700 whitespace-pre-line">{result.strategies}</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-semibold text-blue-600">Marketing Content</h2>
            <p className="mt-2 text-gray-700 whitespace-pre-line">{result.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}