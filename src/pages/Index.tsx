import { ExternalLink, Crosshair } from "lucide-react";
import cs2Logo from "@/assets/cs2-logo.png";

interface SkinSite {
  name: string;
  description: string;
  url: string;
  color: string;
  logo?: string;
}

const sites: SkinSite[] = [
  { name: "CS2 Inspect tool", description: "Preview any custom craft", url: "https://cs2inspects.com/", color: "#fbab19" },
  { name: "SkinSearch", description: "Find CS2 skins, knives, gloves, cases or stickers", url: "https://skinsearch.com/", color: "#02c1f2" },
  { name: "Pricempire.com", description: "Track CS2 inventory price history", url: "https://app.pricempire.com/", color: "#4cf364", logo: "https://pricempire.com/favicon.ico" },
  { name: "DMarket", description: "Buy & sell skins instantly", url: "https://dmarket.com", color: "#00e5ff" },
  { name: "CSFloat", description: "Buy skins by float value", url: "https://csfloat.com", color: "#18ffff" },
  { name: "Tradeit.gg", description: "Instant skin trading", url: "https://tradeit.gg", color: "#00e676" },
  { name: "HaloSkins", description: "CS2 skin marketplace", url: "https://haloskins.com", color: "#b388ff", logo: "https://haloskins.com/favicon.ico" },
  { name: "LIS-SKINS", description: "Trade & buy CS2 skins", url: "https://lis-skins.com/", color: "#ca5e10" },
  { name: "CS.Money", description: "Trade & buy CS2 skins", url: "https://cs.money", color: "#ffab00" },
  { name: "SkinsMonkey", description: "Trade skins instantly", url: "https://skinsmonkey.com", color: "#b2ff59" }, 
  { name: "Buff 163", description: "Best prices, Chinese marketplace", url: "https://buff.163.com/", color: "#ffffff" },
  { name: "BUFF Market", description: "Best prices, Chinese marketplace", url: "https://buff.market", color: "#ffea00" },
  { name: "Swap.gg", description: "Instant automated trades", url: "https://swap.gg", color: "#ea80fc" },
  { name: "UUSKINS", description: "Instant delivery and competitive pricing", url: "https://www.uuskins.com/", color: "#ffcc00" },
  { name: "SkinBaron", description: "German-based skin marketplace", url: "https://skinbaron.de", color: "#448aff" },
  { name: "BitSkins", description: "Buy & sell with crypto support", url: "https://bitskins.com", color: "#69f0ae" },
  { name: "CS.Trade", description: "Automated skin trading bot", url: "https://cs.trade", color: "#ff4081" },
  { name: "Waxpeer", description: "P2P skin marketplace", url: "https://waxpeer.com", color: "#536dfe" },
  { name: "SkinPort", description: "Low fees, trusted marketplace", url: "https://skinport.com", color: "#ff6e40" },
  { name: "Mannco.Store", description: "Discounted CS2 skins", url: "https://mannco.store", color: "#ffd740" },
  { name: "CS.Deals", description: "Skin marketplace & Trade bot", url: "https://cs.deals/", color: "#00def1" },
  { name: "GameBoost", description: "Find the best deals for CS2 skins", url: "https://gameboost.com/counter-strike-2/", color: "#0b6cfb" },
];

const SiteCard = ({ site }: { site: SkinSite }) => (
  <a
    href={site.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 rounded-md border border-border/50 bg-card px-5 py-4 transition-all duration-200 hover:border-primary/40 hover:bg-secondary hover:shadow-[0_0_20px_-5px_hsl(180_100%_40%/0.15)] group"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden">
      <img
        src={site.logo || `https://www.google.com/s2/favicons?domain=${new URL(site.url).hostname}&sz=64`}
        alt={site.name}
        className="h-7 w-7 object-contain"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
          target.parentElement!.innerHTML = `<span style="color:${site.color};font-family:'Share Tech Mono',monospace;font-size:0.875rem;font-weight:700">${site.name.charAt(0)}</span>`;
        }}
      />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-foreground tracking-wide">{site.name}</h3>
      <p className="text-sm text-muted-foreground">{site.description}</p>
    </div>
    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all" />
  </a>
);

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 py-12">
      <div className="mb-10 flex flex-col items-center">
        <div className="relative mb-5">
          <div className="h-24 w-24 overflow-hidden rounded-lg border border-primary/30 shadow-[0_0_30px_-5px_hsl(180_100%_40%/0.3)]">
            <img src={cs2Logo} alt="CS2 Skins" className="h-full w-full object-cover" />
          </div>
          <Crosshair className="absolute -top-2 -right-2 h-5 w-5 text-primary/60" />
        </div>
        <h1 className="text-4xl font-bold text-foreground tracking-wider uppercase">
          CS2 <span className="text-primary">Skins</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground tracking-wide" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          // BEST MARKETPLACES & TRADING SITES
        </p>
      </div>

      <div className="flex w-full max-w-xl flex-col gap-2">
        {sites.map((site) => (
          <SiteCard key={site.name} site={site} />
        ))}
      </div>

      <p className="mt-10 text-xs text-muted-foreground/40" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
        &gt; trade_responsibly | not_affiliated_with_valve
      </p>
    </div>
  );
};

export default Index;
