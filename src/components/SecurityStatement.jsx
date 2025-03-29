// NeuroAssist Security Statement Web Component

export default function SecurityStatement() {
  return (
    <div className="bg-white dark:bg-zinc-900 py-16 px-6 md:px-12 lg:px-24 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
        NeuroAssist Security Manifesto
      </h1>

      <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-3xl mx-auto">
        <strong>We didn’t add some paste-and-stick security wallpaper after we built our products.</strong>
        <br />
        We <span className="font-semibold">poured the concrete</span>, <span className="font-semibold">framed the structure</span>, and
        evolved everything from <span className="font-semibold">within our security foundation</span>.
      </p>

      <p className="text-md md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mt-6">
        We are layered from the beginning.
        Every assistant, system, and feature evolves from a core security infrastructure — not bolted on later.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-md">
          <h3 className="text-xl font-bold mb-2">Behavioral Lockdown Engine</h3>
          <p>Monitors user behavior and triggers lockouts for suspicious activity.</p>
        </div>
        <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-md">
          <h3 className="text-xl font-bold mb-2">Multi-Factor Root Recovery</h3>
          <p>PIN + 3 Security Questions + 2 Emails for total account control.</p>
        </div>
        <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-md">
          <h3 className="text-xl font-bold mb-2">Encrypted Emergency Access Key</h3>
          <p>Rotating, one-time-use admin key. Regenerates on access.</p>
        </div>
        <div className="p-6 bg-zinc-100 dark:bg-zinc-800 rounded-2xl shadow-md">
          <h3 className="text-xl font-bold mb-2">Zero Surveillance</h3>
          <p>No ad tracking. No data selling. Full transparency by design.</p>
        </div>
      </div>

      <div className="mt-16">
        <span className="inline-block bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm md:text-base px-6 py-3 rounded-full shadow-md font-medium tracking-wide">
          Layered From The Beginning – Secured by NeuroSentinel™
        </span>
      </div>
    </div>
  );
}
