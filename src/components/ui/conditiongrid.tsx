import React from "react";
import { MoveUpRight, Sparkles, Globe, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectsTypes {
  id: string;
  img: string;
  title: string;
  des?: string;
  badge?: string;
  category?: string;
  techStack?: string[];
  raw?: any;
}

const defaultProjects: ProjectsTypes[] = [
  {
    id: "01",
    img: "https://cdn.21st.dev/assets/mirror/f2/f267202371f1d7603ebceea7cbcac251b6a9f5b035f6ff48146e0e29f85736d8.jpg",
    title: "Distrokings",
    des: "We make your logo communicate with your customers more than words ever could",
  },
  {
    id: "02",
    img: "https://cdn.21st.dev/assets/mirror/ac/ac1b54879a9289f1cf908a8e6e7e4da09828ddd43eef95cae78a0c71cb748c29.jpg",
    title: "Profitables",
    des: "We are dedicated to unlocking your business potential through precision development",
  },
  {
    id: "03",
    img: "https://cdn.21st.dev/assets/mirror/94/94876618573b337e94fc0f2716364c23a6f4e486ccb75e5a25a91af75dd30ca5.jpg",
    title: "Topserve-copiers",
    des: "We are dedicated to unlocking your business potential through precision development",
  },
  {
    id: "04",
    img: "https://cdn.21st.dev/assets/mirror/fc/fc8b7c4531f5c2a277663830ae19cac5569b9e36c97a65e3bd6a515f4435aeb9.jpg",
    title: "Labramart.",
    des: "We specialize in crafting marketing solutions that propel your brand to new heights",
  },
];

interface ConditionGridProps {
  items?: ProjectsTypes[];
  onSelect?: (project: ProjectsTypes) => void;
  className?: string;
}

export default function ConditionGrid({
  items,
  onSelect,
  className = "",
}: ConditionGridProps) {
  const displayProjects = items && items.length > 0 ? items : defaultProjects;

  return (
    <div className={`grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6 overflow-hidden w-full ${className}`}>
      {displayProjects.map((project, index) => {
        const total = displayProjects.length;
        const pairIndex = Math.floor(index / 2);
        const isFirstInPair = index % 2 === 0;

        let colSpanClass = "col-span-12 sm:col-span-6";
        if (total === 1) {
          colSpanClass = "col-span-12";
        } else if (index === total - 1 && isFirstInPair) {
          colSpanClass = "col-span-12";
        } else if (pairIndex % 2 === 0) {
          colSpanClass = isFirstInPair
            ? "col-span-12 lg:col-span-5"
            : "col-span-12 lg:col-span-7";
        } else {
          colSpanClass = isFirstInPair
            ? "col-span-12 lg:col-span-7"
            : "col-span-12 lg:col-span-5";
        }

        const isML = project.category === "ml" || project.badge === "Machine Learning";
        const isAndroid = project.category === "android";

        return (
          <motion.article
            key={project.id ?? project.title}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.45, delay: (index % 4) * 0.08 }}
            viewport={{ once: true, margin: "-40px" }}
            onClick={() => onSelect?.(project)}
            className={`relative group ${colSpanClass} rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200/80 dark:border-white/10`}
            style={{
              background: "var(--bg-card, #111118)",
            }}
          >
            {/* Image Container with Full-Bleed Height */}
            <div className="w-full h-[320px] sm:h-[400px] lg:h-[460px] xl:h-[500px] overflow-hidden bg-neutral-950 relative">
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Vignette Overlays for Maximum Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/15 pointer-events-none" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />

              {/* Top Tags Overlay */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between pointer-events-none">
                {project.badge && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-black/60 text-white border border-white/20 shadow-sm">
                    {isML ? (
                      <Sparkles className="w-3 h-3 text-emerald-400" />
                    ) : isAndroid ? (
                      <Smartphone className="w-3 h-3 text-purple-400" />
                    ) : (
                      <Globe className="w-3 h-3 text-emerald-400" />
                    )}
                    <span>{project.badge}</span>
                  </span>
                )}
                <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono font-medium backdrop-blur-md bg-black/50 text-white/80 border border-white/15">
                  #{project.id}
                </span>
              </div>
            </div>

            {/* Bottom Overlay with Title & Signature Circular Arrow Button */}
            <div className="absolute bottom-0 text-black w-full p-3 sm:p-5 flex justify-between items-end gap-3 pointer-events-none">
              <div className="flex flex-col gap-1.5 max-w-[calc(100%-60px)]">
                {project.des && (
                  <p className="text-xs sm:text-sm text-white/90 line-clamp-1 font-medium drop-shadow-md hidden sm:block">
                    {project.des}
                  </p>
                )}
                <div className="flex items-center flex-wrap gap-2">
                  <h3 className="lg:text-lg text-xs sm:text-sm bg-black/85 text-white font-bold rounded-xl py-2 px-3 sm:px-4 backdrop-blur-md border border-white/15 shadow-xl group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-colors duration-300 break-words">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Signature Action Circle Button */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 text-white shrink-0 grid place-content-center rounded-full bg-black/85 backdrop-blur-md border border-white/20 shadow-xl group-hover:bg-emerald-500 group-hover:text-neutral-950 group-hover:scale-110 group-hover:rotate-45 transition-all duration-300 pointer-events-auto">
                <MoveUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
