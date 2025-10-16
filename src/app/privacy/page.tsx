import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-white/80">
      <h1 className="text-4xl font-semibold text-white">Privacy Policy</h1>
      <p className="mt-4 text-sm text-white/60">
        Last updated{" "}
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>

      <section className="mt-10 space-y-8 text-sm leading-7">
        {/* 1. Overview */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">
            1. Overview
          </h2>
          <p className="mt-3">
            Top 4 (“the App”) is developed and published by Quinn Darling. 
            This Privacy Policy explains how we handle information when you 
            use the App. In short: we don’t collect, store, or share any 
            personal data. Everything you do inside the App stays on your 
            device.
          </p>
        </div>

        {/* 2. Information We Collect */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">
            2. Information we collect
          </h2>
          <p className="mt-3">
            We do not collect or process any personal information. The App 
            does not require an account, login, or any identifiable data. 
            All gameplay data is stored locally on your device and is deleted 
            automatically if you uninstall the App.
          </p>
        </div>

        {/* 3. Third-Party Services */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">
            3. Third-party services
          </h2>
          <p className="mt-3">
            Top 4 does not use any third-party analytics, advertising, 
            tracking, or attribution services. No data is shared with 
            external providers or cloud platforms. The App operates 
            completely offline.
          </p>
        </div>

        {/* 4. Data Storage and Security */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">
            4. Data storage and security
          </h2>
          <p className="mt-3">
            Since all data remains on your device, you have full control. 
            If you wish to delete your data, you can do so by uninstalling 
            the App. We do not have access to any user content, and no 
            information is transmitted to external servers.
          </p>
        </div>

        {/* 5. Children’s Privacy */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">
            5. Children’s privacy
          </h2>
          <p className="mt-3">
            Top 4 is designed for general audiences and may be used by users 
            of all ages. Because we do not collect personal information, the 
            App complies with applicable child privacy regulations, including 
            COPPA (Children’s Online Privacy Protection Act).
          </p>
        </div>

        {/* 6. Changes to This Policy */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">
            6. Changes to this policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time to reflect 
            improvements or changes to the App. If we make significant 
            updates, we’ll post the new policy within the App and update the 
            “Last updated” date above.
          </p>
        </div>

        {/* 7. Contact */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <h2 className="text-xl font-semibold text-white">
            7. Contact
          </h2>
          <p className="mt-3">
            If you have any questions about this Privacy Policy or how Top 4 
            handles information, please contact{" "}
            <Link
              className="text-white underline"
              href="mailto:support@top4game.com"
            >
              support@top4game.com
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}

