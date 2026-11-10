import React, { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { PORTFOLIO_CONFIG } from "../config/portfolio";
import { useSectionReveals } from "../hooks/useSectionReveals";

/** Reels & Shorts (vertical cards, YouTube plays inline) + thumbnail gallery. */
export const ReelsSection: React.FC = () => {
  const { reels, thumbnails, theme } = PORTFOLIO_CONFIG;
  const [playing, setPlaying] = useState<string | null>(null);
  const sectionRef = useSectionReveals<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="reels"
      className="bg-[#050505] text-white py-24 md:py-36 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div data-reveal="up" className="mb-12 md:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span style={{ backgroundColor: theme.accent }} className="w-1.5 h-1.5 rounded-full" />
            <span className="text-xs uppercase font-mono tracking-widest text-gray-400">
              Short-Form
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase">
            Reels &amp; <span className="font-serif font-light italic normal-case">Shorts</span>
          </h2>
        </div>
      </div>

      {/* Auto-scrolling strip: view advances toward the right (cards slide left); the list is
          rendered twice for a seamless -50% loop. Pauses on hover/focus. */}
      <div data-reveal="up" className="marquee-row pb-6">
        <div
          className="marquee-track"
          style={
            {
              "--marquee-duration": "130s",
            } as React.CSSProperties
          }
        >
        {[...reels, ...reels].map((r, n) => {
          const i = n % reels.length;
          const copy = n < reels.length ? 0 : 1;
          const isPlaying = r.youtubeId && playing === `${copy}-${r.youtubeId}`;
          return (
            <div
              key={`${copy}-${r.url}`}
              aria-hidden={copy === 1 || undefined}
              className="relative shrink-0 mr-4 md:mr-5 w-[62vw] sm:w-[260px] md:w-[280px] aspect-[9/16] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
            >
              {isPlaying ? (
                <iframe
                  title={`Short ${i + 1}`}
                  src={`https://www.youtube.com/embed/${r.youtubeId}?autoplay=1&rel=0&playsinline=1`}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (r.youtubeId) {
                      e.preventDefault();
                      setPlaying(`${copy}-${r.youtubeId}`);
                    }
                  }}
                  aria-label={`Play ${r.platform} reel ${i + 1}`}
                  className="group absolute inset-0 block"
                >
                  <img
                    src={r.image}
                    alt={`${r.platform} reel ${i + 1} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
                    {r.platform}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span
                      style={{ backgroundColor: theme.accent }}
                      className="flex h-14 w-14 items-center justify-center rounded-full text-black opacity-90 transition-transform duration-300 group-hover:scale-110"
                    >
                      {r.youtubeId ? (
                        <Play className="h-6 w-6 fill-current" />
                      ) : (
                        <ArrowUpRight className="h-6 w-6" />
                      )}
                    </span>
                  </span>
                </a>
              )}
            </div>
          );
        })}
        </div>
      </div>

      {/* Thumbnail designs */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 mt-24 md:mt-32">
        <div data-reveal="up" className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span style={{ backgroundColor: theme.accent }} className="w-1.5 h-1.5 rounded-full" />
            <span className="text-xs uppercase font-mono tracking-widest text-gray-400">
              Thumbnail Design
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
            Covers that earn the{" "}
            <span className="font-serif font-light italic normal-case">click</span>
          </h3>
        </div>
        <div
          data-reveal="up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {thumbnails.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Thumbnail design ${i + 1}`}
              loading="lazy"
              className="w-full aspect-video object-cover rounded-xl border border-white/10"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelsSection;
