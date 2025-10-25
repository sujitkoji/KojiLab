import { homepageSEO } from "@/app/seo/homepageSEO";
import ClientHomePage from "@/app/homePage/ClientHomePage";

export const metadata = homepageSEO;

export default function HomePage() {
  return <ClientHomePage />;
}
