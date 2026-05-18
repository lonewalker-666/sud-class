import Dashboard from "@/src/components/dashboard";
import SiteLayout from "@/src/components/layout/siteLayout";


export default function RootLayout() {
  return (
    <SiteLayout>
      <Dashboard />
    </SiteLayout>
  );
}
