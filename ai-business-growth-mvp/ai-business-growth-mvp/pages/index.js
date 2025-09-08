import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-blue-600 text-center">AI Growth Partner for Small Businesses 🚀</h1>
      <p className="mt-4 text-gray-700 text-center max-w-xl">
        Get instant growth strategies & marketing content tailored to your business.
      </p>
      <Link href="/tool">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700">
          Try It Now
        </button>
      </Link>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
        {[
          { step: "1", text: "Enter your business type + goal" },
          { step: "2", text: "AI generates strategies & content" },
          { step: "3", text: "Copy & grow faster" }
        ].map((item) => (
          <div key={item.step} className="bg-white rounded-xl shadow p-6 text-center">
            <h2 className="text-xl font-semibold text-blue-600">Step {item.step}</h2>
            <p className="mt-2 text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}