// NeuroPortal MVP – Secure Anonymous Proxy Browser
// Purpose: Free, no-login secure access tool + upgradable product platform

import { useState } from "react";

export default function NeuroPortal() {
  const [url, setUrl] = useState("");
  const [secureUrl, setSecureUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url.startsWith("http")) {
      setSecureUrl(`https://www.croxyproxy.com/?url=${encodeURIComponent(url)}`);
    } else {
      setSecureUrl(`https://www.croxyproxy.com/?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">
        NeuroPortal™ – Free Secure Web Gateway
      </h1>
      <p className="text-zinc-400 text-center max-w-xl mb-8">
        Paste any website below to browse securely with basic tracking protection
        and privacy-by-default. No account or login required.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col sm:flex-row gap-4"
      >
        <input
          type="text"
          placeholder="Enter a site URL (e.g. facebook.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg text-black"
          required
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold"
        >
          Secure Browse
        </button>
      </form>

      {secureUrl && (
        <div className="mt-10 w-full max-w-5xl">
          <p className="mb-2 text-zinc-400">Browsing securely via NeuroPortal:</p>
          <iframe
            src={secureUrl}
            title="Secure Proxy Browser"
            className="w-full h-[600px] border-2 border-green-400 rounded-xl"
          ></iframe>
        </div>
      )}

      <div className="mt-16 text-sm text-zinc-500">
        Layered From The Beginning – Secured by <span className="text-green-400 font-medium">NeuroSentinel™</span>
      </div>
    </div>
  );
}
