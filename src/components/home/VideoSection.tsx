import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoSectionProps {
  videoId: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export const VideoSection: React.FC<VideoSectionProps> = ({ videoId, title, description, reverse }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
          <div className="lg:w-1/2 w-full">
            <div className="relative aspect-video bg-surface border border-line group overflow-hidden">
              {!isPlaying ? (
                <>
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                    alt={title}
                    className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <button 
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="w-20 h-20 rounded-full border border-amber/50 flex items-center justify-center bg-bg/20 backdrop-blur-sm group-hover:bg-amber group-hover:border-amber transition-all duration-300">
                      <Play className="w-8 h-8 text-amber group-hover:text-bg fill-current ml-1" />
                    </div>
                  </button>
                </>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title={title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="mono-data text-[10px] text-amber mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-amber" />
              LABORATORY DOCUMENTATION
            </div>
            <h2 className="text-4xl font-display text-primary mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-ink/80 leading-relaxed mb-8">
              {description}
            </p>
            <div className="p-6 border border-line bg-surface/30 relative">
              <div className="mono-data text-[8px] text-primary-soft absolute top-0 right-4 -translate-y-1/2 bg-bg px-2">
                CATALOG REF: YT-{videoId.slice(0, 4).toUpperCase()}
              </div>
              <p className="text-sm italic text-primary-soft">
                "Our vision to develop trained, proficient, and competent human resources for the development of Shonar Bangla and vision 2041."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
