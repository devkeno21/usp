import React from "react";
import { Breadcrumb } from "../_components/breadcrumb/breadcrumb.component";
import { Footer } from "@/app/(features)/_components/footer/footer.component";

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Breadcrumb
        links={[
          { title: "Home", href: "/" },
          { title: "FAQ", href: "#" },
        ]}
      />
      {children}
      <Footer />
    </div>
  );
}
