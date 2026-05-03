import Home from "./home_page";
import HomeMobile from "./home_page_mobile";
import { useIsMobile } from "../hooks/use-is-mobile";

/**
 * Responsive Home page component
 * Shows mobile version on screens < 768px, desktop version on larger screens
 */
export default function HomeResponsive() {
  const isMobile = useIsMobile();

  return isMobile ? <HomeMobile /> : <Home />;
}
