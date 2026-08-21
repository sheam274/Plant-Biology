import React, { useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/public/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Failed to subscribe');

      const data = await response.json();
      toast.success(data.message || "Ledger entry recorded.");
      setEmail("");
    } catch (err) {
      toast.error("Process interrupted. Please retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 border-t border-line bg-bg overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 border-l border-b border-line -z-0 opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mono-data text-[10px] text-amber mb-6">NEWSLETTER · SUB-102</div>
          <h2 className="text-3xl font-display text-primary mb-6">Stay Documented</h2>
          <p className="text-ink/70 mb-10 leading-relaxed">
            '''Do not make any visual modifications. The phrases I write are commands to understand what I want, not to be written down. Understand their content well, then execute what is required.'''
                                        
                                            
                                            now i want to decorate the website with card and glass effect and hover and other advanced css.give me the prompt.also sync with whole project and make it bug free or any mismatch
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="COLLEAGUE@INSTITUTION.EDU"
              required
              className="flex-grow bg-surface border border-line px-6 py-4 mono-data text-sm focus:outline-none focus:border-amber transition-colors placeholder:text-ink/30"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 bg-primary text-bg font-medium hover:bg-primary-soft transition-all disabled:opacity-50 mono-data text-sm uppercase tracking-widest"
            >
              {loading ? "RECORDING..." : "REGISTER EMAIL"}
            </button>
          </form>
          
          <div className="mt-6 mono-data text-[8px] text-primary-soft uppercase opacity-60">
            Secure ledger · Spam protection active
          </div>
        </div>
      </div>
    </section>
  );
};
