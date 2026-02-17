import { ExternalLink } from "lucide-react";
import cs2Logo from "@/assets/cs2-logo.png";

interface SkinSite {
  name: string;
  description: string;
  url: string;
  color: string;
}

const sites: SkinSite[] = [
  { name: "DMarket", description: "Buy & sell skins instantly", url: "https://dmarket.com", color: "#00C853" },
  { name: "CS.Money", description: "Trade & buy CS2 skins", url: "https://cs.money", color: "#FFB300" },
  { name: "HaloSkins", description: "CS2 skin marketplace", url: "https://haloskins.com", color: "#7C4DFF" },
  { name: "Tradeit.gg", description: "Instant skin trading", url: "https://tradeit.gg", color: "#00BCD4" },
  { name: "SkinPort", description: "Low fees, trusted marketplace", url: "https://skinport.com", color: "#FF5722" },
  { name: "SkinBaron", description: "German-based skin marketplace", url: "https://skinbaron.de", color: "#2196F3" },
  { name: "BUFF Market", description: "Best prices, Chinese marketplace", url: "https://buff.market", color: "#FF9800" },
  { name: "BitSkins", description: "Buy & sell with crypto support", url: "https://bitskins.com", color: "#4CAF50" },
  { name: "CS.Trade", description: "Automated skin trading bot", url: "https://cs.trade", color: "#E91E63" },
  { name: "Swap.gg", description: "Instant automated trades", url: "https://swap.gg", color: "#9C27B0" },
  { name: "Waxpeer", description: "P2P skin marketplace", url: "https://waxpeer.com", color: "#3F51B5" },
  { name: "LootBear", description: "Rent & sell CS2 skins", url: "https://lootbear.com", color: "#F44336" },
  { name: "SkinsMonkey", description: "Trade skins instantly", url: "https://skinsmonkey.com", color: "#8BC34A" },
  { name: "CSFloat", description: "Buy skins by float value", url: "https://csfloat.com", color: "#00ACC1" },
  { name: "Mannco.Store", description: "Discounted CS2 skins", url: "https://mannco.store", color: "#FF6F00" },
];

const SiteCard = ({ site }: { site: SkinSite }) => (
  <a
    href={site.url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 rounded-lg bg-card px-5 py-4 transition-all duration-200 hover:bg-secondary hover:scale-[1.01] group"
  >
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
      style={{ backgroundColor: site.color + "22", color: site.color }}
    >
      {site.name.charAt(0)}
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-foreground">{site.name}</h3>
      <p className="text-sm text-muted-foreground">{site.description}</p>
    </div>
    <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity" />
  </a>
);

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 py-12">
      <div className="mb-8 flex flex-col items-center">
        <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-primary/30 shadow-lg shadow-primary/10">
          <img src={cs2Logo} alt="CS2 Skins" className="h-full w-full object-cover" />
        </div>
        <h1 className="text-3xl font-bold text-foreground">CS2 Skins</h1>
        <p className="mt-1 text-muted-foreground">Best CS2 Skin Marketplaces & Trading Sites</p>
      </div>

      <div className="flex w-full max-w-xl flex-col gap-2">
        {sites.map((site) => (
          <SiteCard key={site.name} site={site} />
        ))}
      </div>

      <p className="mt-10 text-xs text-muted-foreground/50">
        Trade responsibly. Not affiliated with Valve or Steam.
      </p>
    </div>
  );
};

export default Index;
