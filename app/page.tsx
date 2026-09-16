import { AppSidebar } from "@/components/layout/appSidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main></main>
    </SidebarProvider>
  );
}
